import { Container } from '@mui/material'
import ListLike from './ListLike'
import TreeLike from './TreeLike'
import { useSelector } from 'react-redux'

const Content = () => {
  const type = useSelector((state) => state.viewType.type)
  return (
    <Container className="content">
      {type === 'list' ? <ListLike /> : <TreeLike />}
    </Container>
  )
}

export default Content
