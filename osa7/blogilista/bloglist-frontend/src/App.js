import React, { useState, useEffect } from 'react'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import NewBlog from './components/NewBlog'
import Users from './components/Users'
import User from './components/User'
import BlogData from './components/BlogData'
import { AppBar, Toolbar, Button, Paper, TableContainer, Table, TableBody, TableCell, TableRow, TableHead, TextField } from '@mui/material'
import Container from '@material-ui/core/Container'
import blogService from './services/blogs'
import loginService from './services/login'
import userService from './services/users'
import {
  Switch, Route, useRouteMatch, Link
} from 'react-router-dom'
import storage from './utils/storage'


const App = () => {

  const [users, setUsers] = useState([])
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [notification, setNotification] = useState(null)
  const blogFormRef = React.createRef()


  useEffect(() => {
    userService.getAll().then(users =>
      setUsers(users)
    )
  }, [])


  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
  }, [])


  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password
      })

      setUsername('')
      setPassword('')
      setUser(user)
      notifyWith(`${user.name} welcome back!`)
      storage.saveUser(user)
      setUser(storage.loadUser())
    } catch (exception) {
      notifyWith('wrong username/password', 'error')
    }
  }

  const handleLogout = () => {
    setUser(null)
    storage.logoutUser()
  }


  const addComment = async (id, comment) => {

    const blogToAddComment = blogs.find(b => b.id === id)
    const commentedBlog = { ...blogToAddComment, comments: blogToAddComment.comments.concat(comment) }
    await blogService.addComment(id, String(comment))

    setBlogs(blogs.map(b => b.id === id ? { ...commentedBlog, comments: commentedBlog.comments } : b))
  }


  const handleLike = async (id) => {

    const blogToLike = blogs.find(b => b.id === id)

    if (blogToLike !== undefined) {
      const likedBlog = { ...blogToLike, likes: blogToLike.likes + 1, user: blogToLike.user.id }
      await blogService.update(likedBlog)
      setBlogs(blogs.map(b => b.id === id ? { ...blogToLike, likes: blogToLike.likes + 1 } : b))
    }
  }

  const createBlog = async (blog) => {

    try {
      const newBlog = await blogService.create(blog)
      blogFormRef.current.toggleVisibility()
      setBlogs(blogs.concat(newBlog))
      notifyWith(`a new blog '${newBlog.title}' by ${newBlog.author} added!`)
    } catch (exception) {
      console.log(exception)
    }
  }

  const notifyWith = (message, type = 'success') => {
    setNotification({
      message, type
    })
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }



  const matchForUser = useRouteMatch('/users/:id')
  const usermatch = matchForUser ? users.find(user => user.id === String(matchForUser.params.id)) : null

  const matchForBlog = useRouteMatch('/blogs/:id')
  const blogmatch = matchForBlog ? blogs.find(blog => blog.id === String(matchForBlog.params.id)) : null

  const byLikes = (b1, b2) => b2.likes - b1.likes



  return (

    <div>
      <Container>
        <AppBar position="static" style={{ background: '#2E3B55' }}>
          <Toolbar>
            <Button color="inherit" component={Link} to="/"> Blogs </Button>
            <Button color="inherit" component={Link} to="/users"> Users </Button>
            <div style={{ justifyContent: 'flex-end' }}>
              {user
                ? <em> {user.name} logged in <Button color="inherit" onClick={handleLogout}>logout</Button> </em>
                : ''
              } </div>
          </Toolbar>
        </AppBar>

        <h1>Blog app</h1>

        <Switch>
          <Route path="/users/:id">
            <User user={usermatch} />
          </Route>
          <Route path="/users">
            <Users users={users} />
          </Route>
          <Route path="/blogs/:id">
            <BlogData blog={blogmatch} handleLike={handleLike} addComment={addComment} />
          </Route>
          <Route path="/">

            {!user ? (
              <div>
                <h2>Login to application</h2>
                <Notification notification={notification} />

                <form onSubmit={handleLogin}>
                  <div>
                    <TextField id="outlined-basic" variant="outlined" label="Username" value={username} onChange={({ target }) => setUsername(target.value)} />
                  </div>
                  <p></p>
                  <div>
                    <TextField id="outlined-basic" variant="outlined" label="Password" value={password} onChange={({ target }) => setPassword(target.value)} />
                  </div>
                  <br></br>
                  <Button variant="contained" type='submit' >Login </Button>
                </form>
              </div>

            ) : (

              <div>
                <Notification notification={notification} />

                <Togglable buttonLabel='create new blog' ref={blogFormRef}>
                  <NewBlog createBlog={createBlog} />
                </Togglable>

                <br></br>
                <br></br>

                <TableContainer component={Paper}>
                  <Table>

                    <TableHead>
                      <TableRow>
                        <TableCell>Blog</TableCell>
                        <TableCell>Author</TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {blogs.sort(byLikes).map(blog => (
                        <TableRow key={blog.id}>
                          <TableCell>
                            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                          </TableCell>
                          <TableCell>
                            {blog.author}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

              </div>
            )}

          </Route>
        </Switch>
      </Container>
    </div >
  )
}

export default App