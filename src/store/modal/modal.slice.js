import { createSlice } from '@reduxjs/toolkit'
import { SLICE_NAMES } from '../../services/constants'

const modalSlice = createSlice({
  name: SLICE_NAMES.MODAL,
  initialState: {
    isOpen: false,
    current: 0
  },
  reducers: {
    handleModal: (state) => {
      state.isOpen = !state.isOpen
    },
    setCurrent: (state, action) => {
      state.current = action.payload
    }
  },
})

export const { handleModal, setCurrent } = modalSlice.actions
export default modalSlice.reducer
