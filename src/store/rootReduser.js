import { configureStore } from '@reduxjs/toolkit'
import treeReducer from './tree/tree.slice'
import listReducer from './list/list.slice'
import dataReducer from './data/data.slice'
import pageReducer from './page/page.slice'
import viewReducer from './view/view.slice'

export default configureStore({
  reducer: {
    data: dataReducer,
    tree: treeReducer,
    list: listReducer,
    page: pageReducer,
    view: viewReducer,
  },
})