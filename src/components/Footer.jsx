import { AppBar, Toolbar, Typography } from '@mui/material'

const Footer = () => {
  return (
    <AppBar
      position="fixed"
      color="inherit"
      sx={{ top: 'auto', bottom: 0, width: '100%' }}
    >
      <Toolbar>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ width: '100%' }}
        >
          &copy; 2023 Challenge CW
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Footer
