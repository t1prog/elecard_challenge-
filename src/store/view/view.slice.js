import { createSlice } from '@reduxjs/toolkit'
import { SLICE_NAMES, VIEW_TYPES } from '../../services/constants'
import { localStorage } from '../services/localstorage/localStorage.service'

const storedValue = await localStorage.get(SLICE_NAMES.VIEW)
const viewSlice = createSlice({
  name: SLICE_NAMES.VIEW,
  initialState: {
    type: storedValue.error ? VIEW_TYPES.LIST : storedValue,
  },
  reducers: {
    changeType(state, action) {
      state.type = action.payload
      localStorage.set(SLICE_NAMES.VIEW, JSON.stringify(state.type))
    },
  },
})

export const { changeType } = viewSlice.actions

export default viewSlice.reducer
