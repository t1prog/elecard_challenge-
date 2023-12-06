import { createSlice } from "@reduxjs/toolkit";
import { SLICE_NAMES } from "../constants/constants";

const getStorage = JSON.parse(window.localStorage.getItem(SLICE_NAMES.PAGES))

const pagesSlice = createSlice({
  name: SLICE_NAMES.PAGES,
  initialState: {
    pageNum: getStorage || 1,
    limitPerPage: 30,
  },
  reducers: {
    setPageNum: (state, action) => {
      state.pageNum = action.payload
      window.localStorage.setItem('pages', state.pageNum)
    },
    refresh: (state) => {
      window.localStorage.removeItem(SLICE_NAMES.PAGES)
    }
  },
})

export const { setPageNum, refresh } = pagesSlice.actions
export default pagesSlice.reducer