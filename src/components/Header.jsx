import { AppBar, Toolbar, Typography } from '@mui/material'
import DisplayTypeRadio from './DisplayTypeRadio'

const Header = () => {
  return (
    <AppBar className="header" position="sticky" color="inherit">
      <Toolbar className="toolbar">
        <Typography className="logo" variant="h6" component="div">
          Challenge CW 2023
        </Typography>
        <DisplayTypeRadio />
      </Toolbar>
    </AppBar>
  )
}

export default Header

