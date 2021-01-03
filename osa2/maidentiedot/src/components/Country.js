import React, { useState, useEffect } from 'react'
import CountryData from './CountryData';


const Country = ({ country }) => {

    const showCountryDataButton = () => {
        return (
            <CountryData country={country} />
        )
    }

    return (
        <>
            <h2>{country.name}</h2>
            <button onClick={() => {showCountryDataButton() }}>show</button>
        </>
    )
}

export default Country