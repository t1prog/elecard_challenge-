import { configureStore } from '@reduxjs/toolkit'
import treeReducer from './treeSlice'
import listReducer from './listSlice'
import viewReducer from './viewSlice'
import pagesReducer from './pagesSlice'

export default configureStore({
  reducer: {
    viewType: viewReducer,
    treeLike: treeReducer,
    listLike: listReducer,
    pages: pagesReducer,
  },
})
