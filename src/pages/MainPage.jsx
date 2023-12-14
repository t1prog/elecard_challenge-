import { Container } from '@mui/material'
import { useSelector } from 'react-redux'
import { STATUS, VIEW_TYPES } from '../services/constants'
import Loader from '../components/shared/Loader'
import Error from '../components/shared/Error'
import Tree from '../components/tree/Tree'
import List from '../components/list/List'

const MainPage = () => {
  const viewType = useSelector((state) => state.view.type)
  const { errorMessage, status } = useSelector((state) => state.data)

  return (
    <Container className="content" maxWidth="md" disableGutters={false}>
      {errorMessage && <Error message={errorMessage} />}
      {status === STATUS.LOADING && <Loader />}
      {status !== STATUS.LOADING &&
        (viewType === VIEW_TYPES.LIST ? <List /> : <Tree />)}
    </Container>
  )
}

export default MainPage
