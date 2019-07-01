import React, { useEffect, useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import { makeStyles } from '@material-ui/styles'
import { withRouter } from 'next/router'
import useWindowSize from '../custom-hooks/useWindowSize'
import Routes from './routes'

const useStyles = makeStyles({
  menu: {
    color: '#fff',
    fontWeight: 'normal',
    paddingRight: '10px',
    fontFamily: 'Mitr',
  },
  menu2: {
    color: '#48BFA3',
    fontWeight: 'normal',
    paddingRight: '10px',
    fontFamily: 'Mitr',
  },
  appbar: {
    background: 'rgba(0,0,0,0.5)',
  },
  appbar2: {
    background: '#fff',
  },
})

const Header = ({ router }) => {
  const [isShow, setIsShow] = useState(true)
  const [anchorEl, setAnchorEl] = useState(null)
  let windowSize = useWindowSize()
  const classes = useStyles()

  useEffect(() => {
    // console.log(router.pathname)

    if (windowSize.width < 700) {
      setIsShow(false)
    } else {
      setIsShow(true)
    }
  }, [windowSize])

  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  return (
    <React.Fragment>
      <AppBar
        position="static"
        color="default"
        className={router.pathname === '/' ? classes.appbar : classes.appbar2}
      >
        <Toolbar>
          <Routes menuType="logo" />

          {isShow ? (
            <div style={{ marginLeft: 'auto' }}>
              <Routes menuType="main" />
            </div>
          ) : (
            <div style={{ marginLeft: 'auto' }}>
              <IconButton
                onClick={handleClick}
                className={
                  router.pathname === '/' ? classes.menu : classes.menu2
                }
              >
                <i className="material-icons">menu</i>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Routes close={handleClose} />
      </Menu>
    </React.Fragment>
  )
}

export default withRouter(Header)
