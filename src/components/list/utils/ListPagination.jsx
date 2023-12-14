import { Pagination, Stack } from '@mui/material'
import { setPageNum } from '../../../store/page/page.slice'
import { useDispatch, useSelector } from 'react-redux'


const ListPagination = ({ totalPages }) => {
  const dispatch = useDispatch()
  const pageNum = useSelector((state) => state.page.pageNum)

  const handleChange = (event, value) => {
    dispatch(setPageNum(value))
  }

  return (
    <Stack
      justifyContent={'center'}
      alignItems={'center'}
      paddingTop={5}
      paddingBottom={10}
    >
      <Pagination
        count={totalPages}
        page={pageNum}
        variant="outlined"
        color="primary"
        showFirstButton
        showLastButton
        onChange={handleChange}
        size="large"
      />
    </Stack>
  )
}

export default ListPagination
