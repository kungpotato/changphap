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
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import '../styles/homeStyle.scss'
import AliceCarousel from 'react-alice-carousel'

const LastProfile = () => {
  useEffect(() => {}, [])

  const imgTest =
    'https://images.unsplash.com/photo-1544736826-61c35a3511dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  const avatarImg =
    'https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=815&q=80'

  const starRating = {
    color: '#FAD72D',
    fontSize: '15px',
  }

  const slideResponse = {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1023: {
      items: 4,
    },
  }

  return (
    <Grid style={{ marginBottom: '50px', maxWidth: '1280px', margin: 'auto' }}>
      <Typography
        variant='h3'
        style={{ textAlign: 'center', marginBottom: '50px' }}
      >
        ผลงานล่าสุด
      </Typography>
      <AliceCarousel
        container
        buttonsDisabled
        dotsDisabled
        mouseDragEnabled
        autoPlay
        autoPlayInterval={2000}
        duration={500}
        responsive={slideResponse}
      >
        <Grid item style={{ margin: '10px' }}>
          <Card className='cardPort'>
            <CardHeader
              avatar={<Avatar aria-label='Recipe' src={avatarImg}></Avatar>}
              action={
                <IconButton aria-label='Settings'>
                  <MoreVertIcon />
                </IconButton>
              }
              title='Somtuy Kongkounkoy'
              subheader='Online 12 min'
            />
            <CardActionArea>
              <CardMedia
                style={{ height: '200px', margin: '5px' }}
                image={imgTest}
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Lizard
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Lizards are a widespread group of squamate reptiles, with over
                </Typography>
              </CardContent>
            </CardActionArea>
            <Divider style={{ maxWidth: '80%', margin: 'auto' }} />
            <Grid container>
              <Grid item lg={6}>
                <CardActions disableSpacing>
                  <div
                    aria-label='Add to favorites'
                    style={{ paddingBottom: '0' }}
                  >
                    <FavoriteIcon style={starRating} />
                    <FavoriteIcon style={starRating} />
                    <FavoriteIcon style={starRating} />
                    <FavoriteIcon style={starRating} />
                    <FavoriteIconHalf style={starRating} />
                  </div>
                </CardActions>
                <div style={{ marginLeft: '30px' }}>
                  <small>4.5 (35)</small>
                </div>
              </Grid>
              <Grid item lg={6} style={{ marginLeft: 'auto' }}>
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
                      variant='subtitle2'
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
        <Grid item style={{ margin: '10px' }}>
          <Card className='cardPort'>
            <CardHeader
              avatar={<Avatar aria-label='Recipe' src={avatarImg}></Avatar>}
              action={
                <IconButton aria-label='Settings'>
                  <MoreVertIcon />
                </IconButton>
              }
              title='Somtuy Kongkounkoy'
              subheader='Online 12 min'
            />
            <CardActionArea>
              <CardMedia
                style={{ height: '200px', margin: '5px' }}
                image={imgTest}
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Lizard
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Lizards are a widespread group of squamate reptiles, with over
                </Typography>
              </CardContent>
            </CardActionArea>
            <Divider style={{ maxWidth: '80%', margin: 'auto' }} />
            <Grid container>
              <Grid item lg={6}>
                <CardActions disableSpacing>
                  <div
                    aria-label='Add to favorites'
                    style={{ paddingBottom: '0' }}
                  >
                    <FavoriteIcon style={starRating} />
                    <FavoriteIcon style={starRating} />
                    <FavoriteIcon style={starRating} />
                    <FavoriteIcon style={starRating} />
                    <FavoriteIconHalf style={starRating} />
                  </div>
                </CardActions>
                <div style={{ marginLeft: '30px' }}>
                  <small>4.5 (35)</small>
                </div>
              </Grid>
              <Grid item lg={6} style={{ marginLeft: 'auto' }}>
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
                      variant='subtitle2'
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
        <Grid item style={{ margin: '10px' }}>
          <Card className='cardPort'>
            <CardHeader
              avatar={<Avatar aria-label='Recipe' src={avatarImg}></Avatar>}
              action={
                <IconButton aria-label='Settings'>
                  <MoreVertIcon />
                </IconButton>
              }
              title='Somtuy Kongkounkoy'
              subheader='Online 12 min'
            />
            <CardActionArea>
              <CardMedia
                style={{ height: '200px', margin: '5px' }}
                image={imgTest}
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Lizard
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Lizards are a widespread group of squamate reptiles, with over
                </Typography>
              </CardContent>
            </CardActionArea>
            <Divider style={{ maxWidth: '80%', margin: 'auto' }} />
            <Grid container>
              <Grid item lg={6}>
                <CardActions disableSpacing>
                  <div
                    aria-label='Add to favorites'
                    style={{ paddingBottom: '0' }}
                  >
                    <FavoriteIcon style={starRating} />
                    <FavoriteIcon style={starRating} />
                    <FavoriteIcon style={starRating} />
                    <FavoriteIcon style={starRating} />
                    <FavoriteIconHalf style={starRating} />
                  </div>
                </CardActions>
                <div style={{ marginLeft: '30px' }}>
                  <small>4.5 (35)</small>
                </div>
              </Grid>
              <Grid item lg={6} style={{ marginLeft: 'auto' }}>
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
                      variant='subtitle2'
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
        <Grid item style={{ margin: '10px' }}>
          <Card className='cardPort'>
            <CardHeader
              avatar={<Avatar aria-label='Recipe' src={avatarImg}></Avatar>}
              action={
                <IconButton aria-label='Settings'>
                  <MoreVertIcon />
                </IconButton>
              }
              title='Somtuy Kongkounkoy'
              subheader='Online 12 min'
            />
            <CardActionArea>
              <CardMedia
                style={{ height: '200px', margin: '5px' }}
                image={imgTest}
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Lizard
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Lizards are a widespread group of squamate reptiles, with over
                </Typography>
              </CardContent>
            </CardActionArea>
            <Divider style={{ maxWidth: '80%', margin: 'auto' }} />
            <Grid container>
              <Grid item lg={6}>
                <CardActions disableSpacing>
                  <div
                    aria-label='Add to favorites'
                    style={{ paddingBottom: '0' }}
                  >
                    <FavoriteIcon style={starRating} />
                    <FavoriteIcon style={starRating} />
                    <FavoriteIcon style={starRating} />
                    <FavoriteIcon style={starRating} />
                    <FavoriteIconHalf style={starRating} />
                  </div>
                </CardActions>
                <div style={{ marginLeft: '30px' }}>
                  <small>4.5 (35)</small>
                </div>
              </Grid>
              <Grid item lg={6} style={{ marginLeft: 'auto' }}>
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
                      variant='subtitle2'
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
        <Grid item style={{ margin: '10px' }}>
          <Card className='cardPort'>
            <CardHeader
              avatar={<Avatar aria-label='Recipe' src={avatarImg}></Avatar>}
              action={
                <IconButton aria-label='Settings'>
                  <MoreVertIcon />
                </IconButton>
              }
              title='Somtuy Kongkounkoy'
              subheader='Online 12 min'
            />
            <CardActionArea>
              <CardMedia
                style={{ height: '200px', margin: '5px' }}
                image={imgTest}
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Lizard
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Lizards are a widespread group of squamate reptiles, with over
                </Typography>
              </CardContent>
            </CardActionArea>
            <Divider style={{ maxWidth: '80%', margin: 'auto' }} />
            <Grid container>
              <Grid item lg={6}>
                <CardActions disableSpacing>
                  <div
                    aria-label='Add to favorites'
                    style={{ paddingBottom: '0' }}
                  >
                    <FavoriteIcon style={starRating} />
                    <FavoriteIcon style={starRating} />
                    <FavoriteIcon style={starRating} />
                    <FavoriteIcon style={starRating} />
                    <FavoriteIconHalf style={starRating} />
                  </div>
                </CardActions>
                <div style={{ marginLeft: '30px' }}>
                  <small>4.5 (35)</small>
                </div>
              </Grid>
              <Grid item lg={6} style={{ marginLeft: 'auto' }}>
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
                      variant='subtitle2'
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
      </AliceCarousel>
    </Grid>
  )
}

export default LastProfile
