import React, { useState } from 'react'

import { postEdited } from './postsSlice'

import { useDispatch, useSelector } from 'react-redux'

import { useHistory } from 'react-router-dom'

export const EditPost = ({ match }) => {
  const { postId } = match.params

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onTitleChange = (e) => setTitle(e.target.value)
  const onContentChange = (e) => setContent(e.target.value)

  const dispatch = useDispatch()
  const history = useHistory()

  const onEditSubmit = () => {
    dispatch(
      postEdited({
        id: postId,
        title,
        content,
      })
    )
    history.push(`/post/${postId}`)
  }

  return (
    <div>
      <h4>Edit Post</h4>
      <p>Post Title:</p>
      <input value={title} onChange={onTitleChange} />
      <p>Post Content:</p>
      <input value={content} onChange={onContentChange} />
      <button onClick={onEditSubmit}>Save Edit</button>
    </div>
  )
}
