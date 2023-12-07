import { createSlice } from '@reduxjs/toolkit'
import { SLICE_NAMES, VIEW_TYPES } from '../constants/constants'
import { localStorage } from './services/localStorageServices'

const viewSlice = createSlice({
  name: SLICE_NAMES.VIEW,
  initialState: {
    type: localStorage.getString(SLICE_NAMES.VIEW) || VIEW_TYPES.LIST,
  },
  reducers: {
    changeType(state, action) {
      state.type = action.payload
      localStorage.set(SLICE_NAMES.VIEW, state.type)
    },
  },
})

export const { changeType } = viewSlice.actions

export default viewSlice.reducer
