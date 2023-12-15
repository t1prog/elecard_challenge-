import { createSlice } from '@reduxjs/toolkit'
import { SLICE_NAMES, SORT_BY, SORT_DIRECTION } from '../../services/constants'
import { localStorage } from '../services/localstorage/localStorage.service'
import { fetchData } from '../data/data.actions'

const storedDeletedItems = await localStorage.get(SLICE_NAMES.LIST)
const listSlice = createSlice({
  name: SLICE_NAMES.LIST,
  initialState: {
    content: [],
    deletedItems: storedDeletedItems.error ? [] : storedDeletedItems,
    sortBy: SORT_BY.DATE,
    sortDirection: SORT_DIRECTION.ASC,
  },
  reducers: {
    deleteItem(state, action) {
      state.content = state.content.filter((item) => item.id !== action.payload.id)
      state.deletedItems.push(action.payload.id)
      localStorage.set(SLICE_NAMES.LIST, state.deletedItems)
    },
    changeSortBy(state, action) {
      state.sortBy = action.payload
    },
    toggleSortDirection(state, action) {
      state.sortDirection = action.payload
    },
    refresh(state, action) {
      state.content = action.payload
      state.deletedItems = []
      localStorage.set(SLICE_NAMES.LIST, [])
    },
    load(state, action) {
      if (state.deletedItems.length) {
        state.content = action.payload.filter(
          (item) => !state.deletedItems.includes(item.id)
        )
      } else {
        state.content = action.payload
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled.type, (state, action) => {
      state.content = action.payload
    })
  },
})

export const { deleteItem, changeSortBy, toggleSortDirection, refresh, load } =
  listSlice.actions
export default listSlice.reducer
