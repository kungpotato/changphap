import React from 'react'
import '../styles/styles.less'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import { Grid, Paper, Container } from '@material-ui/core'
import Header from '../components/Header'
import Avatar from '@material-ui/core/Avatar'
import theme from '../theme'

const useStyle = makeStyles(() => ({
  avt: {
    width: '100%',
    height: '100%',
    position: 'relative',
    top: '0',
    boxShadow:
      '0 8px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
}))

const Profile = () => {
  const classes = useStyle()
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
      <div className='root'>
        <div
          style={{
            width: '100%',
            height: '40%',
            position: 'absolute',
            top: '0',
            zIndex: '-1',
            overflow: 'hidden',
          }}
        >
          <img
            src='./static/images/photo.jpg'
            alt=''
            style={{ width: '100%' }}
          />
        </div>
        <Container maxWidth='lg'>
          <div className='im-profile'>
            <Avatar
              alt=''
              src='./static/images/dog.jpg'
              className={classes.avt}
            />
          </div>
          <Typography
            variant='h4'
            align='center'
            style={{ textShadow: '2px 2px 4px #000000', color: '#fff' }}
          >
            สมทวย คงควรคอย
          </Typography>
          <Grid container style={{ background: '#fff' }}>
            <Grid item xs={12} sm={4} style={{ margin: '25px' }}>
              <Paper square style={{ padding: '15px' }}>
                <Typography variant='h6' align='center' color='primary'>
                  ข้อมูลทั่วไป
                </Typography>
                <hr />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} style={{ margin: '25px' }}>
              <Typography variant='h6' align='center' color='primary'>
                ผลงานที่ผ่านมา
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} style={{ margin: '25px' }}>
              <Paper square style={{ padding: '15px' }}>
                <Typography variant='h6' align='center' color='primary'>
                  การรับงาน
                </Typography>
                <hr />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </MuiThemeProvider>
  )
}

export default Profile
