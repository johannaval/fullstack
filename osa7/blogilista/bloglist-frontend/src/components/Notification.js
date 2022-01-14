import React from 'react'
import { Alert } from '@mui/material'

const Notification = ({ notification }) => {
  if (!notification) {
    return null
  }

  if (notification.type === 'success') {
    return (
      <div>
        <Alert severity="success"> {notification.message}</Alert>
        <br></br>
      </div>
    )
  } else {
    return (
      <div>
        <Alert severity="error"> {notification.message}</Alert>
        <br></br>
      </div>
    )
  }
}

export default Notification