import React, { useEffect, useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'
import useWindowSize from '../custom-hooks/useWindowSize'

const useStyles = makeStyles({
  menu: {
    cursor: 'pointer',
    color: '#fff',
    fontWeight: 'normal',
    paddingRight: '10px',
    fontFamily: 'Mitr',
  },
})

const Header = () => {
  const [isShow, setIsShow] = useState(true)
  const [anchorEl, setAnchorEl] = useState(null)
  let windowSize = useWindowSize()
  const classes = useStyles()

  useEffect(() => {
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
        style={{ background: 'rgba(0,0,0,0.5)' }}
      >
        <Toolbar>
          <Link href="/">
            <Button className={classes.menu}>
              <img
                src="./static/images/logo1.png"
                alt=""
                style={{ width: '150px', cursor: 'pointer' }}
              />
            </Button>
          </Link>

          {isShow ? (
            <div style={{ marginLeft: 'auto' }}>
              <Link href="/">
                <Button className={classes.menu}>บทความ</Button>
              </Link>
              <Link href="/">
                <Button className={classes.menu}>สมัครช่างภาพ</Button>
              </Link>
              <Link href="/">
                <Button className={classes.menu}>เข้าสู่ระบบ</Button>
              </Link>
            </div>
          ) : (
            <div style={{ marginLeft: 'auto' }}>
              <IconButton onClick={handleClick} className={classes.menu}>
                <i className="material-icons">menu</i>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link href="/">
            <div className="side-menu">บทความ</div>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/">
            <div className="side-menu">สมัครช่างภาพ</div>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/">
            <div className="side-menu">เข้าสู่ระบบ</div>
          </Link>
        </MenuItem>
      </Menu>
    </React.Fragment>
  )
}

export default Header
