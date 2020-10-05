import React, { useState } from 'react'
import Persons from './components/Persons'
import Person from './components/Person'
import FilterPersons from './components/FilterPersons'
import AddNewForm from './components/AddNewForm'



const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterNames, setFilter] = useState('')


  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNewFilter = (event) => {
    setFilter(event.target.value)
  }

  const listOfFilteredNames = persons.filter(person => {
    return person.name.toLowerCase().includes(filterNames.toLowerCase())
  })


  const addName = (event) => {
    event.preventDefault()

    const nameObject = {
      id: persons.length,
      name: newName,
      number: newNumber,
    }

    if (persons.filter(person => person.name === nameObject.name).length === 0) {
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')

    } else {
      window.alert(`${nameObject.name} is already added to phonebook`);
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterPersons filter={filterNames} handleNewFilter={handleNewFilter} />
      <AddNewForm
        addName={addName}
        handleNewName={handleNewName}
        name={newName}
        handleNewNumber={handleNewNumber}
        number={newNumber}
      />
      <h2>Numbers</h2>
      <Persons filteredList={listOfFilteredNames} />
    </div>
  )

}

export default App