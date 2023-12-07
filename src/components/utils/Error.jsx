import React from 'react'
import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

const Error = () => {
  const errorMessage = useSelector((state) => state.listLike.error)

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        position: 'sticky',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          position: 'fixed',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            border: 'solid 1px white',
            borderRadius: '5px',
            color: 'white',
            backgroundColor: '#d32f2f',
            padding: 10,
            fontSize: 18,
            marginTop: 10,
            cursor: 'default',
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: 'white', fontSize: 18, cursor: 'default' }}
          >
            {errorMessage}
          </Typography>
        </div>
      </Box>
    </Box>
  )
}

export default Error
