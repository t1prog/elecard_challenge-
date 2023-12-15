import { createSlice } from '@reduxjs/toolkit'
import { SLICE_NAMES, STATUS } from '../../services/constants'
import { fetchData } from './data.actions'
import { localStorage } from '../services/localstorage/localStorage.service'

const storedValues = await localStorage.get(SLICE_NAMES.DATA)
const dataSlice = createSlice({
  name: SLICE_NAMES.DATA,
  initialState: {
    content: storedValues.error ? [] : storedValues,
    status: STATUS.IDLE,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.rejected.type, (state, action) => {
        state.status = STATUS.REJECTED
        state.error = action.payload
      })
      .addMatcher(
        (action) => action.type === fetchData.pending.type,
        (state) => {
          state.status = STATUS.LOADING
          state.content = storedValues
        }
      )
      .addMatcher(
        (action) => action.type === fetchData.fulfilled.type && storedValues.error,
        (state, action) => {
          state.status = STATUS.RESOLVED
          state.content = action.payload
          localStorage.set(SLICE_NAMES.DATA, state.content)
        }
      )
  },
})

export default dataSlice.reducer
