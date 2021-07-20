import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import anecdoteReducer, { voteAnecdote } from '../reducers/anecdoteReducer'
import { hideNotification, setNotification } from '../reducers/notificationReducer'


const Anecdote = ({ anecdote, handleClick }) => {

    return (
        <div>
            {anecdote.content}
            <p>has  {anecdote.votes} <button onClick={handleClick}> vote </button> </p>
            <p></p>
        </div >
    )
}

const vote = ({ anecdote, dispatch }) => {

    dispatch(voteAnecdote(anecdote.id))

    dispatch(setNotification(`you voted '${anecdote.content}'`))
    setTimeout(() => {
        dispatch(hideNotification())
    }, 5000)
}


const Anecdotes = () => {

    var anecdotes = useSelector(state => state.anecdotes)
    var filter = useSelector(state => state.filter)

    if (filter !== '') {
        anecdotes = anecdotes.filter(n => n?.content.toLowerCase().includes(filter.toLowerCase()))
    }


    const dispatch = useDispatch()


    return (
        <div>
            {anecdotes.sort((a, b) => b.votes - a.votes)
                .map(anecdote =>
                    <Anecdote
                        key={anecdote.id}
                        anecdote={anecdote}
                        handleClick={() => vote({ anecdote, dispatch })}
                    />
                )
            }
        </div>
    )
}



export default Anecdotes