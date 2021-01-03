import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CountryData = (props) => {

    const [countryWeather, setCountryWeather] = useState(null)

    useEffect(() => {
        const key = process.env.REACT_APP_API_KEY
        axios
            .get(`http://api.weatherstack.com/current?access_key=${key}&query=${props.country.capital}`)
            .then(response => {
                setCountryWeather(response.data)
            })
    }, [])

    const weather = () => {
        return (
            <div>
                <p><strong>temperature: </strong> {countryWeather.current.temperature} Celcius</p>
                <img src={countryWeather.current.weather_icons[0]} alt='weather' height="100" />
                <p><strong>wind: </strong> {countryWeather.current.wind_speed} mph direction {countryWeather.current.wind_dir}</p>
            </div>)
    }

    if (countryWeather != null) {
        return (
            <>
                <h2> {props.country.name}</h2>
                <p> capital {props.country.capital} </p>
                <p> population {props.country.population} </p>
                <h3>Spoken languages</h3>
                <ul>
                    {props.country.languages.map((language, i) =>
                        <li key={i}>{language.name}</li>
                    )}
                </ul>
                <img src={props.country.flag} alt='flag' height="150"></img>
                <h3>Weather in {props.country.capital}</h3>
                {weather()}
            </>
        )
    } else {
        return (
            <></>
        )
    }
}
export default CountryData