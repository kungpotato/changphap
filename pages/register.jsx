import React from 'react'
import Header from '../components/Header'
import SlideBox from '../components/SlideBox'
import { Container, Typography, Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import PhotoCamera from '@material-ui/icons/photoCamera'

const useStyle = makeStyles(theme => {
  //console.log(theme.palette.primary)
  return {
    fontStyle: {
      color: theme.palette.primary.main,
      fontSize: '30px',
    },
    iconStyle: {
      fontSize: '50px',
      color: theme.palette.primary.main,
    },
    btnStyle: {
      color: '#fff',
      marginTop: '25px',
      borderRadius: '0',
      marginLeft: '15px',
      marginRight: '15px',
    },
  }
})

const Register = () => {
  const classses = useStyle()
  return (
    <div>
      <Header />
      <Container
        maxWidth='lg'
        style={{ marginTop: '100px', marginBottom: '30px' }}
      >
        <Typography
          variant='h5'
          style={{ textAlign: 'center', marginBottom: '20px' }}
        >
          ทำไมช่างภาพต้องสมัคร SONGNIW ?
        </Typography>
        <Typography variant='body1'>
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
          paddingTop: '100px',
          paddingBottom: '100px',
        }}
      >
        <Grid container justify='center'>
          <Grid item sm={6} style={{ textAlign: 'center' }}>
            <Button
              variant='contained'
              className={classses.btnStyle}
              size='large'
              color='primary'
            >
              อ่านรายละเอียด
            </Button>
            <Button
              variant='contained'
              className={classses.btnStyle}
              size='large'
              color='primary'
            >
              ลงทะเบียนช่างภาพ
            </Button>
          </Grid>
        </Grid>
      </div>
      <Container maxWidth='lg' style={{ marginTop: '35px' }}>
        <Typography
          variant='h5'
          style={{ textAlign: 'center', marginBottom: '50px' }}
        >
          วิธีการสมัคร
        </Typography>
        <Grid container spacing={3} style={{ textAlign: 'center' }}>
          <Grid item xs={6} md={3}>
            <PhotoCamera className={classses.iconStyle} />
            <Typography className={classses.fontStyle} variant='h5'>
              หาช่างภาพ
            </Typography>
            <Typography variant='body1'>
              ถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพ
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <PhotoCamera className={classses.iconStyle} />
            <Typography className={classses.fontStyle} variant='h5'>
              หาช่างภาพ
            </Typography>
            <Typography variant='body1'>
              ถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพ
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <PhotoCamera className={classses.iconStyle} />
            <Typography className={classses.fontStyle} variant='h5'>
              หาช่างภาพ
            </Typography>
            <Typography variant='body1'>
              ถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพ
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <PhotoCamera className={classses.iconStyle} />
            <Typography className={classses.fontStyle} variant='h5'>
              หาช่างภาพ
            </Typography>
            <Typography variant='body1'>
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
          variant='h5'
          style={{
            textAlign: 'center',
            marginBottom: '20px',
            marginTop: '20px',
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
        <Typography
          variant='h5'
          style={{ textAlign: 'center', marginBottom: '20px' }}
        >
          รายละเอียดข้อตกลง
        </Typography>

        <Typography variant='body1' className={classses.textDetail}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel,
        </Typography>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <Button
            variant='contained'
            className={classses.btnStyle}
            size='large'
            color='primary'
          >
            ลงทะเบียนช่างภาพ
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default Register
