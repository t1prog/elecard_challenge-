import React from 'react'
import { Grid } from '@mui/material'
import '../../style/components/deleteBtn.scss'

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
