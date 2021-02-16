import React from 'react'

import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'

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
      <PostAuthor userId={post.author} />
      <TimeAgo timestamp={post.date} />
    </div>
  )
}
