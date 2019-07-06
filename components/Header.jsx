import React, { useEffect, useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import { makeStyles } from '@material-ui/styles'
import { Container, Grid } from '@material-ui/core'
import useWindowSize from '../custom-hooks/useWindowSize'
import Routes from './routes'

const useStyles = makeStyles({
  menu: {
    color: '#fff',
    fontWeight: 'normal',
    paddingRight: '10px',
  },
  menu2: {
    color: '#404040',
    fontWeight: 'normal',
    paddingRight: '10px',
  },
  appbar: {
    background: 'rgba(0,0,0,0.5)',
  },
  appbar2: {
    background: '#fff',
  },
})

const Header = ({ pathname }) => {
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
        position='absolute'
        color='default'
        className={
          pathname === '/' || pathname === '/profile'
            ? classes.appbar
            : classes.appbar2
        }
        style={{ marginBottom: '15px' }}
      >
        <Toolbar>
          <Container maxWidth='lg'>
            <Grid container>
              <Routes menuType='logo' />

              {isShow ? (
                <div style={{ marginLeft: 'auto', paddingTop: '15px' }}>
                  <Routes menuType='main' />
                </div>
              ) : (
                <div style={{ marginLeft: 'auto' }}>
                  <IconButton
                    onClick={handleClick}
                    className={
                      pathname === '/' || pathname === '/profile'
                        ? classes.menu
                        : classes.menu2
                    }
                  >
                    <i className='material-icons'>menu</i>
                  </IconButton>
                </div>
              )}
            </Grid>
          </Container>
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

Header.getInitialProps = async ({ pathname }) => {
  return { pathname }
}

export default Header
