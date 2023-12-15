import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './store/data/data.actions'
import Layout from './components/layout/Layout'
import MainPage from './pages/MainPage'
import { load as loadList } from './store/list/list.slice'
import { load as loadTree } from './store/tree/tree.slice'

const App = () => {
  const dispatch = useDispatch()
  const { content, status } = useSelector((state) => state.data)

  React.useEffect(() => {
    console.log('Elecard CW Challenge')
    if (content.length === 0) {
      dispatch(fetchData())
    }
    dispatch(loadList(content))
    dispatch(loadTree(content))
  }, [dispatch, content, status])

  return (
    <Layout>
      <MainPage />
    </Layout>
  )
}

export default App
