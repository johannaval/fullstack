import React from 'react'

const AddNewForm = (props) => {


    return (
        <form onSubmit={props.addName}>
            <div>
                name: <input
                    value={props.name}
                    onChange={props.handleNewName}
                />
            </div>
            <div>
                number: <input
                    value={props.number}
                    onChange={props.handleNewNumber}
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form >
    )
}

export default AddNewForm