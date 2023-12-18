import { useDispatch } from 'react-redux'
import { deleteItem } from '../../store/list/list.slice'
import { Card, CardContent, Grid } from '@mui/material'
import { PATH_TO_IMG } from '../../services/constants'
import ListItemDesc from './ListItemDesc'
import CloseBtn from '../shared/CloseBtn'
import { handleModal, setCurrent } from '../../store/modal/modal.slice'

const ListItem = ({ imgId, ...props }) => {
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(deleteItem({ id: props.id }))
  }
  const openModal = () => {
    dispatch(setCurrent(imgId))
    dispatch(handleModal())
  }

  return (
    <Card sx={{ width: 270 }}>
      <div className="list-item">
        <CloseBtn handle={handleDelete} />
        <div className="list-item__image-block" onClick={openModal}>
          <img src={props.image ? PATH_TO_IMG + props.image : ''}></img>
        </div>
        <CardContent>
          <Grid container>
            <ListItemDesc
              category={props.category}
              timestamp={props.timestamp}
              filesize={props.filesize}
              image={props.image}
              filename={props.filename}
            />
          </Grid>
        </CardContent>
      </div>
    </Card>
  )
}

export default ListItem
