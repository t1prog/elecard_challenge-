import { Container } from '@mui/material'
import ListLike from './ListLike'
import TreeLike from './TreeLike'
import { useSelector } from 'react-redux'
import { VIEW_TYPES } from '../constants/constants'

const Content = () => {
  const type = useSelector((state) => state.viewType.type)
  return (
    <Container className="content">
      {type === VIEW_TYPES.LIST ? <ListLike /> : <TreeLike />}
    </Container>
  )
}

export default Content
