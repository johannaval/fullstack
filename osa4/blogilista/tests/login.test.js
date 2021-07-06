const bcrypt = require('bcrypt')
const User = require('../models/user')
const supertest = require('supertest')
const app = require('../app')
const helper = require('./test_helper')
const api = supertest(app)
const jwt = require('jsonwebtoken')
const loginRouter = require('express').Router()


describe('loggin in', () => {

    beforeEach(async () => {

        await User.deleteMany({})
    })

    test('created user can log in', async () => {

        const newUser = {
            username: 'Timppa',
            name: 'Timppa Testaaja',
            password: 'timpanSalis',
        }

        await api
            .post('/api/users')
            .send(newUser)
            .expect(200)
            .expect('Content-Type', /application\/json/)

        const result = await api
            .post('/api/login')
            .send(newUser)
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test('not created user can not log in', async () => {

        const notCreatedUser = {
            username: 'Tuula',
            name: 'Tuula Testaaja',
            password: 'tuulanSalis',
        }

        const result = await api
            .post('/api/login')
            .send(notCreatedUser)
            .expect(401)
            .expect('Content-Type', /application\/json/)
    })
})
