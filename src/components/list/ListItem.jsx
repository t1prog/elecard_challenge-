import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteItem } from '../../store/list/list.slice'
import { Card, CardContent, Grid } from '@mui/material'
import { PATH_TO_IMG } from '../../services/constants'
import ModalWindow from '../shared/ModalWindow'
import ListItemDesc from './ListItemDesc'
import CloseBtn from '../shared/CloseBtn'

const ListItem = ({ id, image, filesize, timestamp, category, filename }) => {
  const dispatch = useDispatch()
  const [openModal, setOpenModal] = useState(false)

  const modalOpenHandle = () => {
    setOpenModal(true)
  }

  const modalCloseHandle = () => {
    setOpenModal(false)
  }

  const handleDelete = () => {
    dispatch(
      deleteItem({
        id,
      })
    )
  }

  return (
    <Card
      sx={{
        width: 270,
      }}
    >
      <div className="list-item">
        <CloseBtn handle={handleDelete} />
        <div className="list-item__image-block">
          <img
            onClick={modalOpenHandle}
            src={image ? PATH_TO_IMG + image : ''}
          ></img>
        </div>
        <CardContent>
          <Grid container>
            <ListItemDesc
              category={category}
              timestamp={timestamp}
              filesize={filesize}
              image={image}
              filename={filename}
            />
          </Grid>
        </CardContent>
      </div>
      <ModalWindow
        openModal={openModal}
        image={PATH_TO_IMG + image}
        handleClose={modalCloseHandle}
      />
    </Card>
  )
}

export default ListItem
