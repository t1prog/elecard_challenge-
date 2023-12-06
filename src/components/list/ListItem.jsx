import { useDispatch } from 'react-redux'
import { deleteItem } from '../../store/listSlice'
import { Card, CardMedia, CardContent, Grid, Typography } from '@mui/material'
import { PATH_TO_IMG } from '../../constants/constants'
const ListItem = ({ id, image, filesize, timestamp, category }) => {
  const dispatch = useDispatch()
  return (
    <Card sx={{ maxWidth: 270 }}>
      <CardMedia
        sx={{ height: 180 }}
        image={PATH_TO_IMG + image}
        title={PATH_TO_IMG + image}
      />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item md={10} xs={10}>
            <Typography variant="body2" color="text.secondary">
              Category: {category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Timestamp: {timestamp}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Filesize: {filesize}
            </Typography>
          </Grid>
          <Grid
            item
            container
            md={2}
            xs={2}
            fontSize={20}
            justifyContent="center"
            alignItems="center"
          >
            <span
              className="delete"
              style={{ cursor: 'pointer' }}
              onClick={() => dispatch(deleteItem({ id }))}
            >
              &#10006;
            </span>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
export default ListItem
