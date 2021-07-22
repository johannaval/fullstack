import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


const Anecdote = ({ anecdote, handleClick }) => {

    return (
        <div>
            {anecdote.content}
            <p>has  {anecdote.votes} <button onClick={handleClick}> vote </button> </p>
            <p></p>
        </div >
    )
}

const vote = async ({ anecdote, voteAnecdote, setNotification }) => {

    voteAnecdote(anecdote)
    setNotification(`you voted '${anecdote.content}'`, 10)
}


const Anecdotes = (props) => {

    var anecdotes = props.anecdotes
    var filter = props.filter

    if (filter !== '') {
        anecdotes = anecdotes.filter(n => n?.content.toLowerCase().includes(filter.toLowerCase()))
    }

    const voteAnecdote = props.voteAnecdote
    const setNotification = props.setNotification

    return (
        <div>
            {anecdotes.sort((a, b) => b.votes - a.votes)
                .map(anecdote =>
                    <Anecdote
                        key={anecdote.id}
                        anecdote={anecdote}
                        handleClick={() => vote({ anecdote, voteAnecdote, setNotification })}
                    />
                )
            }
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes,
        filter: state.filter,
    }
}

const mapDispatchToProps = { voteAnecdote, setNotification }


const ConnectedAnecdotes = connect(mapStateToProps, mapDispatchToProps)(Anecdotes)
export default ConnectedAnecdotes