import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.header}
      </h1>
    </div>
  )
}

const StatisticsLine = (props) => {

  let sum = 0
  let pos = 0
  let possum = 0

  const line = props.text


  if (line == 'good' || line == 'neutral' || line == 'bad') {
    return (
      <>
        {props.value}
      </>
    )
  }


  if (line === 'all') {

    return (
      <>
        {props.value.length}
      </>
    )

  }
  if (line === 'average') {

    let length = props.value.length

    props.value.forEach(numb => {
      sum += numb
    })

    return (
      <>
        {sum / length}
      </>
    )

  }
  else {

    let length = props.value.length

    props.value.forEach(v => {
      sum += v
      if (v === 1) {
        pos += 1
      }
    })

    possum = pos / length

    return (
      <>
        {possum * 100} %
      </>
    )
  }
}


const Statistics = (props) => {

  if (props.all.length === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td><StatisticsLine text="good" value={props.good} /></td>
          </tr>
          <tr>
            <td>neutral</td>
            <td> <StatisticsLine text="neutral" value={props.neutral} /></td>
          </tr>
          <tr>
            <td>bad</td>
            <td><StatisticsLine text="bad" value={props.bad} /></td>
          </tr>
          <tr>
            <td>all</td>
            <td><StatisticsLine text="all" value={props.all} /></td>
          </tr>
          <tr>
            <td>average</td>
            <td><StatisticsLine text="average" value={props.all} /></td>
          </tr>
          <tr>
            <td>positive</td>
            <td><StatisticsLine text="positive" value={props.all} /></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}



const App = (props) => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])
  const header = "Give feedback"
  const text = "Statistics"


  const handleGoodClick = () => {
    setAll(allClicks.concat(1))
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(allClicks.concat(0))
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(allClicks.concat(-1))
    setBad(bad + 1)

  }


  return (
    <div>
      <Header header={header} />
      <Button handleClick={handleGoodClick} buttonName={'good'} />
      <Button handleClick={handleNeutralClick} buttonName={'neutral'} />
      <Button handleClick={handleBadClick} buttonName={'bad'} />
      <br></br>
      <h2> {text}</h2>
      <Statistics good={good}
        bad={bad} neutral={neutral} all={allClicks} />
    </div>
  )
}

const Button = ({ handleClick, buttonName }) => (
  <button onClick={handleClick}> {buttonName} </button>
)


ReactDOM.render(<App />, document.getElementById('root'))
