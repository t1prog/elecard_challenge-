import { createSlice } from '@reduxjs/toolkit'
import { STATUS, SLICE_NAMES } from '../constants/constants'
import fetchData from './api/api'

const treeSlice = createSlice({
  name: SLICE_NAMES.TREE,
  initialState: {
    content: [],
    status: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending.type, (state) => {
        state.status = STATUS.LOADING
      })
      .addCase(fetchData.fulfilled.type, (state, action) => {
        state.status = STATUS.RESOLVED
        state.content = action.payload
      })
      .addCase(fetchData.rejected.type, (state, action) => {
        state.status = STATUS.REJECTED
        state.error = action.payload
      })
  },
})

export default treeSlice.reducer
export { fetchData }
