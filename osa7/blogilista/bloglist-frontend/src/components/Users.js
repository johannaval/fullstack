import React from 'react'
import {
  Link
} from 'react-router-dom'
import { Paper, TableContainer, Table, TableBody, TableCell, TableRow, TableHead } from '@mui/material'


const Users = ({ users }) => {

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>

          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell>Blogs created</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell>
                  <Link to={`/users/${user.id}`}>{user.name}</Link>
                </TableCell>
                <TableCell>
                  {user.blogs.length}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
export default Users