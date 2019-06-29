import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  menuButton: {
    marginLeft: 'auto',
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
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
        <div className={classes.menuButton}>
          <Link href="/">
            <div className="menu">บทความ</div>
          </Link>
          <Link href="/">
            <div className="menu">สมัครช่าวภาพ</div>
          </Link>
          <Link href="/" style={{ float: 'rigth' }}>
            <div className="menu">เข้าสู่ระบบ</div>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
