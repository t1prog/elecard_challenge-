import { Container } from '@mui/material'
import ListLike from './list/ListLike'
import TreeLike from './tree/TreeLike'
import { useSelector } from 'react-redux'
import { VIEW_TYPES } from '../constants/constants'

const Content = () => {
  const type = useSelector((state) => state.viewType.type)
  return (
    <Container className="content" maxWidth="md" disableGutters={false} sx={{minHeight:'90vh'}}>
      {type === VIEW_TYPES.LIST ? <ListLike /> : <TreeLike />}
    </Container>
  )
}

export default Content