import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!', author: '0' },
  { id: '2', title: 'Second Post', content: 'More text', author: '1' },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, author) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            author,
          },
        }
      },
    },
    postEdited: (state, action) => {
      const { id, title, content } = action.payload
      const existingPost = state.find((post) => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    },
  },
})

export const { postAdded, postEdited } = postsSlice.actions

export default postsSlice.reducer
