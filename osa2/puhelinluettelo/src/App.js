import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Person from './components/Person'
import FilterPersons from './components/FilterPersons'
import AddNewForm from './components/AddNewForm'
import contactService from './services/contacts'
import Notification from './components/Notification'
import './index.css'

const App = () => {
  const [notification, setNotification] = useState(null)
  const [errorNotification, setErrorNotification] = useState(null)
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterNames, setFilter] = useState('')

  useEffect(() => {

    contactService
      .getAll()
      .then(list => {
        setPersons(list)
      })
  },
    [])

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNewFilter = (event) => {
    setFilter(event.target.value)
  }

  const userConfirmed = () => {

    var confirmed = new Boolean(false)
    confirmed = (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`))
    return confirmed
  }

  const findByName = ({ name }) => {
    return persons.find(person => person?.name === name)
  }

  const notificationTime = () => {
    setTimeout(() => {
      setNotification(null)
    }, 3000)
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
    }

    var unique = new Boolean(true);

    persons.forEach(person => {
      if (person?.name === nameObject.name) {
        unique = false
      }
    })

    if (unique) {
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')

      contactService
        .create(nameObject)
        .then(response => {
          setPersons(persons.concat(response.data))
        })
      setNotification(`Added ${newName}`)
      notificationTime()

    } else {

      if (userConfirmed()) {
        event.preventDefault()

        const updatePerson = persons.find(person => person?.name === newName)

        contactService.update(updatePerson.id, nameObject)
          .then(person => {
            setPersons(persons.map(updatePerson =>
              updatePerson.name === person.name && updatePerson.id === person.id
                ? person
                : updatePerson))

            setNotification(`Changed the phone number of ${person.name}`)
            notificationTime()
          })
          .catch(error => {
            setPersons(persons.filter(person => person?.id !== updatePerson.id))
            setErrorNotification(`Information of ${newName} has already been removed from server`)
            notificationTime()
          })
      }
      setNewName('')
      setNewNumber('')
    }
  }

  const deletePersonFromList = (id) => {

    const newList = persons.filter(person => person.id !== id)
    setPersons(newList)
  }


  const deletePersonById = (id) => {

    const person = persons.find(person => person.id === id);
    if (person != null && window.confirm(`Delete ${person.name}?`)) {
      contactService
        .delet(id)
        .then(i => {
          deletePersonFromList(id)
          setNotification(`Deleted ${person.name}`)
          notificationTime()
        })
    }
  }

  const filteredList = persons.filter(person => person?.name.toLowerCase().includes(filterNames.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} type={'normal'} />
      <Notification notification={errorNotification} type={'error'} />
      <FilterPersons filter={filterNames} handleNewFilter={handleNewFilter} />
      <AddNewForm
        addName={addName}
        handleNewName={handleNewName}
        name={newName}
        handleNewNumber={handleNewNumber}
        number={newNumber}
      />
      <h2>Numbers</h2>
      <Persons filteredList={filteredList} deletePerson={deletePersonById} />
    </div>
  )
}

export default App