import React, { useEffect } from 'react'
import { Grid, Typography, Divider } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIconHalf from '@material-ui/icons/StarHalf'
import FavoriteIcon from '@material-ui/icons/Star'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const LastProfile = () => {
  useEffect(() => {}, [])

  return (
    <div style={{ marginTop: '50px' }}>
      <Typography
        variant='h3'
        style={{ textAlign: 'center', marginBottom: '50px' }}
      >
        ผลงานล่าสุด
      </Typography>
      <Grid container style={{ justifyContent: 'center' }}>
        <Grid item lg={2} style={{ margin: '10px' }}>
          <Card>
            <CardHeader
              avatar={<Avatar aria-label='Recipe'>S</Avatar>}
              action={
                <IconButton aria-label='Settings'>
                  <MoreVertIcon />
                </IconButton>
              }
              title='Somtuy Kongkounkoy'
              subheader='Online 12 min'
            />
            <div style={{ padding: '20px' }}>
              <img
                src='https://material-ui.com/static/images/cards/paella.jpg'
                alt=''
                style={{ width: '100%' }}
              />
            </div>
            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <Divider style={{ maxWidth: '80%', margin: 'auto' }} />
            <Grid container>
              <Grid item lg={6}>
                <CardActions disableSpacing>
                  <IconButton
                    aria-label='Add to favorites'
                    style={{ paddingBottom: '0' }}
                  >
                    <FavoriteIcon style={{ color: '#ffc800' }} />
                    <FavoriteIcon style={{ color: '#ffc800' }} />
                    <FavoriteIcon style={{ color: '#ffc800' }} />
                    <FavoriteIcon style={{ color: '#ffc800' }} />
                    <FavoriteIconHalf style={{ color: '#ffc800' }} />
                  </IconButton>
                </CardActions>
                <div style={{ marginLeft: '30px' }}>
                  <small>4.5 (35)</small>
                </div>
              </Grid>
              <Grid item lg={6}>
                <div style={{ marginTop: '22px' }}>
                  <div>
                    <Typography
                      style={{ textAlign: 'right', marginRight: '30px' }}
                    >
                      เริ่มต้น{' '}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      style={{
                        color: '#4EB8A0',
                        textAlign: 'right',
                        marginRight: '30px',
                      }}
                      variant='h6'
                    >
                      {' '}
                      3,500 บาท
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item lg={2} style={{ margin: '10px' }}>
          <Card>
            <CardHeader
              avatar={<Avatar aria-label='Recipe'>S</Avatar>}
              action={
                <IconButton aria-label='Settings'>
                  <MoreVertIcon />
                </IconButton>
              }
              title='Somtuy Kongkounkoy'
              subheader='Online 12 min'
            />
            <div style={{ padding: '20px' }}>
              <img
                src='https://material-ui.com/static/images/cards/paella.jpg'
                alt=''
                style={{ width: '100%' }}
              />
            </div>
            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <Divider style={{ maxWidth: '80%', margin: 'auto' }} />
            <Grid container>
              <Grid item lg={6}>
                <CardActions disableSpacing>
                  <IconButton
                    aria-label='Add to favorites'
                    style={{ paddingBottom: '0' }}
                  >
                    <FavoriteIcon style={{ color: '#ffc800' }} />
                    <FavoriteIcon style={{ color: '#ffc800' }} />
                    <FavoriteIcon style={{ color: '#ffc800' }} />
                    <FavoriteIcon style={{ color: '#ffc800' }} />
                    <FavoriteIconHalf style={{ color: '#ffc800' }} />
                  </IconButton>
                </CardActions>
                <div style={{ marginLeft: '30px' }}>
                  <small>4.5 (35)</small>
                </div>
              </Grid>
              <Grid item lg={6}>
                <div style={{ marginTop: '22px' }}>
                  <div>
                    <Typography
                      style={{ textAlign: 'right', marginRight: '30px' }}
                    >
                      เริ่มต้น{' '}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      style={{
                        color: '#4EB8A0',
                        textAlign: 'right',
                        marginRight: '30px',
                      }}
                      variant='h6'
                    >
                      {' '}
                      3,500 บาท
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item lg={2} style={{ margin: '10px' }}>
          <Card>
            <CardHeader
              avatar={<Avatar aria-label='Recipe'>S</Avatar>}
              action={
                <IconButton aria-label='Settings'>
                  <MoreVertIcon />
                </IconButton>
              }
              title='Somtuy Kongkounkoy'
              subheader='Online 12 min'
            />
            <div style={{ padding: '20px' }}>
              <img
                src='https://material-ui.com/static/images/cards/paella.jpg'
                alt=''
                style={{ width: '100%' }}
              />
            </div>
            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <Divider style={{ maxWidth: '80%', margin: 'auto' }} />
            <Grid container>
              <Grid item lg={6}>
                <CardActions disableSpacing>
                  <IconButton
                    aria-label='Add to favorites'
                    style={{ paddingBottom: '0' }}
                  >
                    <FavoriteIcon style={{ color: '#ffc800' }} />
                    <FavoriteIcon style={{ color: '#ffc800' }} />
                    <FavoriteIcon style={{ color: '#ffc800' }} />
                    <FavoriteIcon style={{ color: '#ffc800' }} />
                    <FavoriteIconHalf style={{ color: '#ffc800' }} />
                  </IconButton>
                </CardActions>
                <div style={{ marginLeft: '30px' }}>
                  <small>4.5 (35)</small>
                </div>
              </Grid>
              <Grid item lg={6}>
                <div style={{ marginTop: '22px' }}>
                  <div>
                    <Typography
                      style={{ textAlign: 'right', marginRight: '30px' }}
                    >
                      เริ่มต้น{' '}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      style={{
                        color: '#4EB8A0',
                        textAlign: 'right',
                        marginRight: '30px',
                      }}
                      variant='h6'
                    >
                      {' '}
                      3,500 บาท
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item lg={2} style={{ margin: '10px' }}>
          <Card>
            <CardHeader
              avatar={<Avatar aria-label='Recipe'>S</Avatar>}
              action={
                <IconButton aria-label='Settings'>
                  <MoreVertIcon />
                </IconButton>
              }
              title='Somtuy Kongkounkoy'
              subheader='Online 12 min'
            />
            <div style={{ padding: '20px' }}>
              <img
                src='https://material-ui.com/static/images/cards/paella.jpg'
                alt=''
                style={{ width: '100%' }}
              />
            </div>
            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <Divider style={{ maxWidth: '80%', margin: 'auto' }} />
            <Grid container>
              <Grid item lg={6}>
                <CardActions disableSpacing>
                  <IconButton
                    aria-label='Add to favorites'
                    style={{ paddingBottom: '0' }}
                  >
                    <FavoriteIcon style={{ color: '#ffc800' }} />
                    <FavoriteIcon style={{ color: '#ffc800' }} />
                    <FavoriteIcon style={{ color: '#ffc800' }} />
                    <FavoriteIcon style={{ color: '#ffc800' }} />
                    <FavoriteIconHalf style={{ color: '#ffc800' }} />
                  </IconButton>
                </CardActions>
                <div style={{ marginLeft: '30px' }}>
                  <small>4.5 (35)</small>
                </div>
              </Grid>
              <Grid item lg={6}>
                <div style={{ marginTop: '22px' }}>
                  <div>
                    <Typography
                      style={{ textAlign: 'right', marginRight: '30px' }}
                    >
                      เริ่มต้น{' '}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      style={{
                        color: '#4EB8A0',
                        textAlign: 'right',
                        marginRight: '30px',
                      }}
                      variant='h6'
                    >
                      {' '}
                      3,500 บาท
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item lg={2} style={{ margin: '10px' }}>
          <Card>
            <CardHeader
              avatar={<Avatar aria-label='Recipe'>S</Avatar>}
              action={
                <IconButton aria-label='Settings'>
                  <MoreVertIcon />
                </IconButton>
              }
              title='Somtuy Kongkounkoy'
              subheader='Online 12 min'
            />
            <div style={{ padding: '20px' }}>
              <img
                src='https://material-ui.com/static/images/cards/paella.jpg'
                alt=''
                style={{ width: '100%' }}
              />
            </div>
            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <Divider style={{ maxWidth: '80%', margin: 'auto' }} />
            <Grid container>
              <Grid item lg={6}>
                <CardActions disableSpacing>
                  <IconButton
                    aria-label='Add to favorites'
                    style={{ paddingBottom: '0' }}
                  >
                    <FavoriteIcon style={{ color: '#ffc800' }} />
                    <FavoriteIcon style={{ color: '#ffc800' }} />
                    <FavoriteIcon style={{ color: '#ffc800' }} />
                    <FavoriteIcon style={{ color: '#ffc800' }} />
                    <FavoriteIconHalf style={{ color: '#ffc800' }} />
                  </IconButton>
                </CardActions>
                <div style={{ marginLeft: '30px' }}>
                  <small>4.5 (35)</small>
                </div>
              </Grid>
              <Grid item lg={6}>
                <div style={{ marginTop: '22px' }}>
                  <div>
                    <Typography
                      style={{ textAlign: 'right', marginRight: '30px' }}
                    >
                      เริ่มต้น{' '}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      style={{
                        color: '#4EB8A0',
                        textAlign: 'right',
                        marginRight: '30px',
                      }}
                      variant='h6'
                    >
                      {' '}
                      3,500 บาท
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default LastProfile
