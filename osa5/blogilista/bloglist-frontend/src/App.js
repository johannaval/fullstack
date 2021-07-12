import React, { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import Togglable from './components/Togglable'
import BlogForm from './components/BlogForm'
import blogService from './services/blogs'
import loginService from './services/login'
import Notification from './components/Notification'

import './index.css'


const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [positiveNotification, setPositiveNotification] = useState(null)
  const [errorNotification, setErrorNotification] = useState(null)
  const blogFormRef = useRef()


  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogout = async (event) => {
    event.preventDefault()

    window.localStorage.removeItem('loggedBlogappUser')
    window.localStorage.clear()

    blogService.setToken(null)
    setUser(null)
    setUsername('')
    setPassword('')
  }

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )

      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    }
    catch (exception) {

      setErrorNotification('wrong username or password')
      errorNotificationTime()
      setUsername('')
      setPassword('')
    }
  }

  const addBlog = async (blogObject) => {

    try {
      const newBlog = await blogService.create(blogObject)
      setBlogs(blogs.concat(newBlog))
      blogFormRef.current.toggleVisibility()

      setPositiveNotification(`A new blog ${blogObject.title} by ${blogObject.author} added`)
      positiveNotificationTime()
    }
    catch (exception) {
      console.log(exception)
    }
  }

  const addNewLike = async (blogObject) => {

    if (blogObject !== undefined) {

      const blog = blogs.find(blog => blog.id === blogObject.id)
      const updated = { ...blog, likes: blog.likes + 1 }

      try {
        await blogService.updateLikes(updated)
        setBlogs(blogs.map(p => p.id !== blog.id ? p : updated))
      } catch (exception) {
        console.log(exception)
      }
    }
  }

  const deleteBlog = async (blogObject) => {

    var confirmed = new Boolean(false)
    confirmed = window.confirm(`Remove blog ${blogObject.title} by ${blogObject.author}`)

    if (blogObject !== undefined && confirmed) {

      const blog = blogs.find(blog => blog.id === blogObject.id)

      try {
        await blogService.delet(blog)
        const newList = (blogs.filter(blog => blog.id !== blogObject.id))
        setBlogs(newList)
      } catch (exception) {
        console.log(exception)
      }
    }
  }



  const positiveNotificationTime = () => {
    setTimeout(() => {
      setPositiveNotification(null)
    }, 3000)
  }

  const errorNotificationTime = () => {
    setTimeout(() => {
      setErrorNotification(null)
    }, 3000)
  }


  const loginForm = () => (

    <div>
      <h2>Log in to application</h2>
      <form onSubmit={handleLogin}>
        <div>
          username
          <input id='username' type="text" value={username} name="Username" onChange={({ target }) =>
            setUsername(target.value)} />
        </div>
        <div>
          password
          <input id='password' type="password" value={password} name="Password" onChange={({ target }) =>
            setPassword(target.value)} />
        </div>
        <button id="login-button" type="submit">login</button>
      </form>
    </div>
  )

  const blogForm = () => (

    <Togglable buttonLabel="create new" ref={blogFormRef}>
      <BlogForm
        createBlog={addBlog}
      />
    </Togglable>
  )

  const blogUserIsCurrentUser = (blog) => {

    if (blog.user !== undefined && user !== undefined && blog.user !== null && user !== null) {

      if (blog.user.username === user.username) {
        return true
      }
    }
    return false
  }


  return (

    <div>
      <h2>Blogs</h2>
      <p></p>
      <p></p>
      <Notification notification={positiveNotification} type={'positive'} />
      <Notification notification={errorNotification} type={'error'} />

      {user === null ?
        loginForm() :
        <div>
          <p> {user.name} logged in <button onClick={handleLogout}>logout</button> </p>
          {blogForm()}
          <p></p>
          {blogs
            .sort((a, b) => b.likes - a.likes)
            .map(blog =>
              <Blog key={blog.id} blog={blog} addNewLike={() => addNewLike(blog)}
                deleteBlog={() => deleteBlog(blog)} blogUserIsCurrentUser={blogUserIsCurrentUser(blog)} />
            )}
        </div>
      }
    </div>
  )
}

export default App