import { Grid, Typography } from "@mui/material"
import useDateTime from '../../hooks/useDateTime'

const ListItemDesc = (props) => {
  const { category, timestamp, filesize } = props

  return (
    <Grid item md={10} xs={10}>
      <Typography variant="h6" color="text.primary">
        Категория: {category}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Дата: {useDateTime(timestamp)}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Размер файла: {(filesize / 1024).toFixed(2)} МБ
      </Typography>
    </Grid>
  )
}


export default ListItemDesc
