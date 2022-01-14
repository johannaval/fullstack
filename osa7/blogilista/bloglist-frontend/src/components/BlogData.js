import React, { useState } from 'react'
import { Paper, TableContainer, Table, TableBody, TableCell, TableRow, TableHead, TextField, Button } from '@mui/material'


const BlogData = ({ blog, handleLike, addComment }) => {

  const [comment, setComment] = useState('')

  const handleNewComment = (event) => {
    event.preventDefault()

    const id = blog.id
    addComment(id, comment)
    setComment('')
  }

  if (blog === undefined) {
    console.log('undefined tällä')
    return null
  }

  return (
    <div>
      <h1>{blog.title} added by {blog.user.name}</h1>
      <h4>url: <a href={blog.url}>{blog.url}</a> </h4>
      <h4>likes: {blog.likes}  </h4>
      <Button variant="contained" onClick={() => handleLike(blog.id)}>like</Button>
      <br></br>
      <br></br>
      <br></br>

      <form onSubmit={handleNewComment}>
        <div>
          <h3>Add new comment</h3>
          <TextField id="outlined-basic" variant="outlined" value={comment} onChange={({ target }) => setComment(target.value)} />
        </div>
        <div>
          <br></br>
          <Button variant="contained" type='submit' id="addComment">Send </Button>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </form>
      <br></br>

      <TableContainer component={Paper}>
        <Table>

          <TableHead>
            <TableRow>
              <TableCell>Comments</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {blog.comments.map(comment => (
              <TableRow key={comment}>
                <TableCell>
                  {comment}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
export default BlogData