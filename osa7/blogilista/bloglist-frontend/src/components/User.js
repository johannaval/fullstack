import React from 'react'
import { Paper, TableContainer, Table, TableBody, TableCell, TableRow, TableHead } from '@mui/material'

const User = ({ user }) => {

  if (user === undefined) {
    return null
  }

  const blogs = user.blogs

  return (
    <div>
      <br></br>
      <TableContainer component={Paper}>
        <Table>

          <TableHead>
            <TableRow>
              <TableCell>User {user.name} has added blogs</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {blogs.map(blog => (
              <TableRow key={blog.id}>
                <TableCell>
                  {blog.title}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
export default User