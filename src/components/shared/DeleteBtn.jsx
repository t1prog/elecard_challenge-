import { Grid } from '@mui/material'

const DeleteBtn = ({ handleDelete }) => {
  return (
    <Grid item container md={2} xs={2} className="delete-btn">
      <span className="delete" onClick={handleDelete}>
        &#10006;
      </span>
    </Grid>
  )
}

export default DeleteBtn
