import { createSlice } from '@reduxjs/toolkit'

const listSlice = createSlice({
  name: 'view',
  initialState: {
    type: 'list'
  },
  reducers: {
    changeType(state, action) {
      state.type = action.payload
    }
  },
})

export const { changeType } = listSlice.actions

export default listSlice.reducer
