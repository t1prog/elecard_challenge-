import { AppBar, Toolbar, Typography } from '@mui/material'
import DisplayTypeRadio from './utils/DisplayTypeRadio'
import RefreshButton from './utils/RefreshButton'

const Header = () => {
  return (
    <AppBar className="header" position="fixed" color="inherit">
      <Toolbar className="header__toolbar">
        <Typography className="header__logo" variant="h6" component="div">
          Challenge CW 2023
        </Typography>
        <DisplayTypeRadio />
        <RefreshButton />
      </Toolbar>
    </AppBar>
  )
}

export default Header
