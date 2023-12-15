import { Box, Typography } from '@mui/material'

const Error = ({ message }) => {
  return (
    <Box className="error-container">
      <Box className="error-box">
        <div className="error-message">
          <Typography variant="body1">{message}</Typography>
        </div>
      </Box>
    </Box>
  )
}

export default Error
