import React from 'react'
import Person from './Person'

const Persons = (props) => {


    return (
        <div>
            {props.filteredList.map((person) =>
                <Person name={person.name} key={person.name} number={person.number} />
            )}
        </div>
    )
}


export default Persons