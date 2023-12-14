import { createSlice } from '@reduxjs/toolkit'
import { SLICE_NAMES } from '../../services/constants'
import { localStorage } from '../services/localstorage/localStorage.service'

const storedValue = await localStorage.get(SLICE_NAMES.PAGES)
const pagesSlice = createSlice({
  name: SLICE_NAMES.PAGES,
  initialState: {
    pageNum: storedValue.error ? 1 : storedValue,
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
