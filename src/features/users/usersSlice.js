import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: '0',
    name: 'Tara',
  },
  {
    id: '1',
    name: 'Tian',
  },
  {
    id: '2',
    name: 'Toby',
  },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default usersSlice.reducer
