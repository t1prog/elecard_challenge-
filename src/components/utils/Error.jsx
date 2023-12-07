import React from 'react'
import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import '../../style/components/error.scss'

const Error = () => {
  const errorMessage = useSelector((state) => state.listLike.error)

  return (
    <Box className="error-container">
      <Box className="error-box">
        <div className="error-message">
          <Typography variant="body1">{errorMessage}</Typography>
        </div>
      </Box>
    </Box>
  )
}

export default Error
