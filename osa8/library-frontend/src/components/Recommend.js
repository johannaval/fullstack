
import React, { useEffect, useState } from 'react'

const Recommend = (props) => {

    const [books, setBooks] = useState(null)
    
    useEffect(() => {
        var booksByGenre = props.booksByGenre
        if (booksByGenre) {
            setBooks(booksByGenre.allBooks)
        }
    }, [props.booksByGenre])


    if (!props.show || books === null) {
        return null
    }

    return (
        <div>
            <h2>recommendations</h2>
            <p>books in your favorite genre <b>{props.favGenre}</b></p>

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
                    {books.map(a =>
                        <tr key={a.title}>
                            <td>{a.title}</td>
                            <td>{a.published}</td>
                            <td>{a.author.name}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Recommend