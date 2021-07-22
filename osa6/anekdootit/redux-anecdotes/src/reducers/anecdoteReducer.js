import { act } from "react-dom/cjs/react-dom-test-utils.production.min"
import anecdoteService from '../services/anecdotes'

export const voteAnecdote = anecdote => {

  return async dispatch => {
    await anecdoteService.addNewVote(anecdote)
    var id = anecdote.id

    dispatch({
      type: 'VOTE',
      data: { id }
    })
  }
}


export const createAnecdote = content => {

  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)

    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    })
  }
}


export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}


const anecdoteReducer = (state = [], action) => {


  switch (action.type) {
    case 'VOTE':

      const id = action.data.id
      const anecdoteToVote = state.find(n => n.id === id)

      const votedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1
      }

      return state.map(anec =>
        anec.id !== id ? anec : votedAnecdote
      )

    case 'NEW_ANECDOTE':
      return state.concat(action.data)

    case 'INIT_ANECDOTES':
      return action.data



    default: return state
  }
}

export default anecdoteReducer