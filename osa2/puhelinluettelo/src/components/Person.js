import React from 'react'

const Person = (props) => {

  return (
    <li>
      {props.person.name} {' '}
      {props.person.number}
      <button onClick={() => { props.deletePerson(props.person.id) }}>delete</button>
    </li>
  )
}
export default Person