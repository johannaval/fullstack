import React, { useState } from 'react'
import { gql, useQuery, useLazyQuery, useApolloClient } from '@apollo/client'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import Login from './components/LoginForm'
import Recommend from './components/Recommend'

const ALL_AUTHORS = gql`
  query {
    allAuthors  {
      name
      born
      bookCount
      id
    }
  }
`
const ALL_BOOKS = gql`
  query AllBooks($genre: String){
    allBooks(genre: $genre ) {
      title
      published
      genres
      author {
        name
        bookCount
        born
        id
      }
      id
    }
  }
`

const ME = gql`
  query {
    me  {
      username
      favoriteGenre
    }
  }
`

const App = () => {

  const [token, setToken] = useState(null)
  const client = useApolloClient()
  const [page, setPage] = useState('authors')
  const [favGenre, setFavGenre] = useState(null)


  const resultOfAuthors = useQuery(ALL_AUTHORS, {
    pollInterval: 2000
  })
  const resultOfBooks = useQuery(ALL_BOOKS, {
    pollInterval: 2000
  })
  const resultOfMe = useQuery(ME, {
    pollInterval: 2000
  })
  const [setGenre, getBooksByGenre] = useLazyQuery(ALL_BOOKS, {
  })

  const booksByGenre = () => {
    setFavGenre(resultOfMe.data.me.favoriteGenre)
    setGenre({ variables: { genre: resultOfMe.data.me.favoriteGenre } })
  }

  const logout = () => {
    setToken(null)
    localStorage.clear()
    client.resetStore()
  }

  if (resultOfAuthors.loading || resultOfBooks.loading) {
    return <div>loading...</div>
  }

  return (
    <div>

      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        {token ? (<button onClick={() => setPage('add')}>add book</button>) : ('')}
        {token ? (<button onClick={() => { booksByGenre(); setPage('recommend') }}>recommend</button>) : ('')}
        {token ? ('') : (<button onClick={() => setPage('login')}>login</button>)}
        {token ? (<button onClick={() => logout()}>logout</button>) : ('')}
      </div>

      <Authors show={page === 'authors'} authors={resultOfAuthors.data.allAuthors} token={token} />
      <Books show={page === 'books'} books={resultOfBooks.data.allBooks} />
      <NewBook show={page === 'add'} />
      <Recommend show={page === 'recommend'} booksByGenre={getBooksByGenre.data} favGenre={favGenre} />
      <Login show={page === 'login'} setToken={setToken} />

    </div>
  )
}

export default App