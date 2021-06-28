import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import Persons from './components/Persons'
import Notification from './components/Notification'
import Filter from './components/Filter'
import AddNew from './components/AddNew'
import Contacts from './services/Contacts'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [positiveNotification, setPositiveNotification] = useState(null)
  const [errorNotification, setErrorNotification] = useState(null)

  useEffect(() => {
    Contacts
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  },
    [])

  const addPerson = (event) => {
    event.preventDefault()

    const nameObject = {
      name: newName,
      number: newNumber,
    }
    var unique = new Boolean(true);
    const person = persons.find(person => person.name === nameObject.name)

    if (person !== undefined) {
      unique = false
    }

    if (unique) {

      Contacts
        .create(nameObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setPositiveNotification(`Added ${nameObject.name}`)
          positiveNotificationTime()
          setPersons(persons.concat(nameObject))

        })
        .catch(error => {
          const errorMessage = error.response.data.error
          setErrorNotification(`${errorMessage}`)
          errorNotificationTime()
        }
        )
    } else {

      var confirmed = new Boolean(false)
      confirmed = window.confirm(`${nameObject.name} is already added to phonebook, replace the old number with a new one?`)

      if (confirmed) {
        updateNumber(nameObject)
      }
    }
    setNewName('')
    setNewNumber('')
  }

  
  const updateNumber = (nameObject) => {

    const person = persons.find(person => person.name === nameObject.name)
    const id = person.id
    const newNumber = nameObject.number
    const changedPerson = { ...person, number: newNumber }

    Contacts
      .update(person.id, changedPerson)
      .then(p => {
        setPersons(persons.map(p => p.id !== id ? p : changedPerson))
        setPositiveNotification(`Changed the phone number of ${person.name}`)
        positiveNotificationTime()
      })
      .catch(error => {
        setErrorNotification(`Information of ${person.name} has already been removed from the server`)
        errorNotificationTime()
      })
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const getFilteredPersons = () => {

    if (newFilter === null) {
      return persons
    } else {
      return persons.filter(person => person?.name.toLowerCase().includes(newFilter.toLowerCase()))
    }
  }

  const deletePersonFromList = (id) => {

    const newList = persons.filter(person => person.id !== id)
    setPersons(newList)
  }

  const deletePersonById = (id) => {

    const person = persons.find(person => person.id === id)

    var confirmed = new Boolean(false)
    confirmed = window.confirm(`Delete ${person.name} ?`)

    if (confirmed) {
      Contacts.delete(id)
        .then(i => {
          deletePersonFromList(id)
        })

      setPositiveNotification(`Deleted ${person.name}`)
      positiveNotificationTime()
    }
  }

  const positiveNotificationTime = () => {
    setTimeout(() => {
      setPositiveNotification(null)
    }, 3000)
  }

  const errorNotificationTime = () => {
    setTimeout(() => {
      setErrorNotification(null)
    }, 3000)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={positiveNotification} type={'positive'} />
      <Notification notification={errorNotification} type={'error'} />
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <AddNew addPerson={addPerson} newName={newName} handleNameChange={handleNameChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons list={getFilteredPersons().map(person =>
        <Person key={person.id} id={person.id} person={person} deletePerson={deletePersonById} />
      )} />
    </div>
  )

}
export default App