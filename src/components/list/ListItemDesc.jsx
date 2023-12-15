import { Grid, Typography } from '@mui/material'
import useDateTime from '../../hooks/useDataTime'
import useFileSize from '../../hooks/useFileSize'

const ListItemDesc = (props) => {
  const { category, timestamp, filesize, filename } = props
  return (
    <Grid item>
      <Typography variant="body2" color="text.primary">
        Название: {filename}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Категория: {category}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Дата: {useDateTime(timestamp)}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Размер файла: {useFileSize(filesize)} KB
      </Typography>
    </Grid>
  )
}

export default ListItemDesc
