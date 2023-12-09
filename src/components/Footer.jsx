import { AppBar, Typography } from '@mui/material'

const Footer = () => {
  return (
    <AppBar
      position="fixed"
      color="inherit"
      sx={{ top: 'auto', bottom: 0, minWidth: '100%', minHeight: 46, textAlign:'center', justifyContent:'center'}}
    >
        <Typography
          variant="body2"
          color="textSecondary"
        >
          &copy; 2023 Challenge CW
        </Typography>
    </AppBar>
  )
}

export default Footer
