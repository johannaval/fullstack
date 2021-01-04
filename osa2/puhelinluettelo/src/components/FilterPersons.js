import React from 'react'

const FilterPersons = (props) => {

    return (
        <div>
            <p>filter shown with
            <input value={props.filter} onChange={props.handleNewFilter} /> </p>
        </div>
    )
}

export default FilterPersons