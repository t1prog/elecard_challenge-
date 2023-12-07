import { Pagination, Stack } from '@mui/material'
import { setPageNum } from '../../store/pagesSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function BasicPagination({ totalPages }) {
  //забиндить в localstorage
  const pageNum = useSelector((state) => state.pages.pageNum)
  const dispatch = useDispatch()

  const handleChange = (event, value) => {
    dispatch(setPageNum(value))
  }

  return (
    <Stack
      justifyContent={'center'}
      alignItems={'center'}
      paddingTop={5}
      paddingBottom={3}
      height={'100%'}
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