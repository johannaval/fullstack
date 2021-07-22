import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {

  const response = await axios.get(`${baseUrl}`)
  return response.data
}


const createNew = async (content) => {

  const object = { content }
  object.votes = 0
  const response = await axios.post(`${baseUrl}`, object)

  return response.data
}

const addNewVote = async (anecdote) => {

  const votes = anecdote.votes + 1
  const updatedAnecdote = { ...anecdote, votes: votes }
  const response = await axios.put(`${baseUrl}/${anecdote.id}`, updatedAnecdote)

  return response.data
}

export default {
  getAll,
  createNew,
  addNewVote,
}