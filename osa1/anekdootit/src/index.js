import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handle, button }) => (
  <button onClick={handle}> {button} </button>
)
const MostVoted = (props) => {

  let biggestCount = 0
  let index = 0
  let indexOfMostVoted = 0

  props.votes.forEach(vote => {

    if (vote >= biggestCount) {
      biggestCount = vote
      indexOfMostVoted = index
    }
    index += 1
  })

  if (biggestCount === 0) {
    return (
      <>
        <p>No votes have been given yet</p>
      </>
    )
  }

  return (
    <>
      {props.anecdotes[indexOfMostVoted]}
      <p>has {biggestCount} votes</p>
    </>
  )
}

const App = (props) => {

  const points = Array.apply(null, new Array(props.anecdotes.length)).map(Number.prototype.valueOf, 0)
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(points)
  let number = selected

  const handleChange = () => {
    number = Math.floor((Math.random() * props.anecdotes.length));
    setSelected(number)
  }

  let handleVote = () => {

    const copy = [...vote]
    copy[number] += 1
    setVote(copy)

  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p>has {vote[number]} votes</p>
      <br></br>
      <Button handle={handleVote} button={'vote'} />
      <Button handle={handleChange} button={'next anecdote'} />
      <br></br>
      <h1>Anecdote with most votes</h1>
      <MostVoted anecdotes={props.anecdotes} votes={vote} />

    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)