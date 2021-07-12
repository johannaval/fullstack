import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
//import { prettyDOM } from '@testing-library/react'
import Blog from './Blog'
import BlogForm from './BlogForm'

const mockHandlerAddNewLike = jest.fn()
const mockHandlerHandleTitleChange = jest.fn()
const mockHandlerHandleAuthorChange = jest.fn()
const mockHandlerHandleUrlChange = jest.fn()
const mockHandlerCreateBlog = jest.fn()


describe('<Blog />', () => {
  let component

  beforeEach(() => {

    const user = {
      name: 'Tero',
      username: 'Tero Testaaja',
      id: '9273784020103'
    }

    const blog = {
      title: 'Tämä on blogin otsikko',
      author: 'Blogin kirjoittaja',
      url: 'URL1234',
      likes: 5,
      user: '60e327d2bf3fe108f85de0d9',
    }

    var blogUserIsCurrentUser = new Boolean(false)
    if (user.id === blog.user) {
      blogUserIsCurrentUser = true
    }

    component = render(
      <Blog blog={blog} addNewLike={mockHandlerAddNewLike} blogUserIsCurrentUser={blogUserIsCurrentUser}>
      </Blog >
    )
  })

  test('only title and author are automatically rendered', async () => {

    const firstView = component.container.querySelector('#firstView')

    expect(firstView).toHaveTextContent('Tämä on blogin otsikko')
    expect(firstView).toHaveTextContent('Blogin kirjoittaja')
    expect(firstView).not.toHaveTextContent('URL1234')
    expect(firstView).not.toHaveTextContent('5')
  }
  )


  test('after clicking the button, children are displayed', async () => {

    const button = component.getByText('view')
    fireEvent.click(button)

    const div = component.container.querySelector('.showAllBlogData')
    expect(div).not.toHaveStyle('display: none')

    expect(component.container).toHaveTextContent('Tämä on blogin otsikko')
    expect(component.container).toHaveTextContent('Blogin kirjoittaja')
    expect(component.container).toHaveTextContent('URL1234')
    expect(component.container).toHaveTextContent('5')
  })



  test('clicking like button twice calls event handler twice', async () => {

    const viewButton = component.getByText('view')
    fireEvent.click(viewButton)

    const likeButton = component.getByText('like')
    fireEvent.click(likeButton)
    fireEvent.click(likeButton)

    expect(mockHandlerAddNewLike.mock.calls).toHaveLength(2)
  })



  test('<BlogForm /> updates parent state and calls onSubmit', async () => {

    const user = {
      name: 'Tero',
      username: 'Tero Testaaja',
      id: '9273784020103'
    }

    const blog = {
      title: 'Tämä on blogin otsikko',
      author: 'Blogin kirjoittaja',
      url: 'URL1234',
      likes: 5,
      user: '60e327d2bf3fe108f85de0d9',
    }

    var blogUserIsCurrentUser = new Boolean(false)
    if (user.id === blog.user) {
      blogUserIsCurrentUser = true
    }

    component = render(
      <BlogForm createBlog={mockHandlerCreateBlog} handleTitleChange={mockHandlerHandleTitleChange}
        handleAuthorChange={mockHandlerHandleAuthorChange} handleUrlChange={mockHandlerHandleUrlChange}
        blogUserIsCurrentUser={blogUserIsCurrentUser}>
      </BlogForm >)

    const blogTitle = component.container.querySelector('#title')
    const blogauthor = component.container.querySelector('#author')
    const blogUrl = component.container.querySelector('#url')
    const form = component.container.querySelector('form')

    fireEvent.change(blogTitle, {
      target: { value: 'Tämä on blogin otsikko' }
    })

    fireEvent.change(blogauthor, {
      target: { value: 'Blogin kirjoittaja' }
    })

    fireEvent.change(blogUrl, {
      target: { value: 'URL1234' }
    })
    fireEvent.submit(form)

    expect(mockHandlerCreateBlog.mock.calls).toHaveLength(1)
    expect(mockHandlerCreateBlog.mock.calls[0][0].title).toBe('Tämä on blogin otsikko')
    expect(mockHandlerCreateBlog.mock.calls[0][0].author).toBe('Blogin kirjoittaja')
    expect(mockHandlerCreateBlog.mock.calls[0][0].url).toBe('URL1234')
  })
}
)
