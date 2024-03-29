import React, { useState } from 'react'
import {
  Switch, Route, Link, useRouteMatch, useHistory,
} from "react-router-dom"
import { useField } from './hooks'

const Menu = (props) => {

  const padding = {
    paddingRight: 5
  }

  const match = useRouteMatch('/anecdotes/:id')
  const anecdote = match ? props.anecdotes.find(anecdote => anecdote.id === match.params.id) : null

  return (
    <div>
      <div>
        <Link style={padding} to="/">anecdotes</Link>
        <Link style={padding} to="/create">create new</Link>
        <Link style={padding} to="/about">about</Link>
      </div>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/create">
          <CreateNew addNew={props.addNew} />
        </Route>
        <Route path="/anecdotes/:id">
          <Anecdote anec={anecdote} />
        </Route>
        <Route path="/">
          <AnecdoteList anecdotes={props.anecdotes} message={props.message} />
        </Route>
      </Switch>
    </div>
  )
}


const AnecdoteList = ({ anecdotes, message }) => {

  return (
    < div >
      <h2>Anecdotes</h2>
      <p>{message}</p>
      <ul>
        {anecdotes.map(anecdote =>
          <li key={anecdote.id} >
            <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
          </li>
        )}
      </ul>
    </div >
  )
}

const About = () => (
  <div>
    <h2>About anecdote app</h2>
    <p>According to Wikipedia:</p>

    <em>An anecdote is a brief, revealing account of an individual person or an incident.
      Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
      such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
      An anecdote is "a story with a point."</em>

    <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
  </div>
)

const Footer = () => (
  <div>
    Anecdote app for <a href='https://courses.helsinki.fi/fi/tkt21009'>Full Stack -websovelluskehitys</a>.

    See <a href='https://github.com/fullstack-hy/routed-anecdotes/blob/master/src/App.js'>https://github.com/fullstack-hy2019/routed-anecdotes/blob/master/src/App.js</a> for the source code.
  </div>
)

const CreateNew = (props) => {

  const history = useHistory()

  const { resetFields: resetContentField, ...content} = useField('text')
  const { resetFields: resetAuthorField, ...author} = useField('text')
  const { resetFields: resetInfoField, ...info} = useField('text')

  const handleResetFields = (e) => {
    resetContentField()
    resetAuthorField()
    resetInfoField()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0
    })
    history.push('/')
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <div>
        content: 
        <input  {...content} />
        <br />
        author: 
        <input {...author} />
        <br />
        info: 
        <input {...info} />
      </div>
      <button onClick={handleSubmit}> create </button>
      <button onClick={handleResetFields}> reset </button>
    </div>
  )
}

const Anecdote = ({ anec }) => {

  const anecdote = anec

  return (
    <div>
      <h2>{anecdote.content}</h2>
      <div>
        <p> has {anecdote.votes} votes </p>
      </div>
      <div>
        <p> for more info see <a href={anecdote.info}> {anecdote.info}</a> </p>
      </div>
    </div>
  )
}

const App = () => {

  const [message, setMessage] = useState(null)
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: '1'
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: '2'
    }
  ])

  const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    setAnecdotes(anecdotes.concat(anecdote))
    setMessage(`a new ancdote ${anecdote.content} created!`)

    setTimeout(() => {
      setMessage(null)
    }, 10000)
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu anecdotes={anecdotes} addNew={addNew} message={message} />
      <Footer />
    </div>
  )
}

export default App;