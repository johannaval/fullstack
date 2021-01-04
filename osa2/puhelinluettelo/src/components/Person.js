import React from 'react'

const Person = (props) => {

  var id = props.id

  return (
    <div>
      {props.name} {props.number} <button onClick={() => { props.deletePerson(props.id) }}>delete</button>
    </div>
  )
}

export default Person