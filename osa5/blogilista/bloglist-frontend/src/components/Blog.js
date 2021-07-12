import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Blog = ({ blog, addNewLike, deleteBlog, blogUserIsCurrentUser }) => {

  const blogStyle = {
    paddingTop: 15,
    paddingLeft: 10,
    paddingRigth: 10,
    paddingBottom: 15,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 10,
    margin: 5,
  }

  const [visibleAll, setVisibleAll] = useState(false)
  const hideWhenVisible = { display: visibleAll ? 'none' : '' }
  const showWhenVisible = { display: visibleAll ? '' : 'none' }

  const toggleVisibility = () => {
    setVisibleAll(!visibleAll)
  }

  return (
    <div style={blogStyle} className='blogStyle'>
      <div id='firstView' style={hideWhenVisible}>
        {blog.title} {blog.author}
        <button id='toggleVisibility' onClick={toggleVisibility}>view</button>
      </div>
      <div style={showWhenVisible} className="showAllBlogData">
        {blog.title} {blog.author} <button id='hideButton' onClick={toggleVisibility}>hide</button>
        <p>{blog.url} </p>
        <p>likes {blog.likes} <button id='likeButton' onClick={addNewLike}>like</button></p>
        <p>{blog.author} </p>
        <div>
          {blogUserIsCurrentUser ? <button id='deleteButton' onClick={deleteBlog}>delete</button> : null}
        </div>
      </div>
    </div>
  )
}


Blog.displayName = 'Blog'

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  //  addNewLike: PropTypes.func.isRequired,
  //  deleteBlog: PropTypes.func.isRequired,
  //  blogUserIsCurrentUser: PropTypes.bool.isRequired,
}

export default Blog