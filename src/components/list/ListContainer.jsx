import { Grid } from '@mui/material'
import ListItem from './ListItem'
import { useSelector } from 'react-redux'
import ListPagination from './utils/ListPagination'
import ListSortRadio from './utils/ListSortRadio'
import usePagesInfo from '../../hooks/usePagesInfo'
import { toggleSortDirection, changeSortBy } from '../../store/list/list.slice'
import ModalWindow from '../shared/ModalWindow'

const ListContainer = ({ content }) => {
  const { sortBy, sortDirection } = useSelector((state) => state.list)

  const { displayedContent, totalPages, pageNum } = usePagesInfo(
    content,
    sortBy,
    sortDirection
  )
  return (
    <div id={`page-${pageNum}`}>
      <ListSortRadio
        sortBy={sortBy}
        sortDirection={sortDirection}
        toggleSortDirection={toggleSortDirection}
        changeSortBy={changeSortBy}
      />
      <Grid container rowGap={3}>
        {displayedContent.map((item, index) => (
          <Grid
            key={item.id}
            item
            md={4}
            xs={6}
            display={'flex'}
            justifyContent={'center'}
          >
            <ListItem {...item} imgId={index} />
          </Grid>
        ))}
      </Grid>
      <ListPagination totalPages={totalPages} />
      <ModalWindow images={displayedContent.map((item) => item.image)} />
    </div>
  )
}

export default ListContainer
