import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { refresh as refreshPage } from '../../store/pagesSlice'
import { refresh as refreshList } from '../../store/listSlice'
import { refresh as refreshTree } from '../../store/treeSlice'

const ResetAllButton = () => {
  const dispatch = useDispatch()
  const refreshAll = () => {
    dispatch(refreshPage())
    dispatch(refreshList())
    window.location.reload()
  }
  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={refreshAll}>
        Refresh
      </Button>
    </div>
  )
}

export default ResetAllButton
