import React, { useState, useEffect } from 'react'
import { gql, useMutation } from '@apollo/client'


const EDIT_BOOK = gql`
mutation editBook($name: String!, $born: Int!) {
  editAuthor(
    name: $name,
    setBornTo: $born,
  ) {
    name
    born
  }
}
`

const Authors = (props) => {

  const [name, setName] = useState('')
  const [born, setBorn] = useState('')

  const [changeBornYear, result] = useMutation(EDIT_BOOK)
  const token = props.token

  useEffect(() => {
    if (result.data && result.data.editBook === null) {
      console.log('tämän nimistä kirjoittajaa ei ole')
    }
  }, [result.data])  // eslint-disable-line 

  const submit = async (event) => {
    event.preventDefault()

    changeBornYear({ variables: { name, born: parseInt(born, 10) } })
    setName('')
    setBorn('')
  }

  const authors = props.authors

  if (!props.show) {
    return null
  }

  return (
    <div>

      <h2>authors</h2>

      <table>
        <tbody>
          <tr>
            <th></th>
            <th> born </th>
            <th> books </th>
          </tr>
          {authors.map(a =>
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          )}
        </tbody>
      </table>

      <br></br>

      {token ? (
        <form onSubmit={submit}>
          <h2>Set birthyear</h2>
          <div>
            <select onChange={({ target }) => setName(target.value)}>
              {authors.map((author) => (
                <option key={author.id} value={author.name}>{author.name}</option>
              ))}
            </select>
          </div>
          <div>
            born
            <input
              value={born}
              onChange={({ target }) => setBorn(target.value)}
            />
          </div>
          <button type='submit'>update author</button>
        </form>
      ) : ('')}
      
    </div>
  )
}

export default Authors