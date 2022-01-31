
import React, { useState } from 'react'

const Books = (props) => {

  const books = props.books
  var [filteredBooks, setFilteredBooks] = useState(props.books)
  const [genre, setGenre] = useState('all books')

  var genres = ['all genres']

  books.map(book => (
    book.genres.map(genre => {
      if (!genres.includes(genre)) {
        genres = genres.concat(genre)
      } return genre
    })
  ))

  const filterBooks = (genre) => {
    setGenre(genre)

    if (genre === 'all genres') {
      setFilteredBooks(books)
    } else {
      setFilteredBooks(books.filter(book => book.genres.includes(genre)))
    }
  }


  if (!props.show) {
    return null
  }

  return (
    <div>
      <h2>books</h2>
      <p>in genre <b>{genre}</b></p>

      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              author
            </th>
            <th>
              published
            </th>
          </tr>
          {filteredBooks.map(a =>
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.published}</td>
              <td>{a.author.name}</td>
            </tr>
          )}
        </tbody>
      </table>

      {genres.map(g =>
        <button onClick={() => filterBooks(g)}> {g}</button >
      )}
    </div>
  )
}

export default Books