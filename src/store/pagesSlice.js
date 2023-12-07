import { createSlice } from '@reduxjs/toolkit'
import { SLICE_NAMES } from '../constants/constants'
import { localStorage } from './services/localStorageServices'

const pagesSlice = createSlice({
  name: SLICE_NAMES.PAGES,
  initialState: {
    pageNum: localStorage.get(SLICE_NAMES.PAGES) || 1,
    limitPerPage: 30,
  },
  reducers: {
    setPageNum: (state, action) => {
      state.pageNum = action.payload
      localStorage.set(SLICE_NAMES.PAGES, state.pageNum)
    },
  },
})

export const { setPageNum } = pagesSlice.actions
export default pagesSlice.reducer
