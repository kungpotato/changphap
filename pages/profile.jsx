import React from 'react'
import '../styles/styles.less'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import { Grid, Paper } from '@material-ui/core'
import Header from '../components/Header'
import theme from '../theme'

const useStyle = makeStyles(() => ({}))

const Profile = () => {
  const classes = useStyle()
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Header />
        <div className="root">
          <div
            style={{
              width: '100%',
              position: 'absolute',
              top: '0',
              zIndex: '-1',
              height: '45%',
              overflow: 'hidden',
            }}
          >
            <img
              src="./static/images/photo.jpg"
              alt=""
              style={{
                width: '100%',
                position: 'relative',
              }}
            />
          </div>
          <div className="im-profile">
            <img
              src="./static/images/dog.jpg"
              alt=""
              style={{
                width: '100%',
                height: '100%',
                display: 'block',
                borderRadius: '50%',
                boxShadow:
                  '0 8px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
              }}
            />
          </div>
          <div className={classes.profileName}>
            <Typography
              variant="h4"
              align="center"
              style={{ textShadow: '2px 2px 4px #000000', color: '#fff' }}
            >
              สมทวย คงควรคอย
            </Typography>
          </div>
          <Grid container>
            <Grid item xs={12} sm={4} style={{ margin: '25px' }}>
              <Paper square style={{ padding: '15px' }}>
                <Typography variant="h6" align="center" color="primary">
                  ข้อมูลทั่วไป
                </Typography>
                <hr />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} style={{ margin: '25px' }}>
              <Typography variant="h6" align="center" color="primary">
                ผลงานที่ผ่านมา
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={4} style={{ margin: '25px' }}>
              <Paper square style={{ padding: '15px' }}>
                <Typography variant="h6" align="center" color="primary">
                  การรับงาน
                </Typography>
                <hr />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </MuiThemeProvider>
  )
}

export default Profile
