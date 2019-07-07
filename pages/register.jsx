import React from 'react'
import Header from '../components/Header'
import SlideBox from '../components/SlideBox'
import { Container, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import PhotoCamera from '@material-ui/icons/photoCamera'

const useStyle = makeStyles(theme => {
  //console.log(theme.palette.primary)
  return {
    textDetail: {
      fontSize: '20px',
    },
    fontStyle: {
      color: theme.palette.primary.main,
      fontSize: '30px',
    },
    iconStyle: {
      fontSize: '60px',
      color: theme.palette.primary.main,
    },
  }
})

const Register = () => {
  const classses = useStyle()
  return (
    <div>
      <Header />
      <Container
        maxWidth='xl'
        style={{ marginTop: '120px', marginBottom: '30px' }}
      >
        <Typography
          variant='h3'
          style={{ textAlign: 'center', marginBottom: '50px' }}
        >
          ทำไมช่างภาพต้องสมัคร SONGNIW ?
        </Typography>

        <Typography variant='h6' className={classses.textDetail}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel,
        </Typography>
        <hr
          style={{
            maxWidth: '80%',
            borderColor: '#4EB8A0',
            color: '#00000',
            marginTop: '50px',
            marginBottom: '50px',
          }}
        />
      </Container>
      <div
        style={{
          backgroundImage: 'url("./static/images/photo.jpg")',
          backgroundSize: 'cover',
          width: '100%',
          paddingBottom: '275px',
        }}
      >
        test
      </div>
      <Container maxWidth='xl' style={{ marginTop: '35px' }}>
        <Typography
          variant='h3'
          style={{ textAlign: 'center', marginBottom: '50px' }}
        >
          วิธีการสมัคร
        </Typography>
        <hr
          style={{
            maxWidth: '80%',
            borderColor: '#4EB8A0',
            color: '#00000',
            marginTop: '50px',
            marginBottom: '50px',
          }}
        />
        <Grid container spacing={3} style={{ textAlign: 'center' }}>
          <Grid item xs={6} md={3}>
            <PhotoCamera className={classses.iconStyle} />
            <Typography className={classses.fontStyle} variant='h5'>
              หาช่างภาพ
            </Typography>
            <Typography variant='h6' className={classses.textDetail}>
              ถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพ
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <PhotoCamera className={classses.iconStyle} />
            <Typography className={classses.fontStyle} variant='h5'>
              หาช่างภาพ
            </Typography>
            <Typography variant='h6' className={classses.textDetail}>
              ถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพ
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <PhotoCamera className={classses.iconStyle} />
            <Typography className={classses.fontStyle} variant='h5'>
              หาช่างภาพ
            </Typography>
            <Typography variant='h6' className={classses.textDetail}>
              ถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพ
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <PhotoCamera className={classses.iconStyle} />
            <Typography className={classses.fontStyle} variant='h5'>
              หาช่างภาพ
            </Typography>
            <Typography variant='h6' className={classses.textDetail}>
              ถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพ
            </Typography>
          </Grid>
        </Grid>
        <hr
          style={{
            maxWidth: '80%',
            borderColor: '#4EB8A0',
            color: '#00000',
            marginTop: '50px',
            marginBottom: '50px',
          }}
        />
        <Typography
          variant='h3'
          style={{
            textAlign: 'center',
            marginBottom: '50px',
            marginTop: '60px',
          }}
        >
          ความคิดเห็นช่างภาพที่ใช้งาน SONGNIW
        </Typography>
        <SlideBox />
        <hr
          style={{
            maxWidth: '80%',
            borderColor: '#4EB8A0',
            color: '#00000',
            marginTop: '50px',
            marginBottom: '50px',
          }}
        />
      </Container>
    </div>
  )
}

export default Register
