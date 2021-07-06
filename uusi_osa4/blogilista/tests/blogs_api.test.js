const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const helper = require('./test_helper')
const api = supertest(app)
const Blog = require('../models/blog')
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
var newUser = ""
 
 
beforeEach(async () => {
   await Blog.deleteMany({})
   await Blog.insertMany(helper.initialBlogs)
   await User.deleteMany({})
   addNewUser()
})
 
afterAll(() => {
   mongoose.connection.close()
})
 
const addNewUser = async (request, response) => {
 
   var addNew = {
       username: 'Terho',
       name: 'Terho Testaaja',
       password: 'terhonSalis',
   }
   newUser = addNew
}
 
 
describe('returning blogs', () => {
 
   test('blogs are returned as json', async () => {
       await api
           .get('/api/blogs')
           .expect(200)
           .expect('Content-Type', /application\/json/)
   })
 
   test('all blogs are returned', async () => {
 
       const response = await api.get('/api/blogs')
       expect(response.body).toHaveLength(helper.initialBlogs.length)
   })
})
 
 
describe('defining values', () => {
 
   test('index is defined as id not id_', async () => {
 
       const response = await api.get('/api/blogs')
       expect(response.body[1].id).toBeDefined
   })
})
 
 
describe('blogs can be added successfully', () => {
 
 
   test('adding a blog increases the total count by one', async () => {
 
       await api
           .post('/api/users')
           .send(newUser)
 
       const result = await api
           .post('/api/login')
           .send(newUser)
 
       const token = result.body.token
       const loggedInUser = await User.findOne({ username: newUser.username })
 
       const newBlog = {
           id: "7s933kdhs83034a",
           title: "Terhon oma kalastusblogi",
           author: "Terho Touhukas",
           url: "http://blog.terhonelamaa.com/paiva_kalastamassa",
           likes: 2,
           __v: 0,
       }
 
       await api
           .post('/api/blogs')
           .set('Authorization', `Bearer ${token}`)
           .send(newBlog, loggedInUser)
           .expect(200)
           .expect('Content-Type', /application\/json/)
 
       const blogsAtEnd = await helper.blogsInDb()
       expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)
   })
 
 
   test('Blog list is updated with new values', async () => {
 
       await api
           .post('/api/users')
           .send(newUser)
 
       const result = await api
           .post('/api/login')
           .send(newUser)
 
       const newBlog = {
           id: "7s933kdhs83034a",
           title: "Terhon oma kalastusblogi",
           author: "Terho Touhukas",
           url: "http://blog.terhonelamaa.com/paiva_kalastamassa",
           likes: 2,
           __v: 0,
       }
 
       blogObject = new Blog(newBlog)
       await blogObject.save()
 
       const response = await api.get('/api/blogs')
 
       const titles = response.body.map(r => r.title)
       expect(titles[6]).toContain(
           'Terhon oma kalastusblogi')
 
       const authors = response.body.map(r => r.author)
       expect(authors[6]).toContain(
           'Terho Touhukas')
 
       const urls = response.body.map(r => r.url)
       expect(urls[6]).toContain(
           'http://blog.terhonelamaa.com/paiva_kalastamassa')
 
       const likes = response.body.map(r => r.likes)
       expect(likes[6]).toBe(
           2)
   })
 
 
   test('the number of likes is zero if it is not specified', async () => {
 
       await api
           .post('/api/users')
           .send(newUser)
 
       const result = await api
           .post('/api/login')
           .send(newUser)
 
       const newBlog = {
           id: "7s933kdhs83034a",
           title: "Terhon oma kalastusblogi",
           author: "Terho Touhukas",
           url: "http://blog.terhonelamaa.com/paiva_kalastamassa",
           __v: 0,
       }
       blogObject = new Blog(newBlog)
       await blogObject.save()
 
       const response = await api.get('/api/blogs')
       expect(response.body[6].likes).toBe(0)
   })
 
 
   test('adding a blog without title and url returns 400 Bad request', async () => {
 
       await api
           .post('/api/users')
           .send(newUser)
 
       const result = await api
           .post('/api/login')
           .send(newUser)
 
       const token = result.body.token
       const loggedInUser = await User.findOne({ username: newUser.username })
 
       const newBlog = {
           id: "7s933kdhs83034a",
           author: "Terho Touhukas",
           likes: 2,
           __v: 0,
       }
 
       await api
           .post('/api/blogs')
           .set('Authorization', `Bearer ${token}`)
           .send(newBlog, loggedInUser)
           .expect(400)
 
       const blogsAtEnd = await helper.blogsInDb()
       expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)
   })
})
 
 
describe('deleting a blog', () => {
 
 
   test('a blog can be deleted', async () => {
 
       await api
           .post('/api/users')
           .send(newUser)
 
       const result = await api
           .post('/api/login')
           .send(newUser)
 
       const token = result.body.token
       const loggedInUser = await User.findOne({ username: newUser.username })
 
       const newBlog = {
           id: "7s933kdhs83034a",
           title: "Terhon oma kalastusblogi",
           author: "Terho Touhukas",
           url: "http://blog.terhonelamaa.com/paiva_kalastamassa",
           likes: 2,
           __v: 0,
       }
 
       await api
           .post('/api/blogs')
           .set('Authorization', `Bearer ${token}`)
           .send(newBlog, loggedInUser)
           .expect(200)
 
       const blogToDelete = await Blog.findOne({ title: newBlog.title })
 
       await api
           .delete(`/api/blogs/${blogToDelete.id}`)
           .set('Authorization', `Bearer ${token}`, loggedInUser)
           .expect(204)
 
       const blogsAtEnd = await helper.blogsInDb()
 
       expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)
       const titles = blogsAtEnd.map(r => r.title)
       expect(titles).not.toContain(blogToDelete.title)
   })
 
   test('a blog can not be deleted without token', async () => {
 
       await api
           .post('/api/users')
           .send(newUser)
 
       const result = await api
           .post('/api/login')
           .send(newUser)
 
       const token = result.body.token
       const loggedInUser = await User.findOne({ username: newUser.username })
 
       const newBlog = {
           id: "kdkdkdnnwiwkw939384",
           title: "uusi kirja 3",
           author: "Robert C. Martin",
           likes: 2,
           url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
           __v: 0,
           user: loggedInUser.id
       }
 
       await api
           .post('/api/blogs')
           .set('Authorization', `Bearer ${token}`)
           .send(newBlog, loggedInUser)
           .expect(200)
 
       const blogToDelete = await Blog.findOne({ title: newBlog.title })
       const fakeToken = "123456789"
 
       await api
           .delete(`/api/blogs/${blogToDelete.id}`)
           .set('Authorization', `Bearer ${fakeToken}`, loggedInUser)
           .expect(401)
 
       const blogsAtEnd = await helper.blogsInDb()
 
       expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)
       const titles = blogsAtEnd.map(r => r.title)
       expect(titles).toContain(blogToDelete.title)
   })
})
 
 
describe('modifying a blog', () => {
 
   test('a blog can be modified', async () => {
 
       const blogsAtStart = await helper.blogsInDb()
       const blogToModify = blogsAtStart[0]
 
       blogToModify.likes = blogToModify.likes + 1
       newLikes = blogToModify.likes
 
       await api
           .put(`/api/blogs/${blogToModify.id}`)
           .send(blogToModify)
           .expect(200)
 
       const blogsAtEnd = await helper.blogsInDb()
       expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)
       expect(blogsAtEnd[0].likes).toBe(newLikes)
   })
})
