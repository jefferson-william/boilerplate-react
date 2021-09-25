import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'

export const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className="home__menu-button" color="inherit" aria-label="open drawer">
          <MenuIcon />
        </IconButton>
        <Typography className="home__title" variant="h6" noWrap>
          Material-UI
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
