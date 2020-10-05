import React from 'react'

const FilterPersons = (props) => {

    return (
        <div>
            <p>filter shown with</p>
            <input value={props.filter} onChange={props.handleNewFilter} />
        </div>
    )
}

export default FilterPersons