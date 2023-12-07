import React from 'react'
import { Box, CircularProgress } from '@mui/material'

const Loader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: 2,
        paddingTop: 50,
      }}
    >
      <CircularProgress />
    </Box>
  )
}

export default Loader
