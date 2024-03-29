const { ApolloServer, UserInputError, AuthenticationError, gql } = require('apollo-server')
const config = require('./utils/config')
const mongoose = require('mongoose')
const Author = require('./models/author')
const Book = require('./models/book')
const User = require('./models/user')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'NEED_HERE_A_SECRET_KEY'



mongoose.connect(config.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })



const typeDefs = gql`
type Author {
  name: String!
  id: ID!
  born: Int
  bookCount: Int!
}
type Book {
  title: String!
  published: Int!
  author: Author!
  id: ID!
  genres: [String!]!
}
type User {
  username: String!
  favoriteGenre: String!
  id: ID!
}
type Token {
  value: String!
}
type Query {
  bookCount: Int!
  authorCount: Int!
  allBooks(author: String, genre: String): [Book!]!
  BooksByGenre(genre: String): [Book!]!
  allAuthors: [Author!]!
  me: User
}

type Mutation {
  addBook(
    title: String!
    author: String!
    published: Int!
    genres: [String!]!
  ): Book
  editAuthor(
    name: String!
    setBornTo: Int!
  ): Author
  createUser(
    username: String!
    favoriteGenre: String!
  ): User
  login(
    username: String!
    password: String!
  ): Token
}
`
const { v1: uuid } = require('uuid')

const resolvers = {
  Query: {
    me: (root, args, context) => {
      return context.currentUser
    },
    bookCount: () => Book.collection.countDocuments(),
    authorCount: () => Author.collection.countDocuments(),
    allBooks: async (root, args) => {

      if (args.author && !args.genre) {
        const author = await Author.findOne({ name: args.author }, '_id')
        return await Book.find({ author: author._id }).populate('author')
      }
      if (!args.author && args.genre) {
        return await Book.find({ genres: { $in: [args.genre] } }).populate('author')
      }
      if (args.author && args.genre) {
        const author = await Author.findOne({ name: args.author }, '_id')
        var booksByGenreAndAuthor = await Book.find({ genres: { $in: [args.genre] } }).populate('author')
        var booksByAuthor = await Book.find({ author: author._id }).populate('author')

        booksByAuthor.map((book) => {
          if (!booksByGenreAndAuthor.includes(book)) {
            booksByGenreAndAuthor = booksByGenreAndAuthor.concat(book)
          }
        }
        )
        return booksByGenreAndAuthor
      }
      return Book.find({}).populate('author')
    },
    allAuthors: async () => await Author.find({})
  },
  Author: {
    name: (root) => root.name,
    id: (root) => root.id,
    born: (root) => root.born,
    bookCount: async (root) => {
      return await Book.find({ author: root.id }).count()
    }
  },
  Mutation: {
    addBook: async (root, args, context) => {

      const currentUser = context.currentUser

      if (!currentUser) {
        throw new AuthenticationError("not authenticated")
      }
      if (currentUser) {
        if (await Author.findOne({ name: args.author })) {

          const author = await Author.findOne({ name: args.author })
          const book = new Book({ ...args, author: author })

          try {
            await book.save()
          } catch (error) {
            throw new UserInputError(error.message, { invalidArgs: args, })
          }
          return book
        }

        const newAuthor = new Author({ name: args.author })
        const book = new Book({ ...args, author: newAuthor })

        try {
          await book.save()
          await newAuthor.save()
        } catch (error) {
          throw new UserInputError(error.message, { invalidArgs: args, })
        }
        return book
      }
    },
    editAuthor: async (root, args, context) => {

      const currentUser = context.currentUser

      if (!currentUser) {
        throw new AuthenticationError("not authenticated")
      }

      if (currentUser) {
        const author = await Author.findOne({ name: args.name })

        if (!author) {
          return null
        }
  
        author.born = args.setBornTo

        try {
          await author.save()
        } catch (error) {
          throw new UserInputError(error.message, {
            invalidArgs: args,
          })
        }
        return author
      }
    },
    createUser: (root, args) => {
      const user = new User({ username: args.username, favoriteGenre: args.favoriteGenre })

      try {
        user.save()
      } catch (error) {
        throw new UserInputError(error.message, {
          invalidArgs: args
        })
      }
      return user
    },
    login: async (root, args) => {
      const user = await User.findOne({ username: args.username })

      if (!user || args.password !== 'secret') {
        throw new UserInputError("wrong credentials")
      }

      const userForToken = {
        username: user.username,
        id: user._id,
      }

      return { value: jwt.sign(userForToken, JWT_SECRET) }
    },
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {

    const auth = req ? req.headers.authorization : null

    if (auth && auth.toLowerCase().startsWith('bearer ')) {
      const decodedToken = jwt.verify(auth.substring(7), JWT_SECRET)
      const currentUser = await User.findById(decodedToken.id)
      return { currentUser }
    }
  }
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})