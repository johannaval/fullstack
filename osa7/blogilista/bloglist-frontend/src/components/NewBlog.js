import React, { useState } from 'react'
import { TextField, Button, Grid } from '@mui/material'

const NewBlog = (props) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleNewBlog = (event) => {
    event.preventDefault()

    props.createBlog({
      title, author, url
    })

    setTitle('')
    setAuthor('')
    setUrl('')
  }

  return (
    <div>
      <h2>Create new blog:</h2>
      <form onSubmit={handleNewBlog}>

        <Grid container spacing={1}>
          <Grid item xs={3}>
            <div>
              <TextField id="outlined-basic" value={author} label="author" variant="outlined" onChange={({ target }) => setAuthor(target.value)} />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <TextField id="outlined-basic" value={title} label="title" variant="outlined" onChange={({ target }) => setTitle(target.value)} />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <TextField id="outlined-basic" value={url} label="url" variant="outlined" onChange={({ target }) => setUrl(target.value)} />
            </div>
          </Grid>
        </Grid>
        <br></br>
        <Button variant="contained" type='submit' id="create">create</Button>
      </form>
    </div>
  )
}

export default NewBlog