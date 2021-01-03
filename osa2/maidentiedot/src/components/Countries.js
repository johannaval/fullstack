import React from 'react'
import Country from './Country';

const Countries = (props) => (
    
    props.countries.map((country, i) => 
        <li key={i}>
          {country.name}
          <button value={country.name} onClick={props.onChange}>show</button>
        </li>
      ))
export default Countries