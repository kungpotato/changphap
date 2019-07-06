import React from 'react'
import '../styles/styles.less'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import {
  Grid,
  Paper,
  Container,
  GridList,
  GridListTile,
  GridListTileBar,
} from '@material-ui/core'
import Header from '../components/Header'
import Avatar from '@material-ui/core/Avatar'
//import useWindowSize from '../custom-hooks/useWindowSize'

const useStyle = makeStyles(theme => {
  //console.log(theme.palette.background)
  return {
    test: {
      padding: theme.palette.background,
    },
    gridList: {
      width: '100%',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    avt: {
      width: '100%',
      height: '100%',
      position: 'relative',
      top: '0',
      boxShadow:
        '0 8px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
  }
})

const Profile = ({ pathname }) => {
  const classes = useStyle()
  //let winSize = useWindowSize()
  return (
    <div>
      <Header pathname={pathname} />
      <div className='root'>
        <div
          style={{
            width: '100%',
            height: '45%',
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
        <Container maxWidth='xl' style={{ marginTop: '100px' }}>
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
            style={{
              textShadow: '2px 2px 4px #000000',
              color: '#fff',
              marginBottom: '30px',
            }}
          >
            สมทวย คงควรคอย
          </Typography>
          <Grid container style={{ background: '#fff' }} justify='center'>
            <Grid item xs={12} sm={4} style={{ padding: '15px' }}>
              <Paper square style={{ padding: '15px', marginBottom: '30px' }}>
                <Typography variant='h6' align='center' color='primary'>
                  ข้อมูลทั่วไป
                </Typography>
                <hr />
              </Paper>
              <Paper square style={{ padding: '15px' }}>
                <Typography variant='h6' align='center' color='primary'>
                  การรับงาน
                </Typography>
                <hr />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={8} style={{ padding: '15px' }}>
              <Typography variant='h6' align='center' color='primary'>
                ผลงานที่ผ่านมา
              </Typography>
              <hr />
              <div>
                <GridList className={classes.gridList} cols={3}>
                  <GridListTile>
                    <img alt='' src='./static/images/dog.jpg' />
                    <GridListTileBar
                      title='wegweger'
                      subtitle={<span>by: egergergerg</span>}
                    ></GridListTileBar>
                  </GridListTile>
                  <GridListTile>
                    <img alt='' src='./static/images/dog.jpg' />
                    <GridListTileBar
                      title='wegweger'
                      subtitle={<span>by: egergergerg</span>}
                    ></GridListTileBar>
                  </GridListTile>
                  <GridListTile>
                    <img alt='' src='./static/images/dog.jpg' />
                    <GridListTileBar
                      title='wegweger'
                      subtitle={<span>by: egergergerg</span>}
                    ></GridListTileBar>
                  </GridListTile>
                </GridList>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

Profile.getInitialProps = async ({ pathname }) => {
  return { pathname }
}

export default Profile
