const totalLikes = (array) => {
 
    const reducer = (sum, item) => {
        return sum + item.likes
    }
    return (array.reduce(reducer, 0))
 }
  
  
 const favoriteBlog = (blogs) => {
  
    var mostLikedBlog = blogs[0]
  
    mostLiked = blogs.map(blog => {
        if (blog.likes > mostLikedBlog.likes) {
            mostLikedBlog = blog
        }
    }
    )
    return mostLikedBlog
 }
  
  
 const dummy = (blogs) => {
  
    return (1)
 }
  
  
 const mostBlogs = (blogs) => {
  
    const blogsPerAuthor = blogs
        .reduce((table, { author }) => {
            if (table[author] === undefined) {
                table[author] = 0
            } else {
                table[author] = table[author]
            }
            table[author] = table[author] + 1
            return table
        },
            {})
  
    const sortedList = Object
        .keys(blogsPerAuthor)
        .sort((author1, author2) =>
            blogsPerAuthor[author2] - blogsPerAuthor[author1])
  
    const mostBlogs = sortedList[0]
  
    const data = {
        author: mostBlogs,
        blogs: blogsPerAuthor[mostBlogs]
    }
  
    return data
 }
  
 const mostLikes = (blogs) => {
  
    const likesPerAuthor = blogs
        .reduce((table, { author, likes }) => {
            if (table[author] === undefined) {
                table[author] = 0
            } else {
                table[author] = table[author]
            }
            table[author] = table[author] + likes
            return table
        }, {})
  
    const sortedList = Object
        .keys(likesPerAuthor).
        sort((author1, author2) =>
            likesPerAuthor[author2] - likesPerAuthor[author1])
  
    const mostLikes = sortedList[0]
  
    const data = {
        author: mostLikes,
        likes: likesPerAuthor[mostLikes]
    }
  
    return data
 }
  
  
 module.exports = {
    totalLikes,
    favoriteBlog,
    dummy,
    mostBlogs,
    mostLikes,
 }
 