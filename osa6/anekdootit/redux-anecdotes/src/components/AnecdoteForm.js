import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

    const addAnecdote = async (event) => {

        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''

        props.createAnecdote(content)
        props.setNotification(`you added anecdote '${content}'`, 10)
    }

    return (
        <div>
            <p></p>
            <h1>create new</h1>
            <form onSubmit={addAnecdote}>
                <input name="anecdote" />
                <p> <button type="submit">create</button> </p>
            </form>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes
    }
}

const mapDispatchToProps = { createAnecdote, setNotification }

const ConnectedAnecdoteForm = connect(mapStateToProps, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm