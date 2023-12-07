import { Grid } from '@mui/material'
import BasicPagination from '../utils/BasicPagination'
import ListItem from './ListItem'
import usePagesInfo from '../../hooks/usePagesInfo'
import { useSelector } from 'react-redux'
import SortRadio from '../utils/SortRadio'
import { toggleSortDirection, changeSortBy } from '../../store/listSlice'

const ListConstructor = ({ content }) => {
  const { sortBy, sortDirection } = useSelector((state) => state.listLike)

  const { displayedContent, totalPages, pageNum } = usePagesInfo(
    content,
    sortBy,
    sortDirection
  )
  return (
    <div id={`page-${pageNum}`}>
      <SortRadio
        sortBy={sortBy}
        sortDirection={sortDirection}
        toggleSortDirection={toggleSortDirection}
        changeSortBy={changeSortBy}
      />
      <Grid container rowGap={3}>
        {displayedContent.map((item) => (
          <Grid key={item.id} item md={4} xs={6} display={'flex'} justifyContent={'center'}>
            <ListItem {...item} />
          </Grid>
        ))}
      </Grid>
      <BasicPagination totalPages={totalPages} />
    </div>
  )
}

export default ListConstructor
