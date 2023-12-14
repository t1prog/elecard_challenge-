import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteItem } from '../../store/list/list.slice'
import { Card, CardMedia, CardContent, Grid } from '@mui/material'
import { PATH_TO_IMG } from '../../services/constants'
import  ListModal  from './utils/ListModal'
import ListItemDesc from './ListItemDesc'
import DeleteBtn from '../shared/DeleteBtn'

const ListItem = ({ id, image, filesize, timestamp, category }) => {
  const dispatch = useDispatch()
  const [openModal, setOpenModal] = useState(false)

  const modalOpenHandle = () => {
    setOpenModal(true)
  }

  const modalCloseHandle = () => {
    setOpenModal(false)
  }

  const handleDelete = (e) => {
    e.stopPropagation()
    dispatch(deleteItem({ id }))
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <div onClick={modalOpenHandle}>
        <CardMedia
          sx={{ height: 180 }}
          image={image ? PATH_TO_IMG + image : ''}
        />
        <CardContent>
          <Grid container spacing={1}>
            <ListItemDesc
              category={category}
              timestamp={timestamp}
              filesize={filesize}
            />
            <DeleteBtn handleDelete={handleDelete} />
          </Grid>
        </CardContent>
      </div>
      <ListModal
        openModal={openModal}
        image={PATH_TO_IMG + image}
        handleClose={modalCloseHandle}
      />
    </Card>
  )
}

export default ListItem
