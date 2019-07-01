import React from 'react'
import { Link, Button, makeStyles, MenuItem } from '@material-ui/core'
import { withRouter } from 'next/router'

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
  sideMenu: {
    color: '#2e2e2e',
    fontWeight: 'normal',
    paddingRight: '10px',
    float: 'left',
  },
})

const routes = [
  { routeName: 'ค้นหาช่างภาพ', path: '/browse' },
  { routeName: 'บทความ', path: '/' },
  { routeName: 'สมัครช่างภาพ', path: '/' },
  { routeName: 'เข้าสู่ระบบ', path: '/' },
]

const Routes = ({ menuType, close, router }) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      {menuType === 'logo' ? (
        // ส่วนของ logo
        <Link href="/">
          <Button className={classes.menu}>
            <img
              src={
                router.pathname === '/'
                  ? './static/images/logo1.png'
                  : './static/images/logo2.png'
              }
              alt=""
              style={{ width: '150px', cursor: 'pointer' }}
            />
          </Button>
        </Link>
      ) : (
        <React.Fragment>
          {routes.map(item =>
            // ส่วนของ main menu
            menuType == 'main' ? (
              <Link key={item.routeName} href={item.path}>
                <Button
                  style={{
                    color: router.pathname === '/' ? '#fff' : '#48BFA3',
                  }}
                  className={
                    menuType == 'main' ? classes.menu2 : classes.sideMenu
                  }
                >
                  {item.routeName}
                </Button>
              </Link>
            ) : (
              // ส่วนของ menu responsive
              <MenuItem onClick={close}>
                <Link key={item.routeName} href={item.path}>
                  <Button
                    className={
                      menuType == 'main' ? classes.menu : classes.sideMenu
                    }
                  >
                    {item.routeName}
                  </Button>
                </Link>
              </MenuItem>
            )
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default withRouter(Routes)
