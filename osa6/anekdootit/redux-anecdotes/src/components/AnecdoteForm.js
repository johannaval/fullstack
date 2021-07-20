import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { hideNotification, setNotification } from '../reducers/notificationReducer'



const AnecdoteForm = (props) => {

    const dispatch = useDispatch()

    const addAnecdote = (event) => {

        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''

        dispatch(createAnecdote(content))

        dispatch(setNotification(`you added anecdote '${content}'`))
        setTimeout(() => {
            dispatch(hideNotification())
        }, 5000)


    }

    return (
        <div>
            <p></p>
            <h1>create new</h1>
            <form onSubmit={addAnecdote}>
                <input name="anecdote" />
                <button type="submit">create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm