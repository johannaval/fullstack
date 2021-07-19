import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import counterReducer from './reducers/counterReducer'



const store = createStore(counterReducer)

const App = () => {



const getAll = () => {

  const pos = store.getState().good
  const ok = store.getState().ok
  const bad = store.getState().bad

  const votes = pos + ok + bad

  return votes

}


const getAverage = () => {

  const pos = store.getState().good
  const ok = store.getState().ok
  const bad = store.getState().bad

  const votes = pos + ok + bad
  const average = (pos - bad)

  if (votes > 0) {
    return (average / votes)
  }
  return 0
}


const getPositiveRate = () => {

  const pos = store.getState().good
  const ok = store.getState().ok
  const bad = store.getState().bad

  const votes = pos + ok + bad

  if (votes > 0) {
    return (100 * (pos / votes))
  }
  return 0
}



  const Button = ({ handleClick, buttonName }) => (
    <button onClick={handleClick}> {buttonName} </button>
  )

  const handleGoodClick = () => {
    store.dispatch({ type: 'GOOD' })
  }

  const handleNeutralClick = () => {
    store.dispatch({ type: 'OK' })
  }

  const handleBadClick = () => {
    store.dispatch({ type: 'BAD' })
  }

  const handleZeroClick = () => {
    store.dispatch({ type: 'ZERO' })
  }


  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <p></p>
        <Button handleClick={handleGoodClick} buttonName={'good'} />
        <Button handleClick={handleNeutralClick} buttonName={'neutral'} />
        <Button handleClick={handleBadClick} buttonName={'bad'} />
        <Button handleClick={handleZeroClick} buttonName={'reset stats'} />
        <p></p>
        <h1>statistics </h1>
        <p></p>
        <div>good {store.getState().good}</div>
        <div>neutral {store.getState().ok}</div>
        <div>bad {store.getState().bad}</div>
        <div>all {getAll()}</div>
        <div>average {getAverage()}</div>
        <div>positive {getPositiveRate()} %</div>


      </div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)