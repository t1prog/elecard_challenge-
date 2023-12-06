import { createSlice } from '@reduxjs/toolkit'
import { STATUS } from '../constants/constants'
import fetchData from './api/api'

export const createDataSlice = (name) => {
  const getStorage = window.localStorage.getItem(name)
  const dataSlice = createSlice({
    name,
    initialState: {
      content: [],
      cache: [],
      status: null,
      error: null,
    },
    reducers: {
      deleteItem(state, action) {
        state.content = state.content.filter(
          (item) => item.id !== action.payload.id
        )
        window.localStorage.setItem(name, JSON.stringify(state.content))
      },
      refresh(state) {
        state.content = state.cache
        window.localStorage.removeItem(name)
        state.status = null
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchData.pending.type, (state) => {
          state.status = STATUS.LOADING
        })
        .addMatcher(
          (action) => action.type === fetchData.fulfilled.type && !getStorage,
          (state, action) => {
            state.status = STATUS.RESOLVED
            state.content = action.payload
            state.cache = action.payload
          }
        )
        .addMatcher(
          (action) => action.type === fetchData.rejected.type && !getStorage,
          (state, action) => {
            state.status = STATUS.REJECTED
            state.error = action.payload
          }
        )
        .addMatcher(
          (action) => action.type === fetchData.fulfilled.type && getStorage,
          (state) => {
            state.status = STATUS.RESOLVED
            state.content = JSON.parse(getStorage)
          }
        )
    },
  })
  return dataSlice
}
