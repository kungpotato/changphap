import React, { useEffect, useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import useWindowSize from '../custom-hooks/useWindowSize'

const Header = () => {
  const [isShow, setIsShow] = useState(true)
  const [anchorEl, setAnchorEl] = useState(null)
  let windowSize = useWindowSize()

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
            <img
              src="./static/images/logo1.png"
              alt=""
              style={{ width: '150px', cursor: 'pointer' }}
            />
          </Link>

          {isShow ? (
            <div style={{ marginLeft: 'auto' }}>
              <Link href="/">
                <div className="menu">บทความ</div>
              </Link>
              <Link href="/">
                <div className="menu">สมัครช่างภาพ</div>
              </Link>
              <Link href="/">
                <div className="menu">เข้าสู่ระบบ</div>
              </Link>
            </div>
          ) : (
            <div style={{ marginLeft: 'auto' }}>
              <IconButton onClick={handleClick}>
                <i className="material-icons menu">menu</i>
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
