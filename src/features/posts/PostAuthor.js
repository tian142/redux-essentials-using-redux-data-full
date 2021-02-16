import React from 'react'

import { useSelector } from 'react-redux'

export const PostAuthor = ({ userId }) => {
  const author = useSelector((state) =>
    state.users.find((user) => user.id === userId)
  )

  return <div>By {author ? author.name : 'Unknown Author'}</div>
}
