import { createSlice } from '@reduxjs/toolkit'
import {
  STATUS,
  SORT_DIRECTION,
  SORT_BY,
  SLICE_NAMES,
} from '../constants/constants'
import fetchData from './api/api'
import { localStorage } from './services/localStorageServices'

const storage = localStorage.get(SLICE_NAMES.LIST)
const listSlice = createSlice({
  name: SLICE_NAMES.LIST,
  initialState: {
    content: [],
    sortBy: SORT_BY.DATE,
    sortDirection: SORT_DIRECTION.ASC,
    status: null,
    error: null,
  },
  reducers: {
    deleteItem(state, action) {
      state.content = state.content.filter(
        (item) => item.id !== action.payload.id
      )
      localStorage.set(SLICE_NAMES.LIST, state.content)
    },
    changeSortBy(state, action) {
      state.sortBy = action.payload
    },
    toggleSortDirection(state, action) {
      state.sortDirection = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending.type, (state) => {
        state.status = STATUS.LOADING
      })
      .addMatcher(
        (action) => action.type === fetchData.fulfilled.type && !storage,
        (state, action) => {
          state.status = STATUS.RESOLVED
          state.content = action.payload
        }
      )
      .addMatcher(
        (action) => action.type === fetchData.rejected.type && !storage,
        (state, action) => {
          state.status = STATUS.REJECTED
          state.error = action.payload
        }
      )
      .addMatcher(
        (action) => action.type === fetchData.pending.type && storage,
        (state) => {
          state.status = STATUS.RESOLVED
          state.content = storage
        }
      )
  },
})

export default listSlice.reducer
export const { deleteItem, changeSortBy, toggleSortDirection } =
  listSlice.actions
export { fetchData }
