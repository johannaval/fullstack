import React from 'react'
import Countries from './Countries'
import Country from './Country'
import CountryData from './CountryData'

const ListOfCountries = (props) => {

    if (props.countries.length > 10) {
        return (
            <>
                <p>Too many matches, specify another filter</p>
            </>
        )
    }

    if (props.countries.length === 1) {
        return (
            <>
                <CountryData country={props.countries[0]} />
            </>
        )
    }
    return (
        <>
            <Countries countries={props.countries} onChange={props.onChange} />
        </>
    )
}
export default ListOfCountries
