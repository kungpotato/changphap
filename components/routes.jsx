import React from 'react'
import { Link, Button, makeStyles, MenuItem } from '@material-ui/core'

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
    color: '#404040',
    fontWeight: 'normal',
    paddingRight: '10px',
    float: 'left',
  },
})

const routes = [
  { routeName: 'ค้นหาช่างภาพ', path: '/browse' },
  { routeName: 'โปรไฟล์', path: '/profile' },
  { routeName: 'บทความ', path: '/content' },
  { routeName: 'สมัครช่างภาพ', path: null },
  { routeName: 'เข้าสู่ระบบ', path: null },
]

const Routes = ({ menuType, close, pathname }) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      {menuType === 'logo' ? (
        // ส่วนของ logo
        <Link href='/'>
          <Button className={classes.menu}>
            <img
              src={
                pathname === '/' || pathname === '/profile'
                  ? './static/images/logo1.png'
                  : './static/images/logo2.png'
              }
              alt=''
              style={{
                width: '150px',
                cursor: 'pointer',
                marginBottom: '10px',
              }}
            />
          </Button>
        </Link>
      ) : (
        <React.Fragment>
          {routes.map(item =>
            // ส่วนของ main menu
            menuType == 'main' ? (
              <Link
                key={item.routeName}
                href={item.path !== null ? item.path : ' '}
              >
                <Button
                  style={{
                    color:
                      pathname === '/' || pathname === '/profile'
                        ? '#fff'
                        : '#404040',
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
              <MenuItem key={item.routeName} onClick={close}>
                <Link href={item.path}>
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

Routes.getInitialProps = async ({ pathname }) => {
  return { pathname }
}

export default Routes
