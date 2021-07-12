import React from 'react'

const Notification = (props) => {

  if (props.notification === null) {
    return (
      <div></div>
    )
  } else {
    if (props.type === 'error') {
      return (
        <div className="error">
          <p>{props.notification}</p>
        </div>)
    } else {
      return (
        <div className="positive">
          <p>{props.notification}</p>
        </div>)
    }
  }
}

export default Notification