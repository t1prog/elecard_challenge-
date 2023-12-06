import { AppBar, Toolbar, Typography } from '@mui/material'
import DisplayTypeRadio from './DisplayTypeRadio'
import ResetAllButton from './utils/ResetAllButton'

const Header = () => {
  return (
    <AppBar className="header" position="sticky" color="inherit">
      <Toolbar className="toolbar">
        <Typography className="logo" variant="h6" component="div">
          Challenge CW 2023
        </Typography>
        <DisplayTypeRadio />
        <ResetAllButton />
      </Toolbar>
    </AppBar>
  )
}

export default Header

