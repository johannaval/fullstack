
import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {

  const notification = props.notification

  var style = {
    padding: 10,
  }

  if (notification !== '') {

    style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
  }

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

const mapStateToProps = (state) => {  
 return { 
   notification: state.notification
 }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification
