import { Button } from '@mui/material'
import { refresh } from '../../../../store/list/list.slice'
import { useDispatch, useSelector } from 'react-redux'
const RefreshButton = () => {
  const content = useSelector((state) => state.data.content)
  const dispatch = useDispatch()

  return (
    <div>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => dispatch(refresh(content))}
      >
        Refresh
      </Button>
    </div>
  )
}

export default RefreshButton
