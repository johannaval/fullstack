import React from 'react'
import Person from './Person'

const Persons = ({ filteredList, deletePerson }) => {

    if (filteredList == null) {
        return (
            <>
            </>
        )
    }
    return (
        <div>
            {filteredList.map((p) => <Person key={p.id} name={p.name} id={p.id} number={p.number} deletePerson={deletePerson} />)}
        </div>
    )
}

export default Persons