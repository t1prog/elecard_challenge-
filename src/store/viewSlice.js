import { createSlice } from '@reduxjs/toolkit'
import { SLICE_NAMES, VIEW_TYPES } from '../constants/constants'

const viewSlice = createSlice({
  name: SLICE_NAMES.VIEW,
  initialState: {
    type: VIEW_TYPES.LIST
  },
  reducers: {
    changeType(state, action) {
      state.type = action.payload
    }
  },
})

export const { changeType } = viewSlice.actions

export default viewSlice.reducer
