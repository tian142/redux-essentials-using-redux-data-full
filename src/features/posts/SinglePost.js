import React from 'react'

import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

export const SinglePost = ({ match }) => {
  const { postId } = match.params

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )

  if (!post) {
    return <h1>Post Not Found!</h1>
  }

  return (
    <div>
      <p>{post.title}</p>
      <p>{post.content}</p>
      <Link to={`/editPost/${postId}`}>Edit Post</Link>
    </div>
  )
}
