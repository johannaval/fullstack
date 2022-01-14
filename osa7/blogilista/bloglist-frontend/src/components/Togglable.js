import React, { useState, useImperativeHandle } from 'react'
import { Button, Grid } from '@mui/material'

const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <div>
      <div style={hideWhenVisible}>
        <Button variant="contained" onClick={toggleVisibility}>{props.buttonLabel}</Button>
      </div>
      <Grid container spacing={1}>
        <Grid item xs={10}>
          <div style={showWhenVisible} className="togglableContent">
            {props.children}
            <p></p>
            <Button variant="contained" color="error" onClick={toggleVisibility}>cancel</Button>
          </div>
        </Grid>
      </Grid >
    </div>
  )
})

Togglable.displayName = 'Togglable'

export default Togglable