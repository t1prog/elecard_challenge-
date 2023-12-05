import { createDataSlice } from './sharedSliceLogic'
import fetchData from './api/api'
import { SLICE_NAMES } from '../constants/constants'

const treeSlice = createDataSlice(SLICE_NAMES.TREE)
export default treeSlice.reducer
export const { deleteItem, refresh } = treeSlice.actions
export { fetchData }
