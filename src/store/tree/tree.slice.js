import { createSlice } from '@reduxjs/toolkit'
import { SLICE_NAMES } from '../../services/constants'
import { fetchData } from '../data/data.actions'

const treeSlice = createSlice({
  name: SLICE_NAMES.TREE,
  initialState: {
    content: [],
  },
  reducers: {
    load(state, action) {
      state.content = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled.type, (state, action) => {
      state.content = action.payload
    })
  },
})
export const { load } = treeSlice.actions
export default treeSlice.reducer
