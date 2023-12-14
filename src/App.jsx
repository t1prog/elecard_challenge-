import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './store/data/data.actions'
import Layout from './components/layout/Layout'
import MainPage from './pages/MainPage'

const App = () => {
  const dispatch = useDispatch()
  const { content, status } = useSelector((state) => state.data)

  React.useEffect(() => {
    if (content.length === 0) {
      dispatch(fetchData())
    }
  }, [dispatch, content, status])

  return (
    <Layout>
      <MainPage />
    </Layout>
  )
}

export default App
