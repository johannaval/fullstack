const jwt = require("jsonwebtoken")
const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const middleware = require('../utils/middleware')



blogsRouter.get('/', async (request, response) => {

  const blogs = await Blog
    .find({}).populate('user', { username: 1, name: 1 })

  response.json(blogs.map(blog => blog.toJSON()))
})


blogsRouter.post('/', middleware.userExtractor, async (request, response, next) => {

  const body = request.body

  try {
    const decodedToken = jwt.verify(request.token, process.env.SECRET)

    if (!request.token || !decodedToken.id) {
      return response.status(401).json({
        error: 'token missing or invalid'
      })
    }
    const user = request.user
   
    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes,
      user: user._id,
    })
    const savedBlog = await blog.save()
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()
    response.json(savedBlog.toJSON())
  } catch (ex) {
    next(ex)
  }
})



blogsRouter.delete('/:id', middleware.userExtractor, async (request, response, next) => {

  const decodedToken = ""

  try {
    const decodedToken = jwt.verify(request.token, process.env.SECRET)

    if (!request.token || !decodedToken.id) {
      return response.status(401).json({
        error: 'token missing or invalid'
      })
    }
    const blog = await Blog.findById(request.params.id)
    const user = request.user

    if (blog.user.toString() === user.id.toString()) {
      await Blog.findByIdAndRemove(request.params.id)
      response.status(204).end()

    } else {
      return response.status(401).json({
        error: 'Token is missing or invalid'
      })
    }
  } catch (ex) {
    return response.status(401).json({
      error: 'token invalid'
    })
  }
})


blogsRouter.put('/:id', async (request, response, next) => {

  const body = request.body

  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  }
  const modifiedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true });
  response.json(modifiedBlog.toJSON());
})


module.exports = blogsRouter


