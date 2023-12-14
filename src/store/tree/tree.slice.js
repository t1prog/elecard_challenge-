import { createSlice } from '@reduxjs/toolkit'
import { SLICE_NAMES } from '../../services/constants'
import { fetchData } from '../data/data.actions'
import { localStorage } from '../services/localstorage/localStorage.service'

const storedValues = await localStorage.get(SLICE_NAMES.TREE)
const treeSlice = createSlice({
  name: SLICE_NAMES.TREE,
  initialState: {
    content: storedValues.error ? [] : storedValues,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled.type, (state, action) => {
      if (storedValues.error) {
        state.content = action.payload
        localStorage.set(SLICE_NAMES.TREE, state.content)
      } else {
        state.content = storedValues
      }
    })
  },
})
export const { setTree } = treeSlice.actions
export default treeSlice.reducer
