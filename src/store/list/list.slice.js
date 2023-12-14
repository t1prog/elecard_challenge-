import { createSlice } from '@reduxjs/toolkit'
import { SLICE_NAMES, SORT_BY, SORT_DIRECTION } from '../../services/constants'
import { fetchData } from '../data/data.actions'
import { localStorage } from '../services/localstorage/localStorage.service'

const storedValues = await localStorage.get(SLICE_NAMES.LIST)
const listSlice = createSlice({
  name: SLICE_NAMES.LIST,
  initialState: {
    content: storedValues.error ? [] : storedValues,
    sortBy: SORT_BY.DATE,
    sortDirection: SORT_DIRECTION.ASC,
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
    builder.addCase(fetchData.fulfilled.type, (state, action) => {
      if (storedValues.error) {
        state.content = action.payload
        localStorage.set(SLICE_NAMES.LIST, state.content)
      } else {
        state.content = storedValues
      }
    })
  },
})

export const { deleteItem, changeSortBy, toggleSortDirection } = listSlice.actions
export default listSlice.reducer
