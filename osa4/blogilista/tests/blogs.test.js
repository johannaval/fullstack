const listHelper = require('../utils/list_helper')

const blogs = [{
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0
},
{
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0
},
{
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
},
{
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0
},
{
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0
},
{
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0
}]

describe('total likes shows right number', () => {

    test('when there are many blogs', () => {

        const result = listHelper.totalLikes(blogs)
        expect(result).toBe(36)
    })

    test('when there are 0 blogs', () => {

        const result = listHelper.totalLikes([])
        expect(result).toBe(0)
    })

    test('when there are only 1 blog', () => {

        const result = listHelper.totalLikes([blogs[0]])
        expect(result).toBe(7)
    })
})


describe('favoriteBlog', () => {

    test('return a blog with most likes', () => {

        const theBlog = {
            _id: "5a422b3a1b54a676234d17f9",
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
            url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
            likes: 12,
            __v: 0
        }

        const result = listHelper.favoriteBlog(blogs)
        expect(result).toEqual(theBlog)
    })
})


describe('mostBlogs', () => {

    test('return the author and number of blogs from the author who has written the most blogs', () => {

        const data = {
            author: "Robert C. Martin",
            blogs: 3
          }

        const result = listHelper.mostBlogs(blogs)
        expect(result).toEqual(data)
    }) 
}) 


describe('mostLikes', () => {

    test('return the author and total number of likes from the author who has got the most likes', () => {

        const data = {
            author: "Edsger W. Dijkstra",
            likes: 17
          }

        const result = listHelper.mostLikes(blogs)
        expect(result).toEqual(data)
    }) 
}) 
