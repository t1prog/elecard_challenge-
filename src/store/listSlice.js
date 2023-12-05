import { createDataSlice } from './sharedSliceLogic'
import fetchData from './api/api'
import { SLICE_NAMES } from '../constants/constants'

const listSlice = createDataSlice(SLICE_NAMES.LIST)
export default listSlice.reducer
export const { deleteItem, refresh } = listSlice.actions
export { fetchData }
