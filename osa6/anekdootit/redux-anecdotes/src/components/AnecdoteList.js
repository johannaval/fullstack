
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'


const Anecdote = ({ anecdote, handleClick }) => {

    return (
        <div>
            {anecdote.content}
            <p>has  {anecdote.votes} </p>
            <button onClick={handleClick}> vote </button>
            <p></p>
        </div >
    )
}

const Anecdotes = () => {

    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state)

    return (

        <div>
            <h2>Anecdotes</h2>

            {anecdotes.sort((a, b) => b.votes - a.votes)
                .map(anecdote =>
                    <Anecdote
                        key={anecdote.id}
                        anecdote={anecdote}
                        handleClick={() =>
                            dispatch(voteAnecdote(anecdote.id))
                        }
                    />
                )
            }
        </div>
    )
}

export default Anecdotes