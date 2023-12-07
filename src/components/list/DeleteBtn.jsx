import React from 'react'
import { Grid } from '@mui/material'

const DeleteBtn = ({ handleDelete }) => {
  return (
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
        onClick={handleDelete}
      >
        &#10006;
      </span>
    </Grid>
  )
}

export default DeleteBtn
