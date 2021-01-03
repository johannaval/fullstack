import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'
import Countries from './components/Countries'
import ListOfCountries from './components/ListOfCountries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterCountries, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleNewFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <>
      Find countries <input value={filterCountries} onChange={handleNewFilter} />
      <ListOfCountries countries={countries.filter(country => country.name.toLowerCase().includes(filterCountries.toLowerCase()))}
        onChange={handleNewFilter} /> 
    </>
  )
}
export default App;
