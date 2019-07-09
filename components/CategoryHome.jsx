import React, { useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core'
import '../styles/homeStyle.scss'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'

const CategoryHome = () => {
  useEffect(() => {}, [])

  const imgTest =
    'https://images.unsplash.com/photo-1544736826-61c35a3511dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  const avatarImg =
    'https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=815&q=80'

  return (
    <Grid style={{ background: '#4EB8A0' }}>
      <div
        style={{
          marginBottom: '50px',
          maxWidth: '1280px',
          margin: 'auto',
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      >
        <Typography
          variant='h3'
          style={{ textAlign: 'center', marginBottom: '50px', color: '#fff' }}
        >
          หมวดหมู่งานยอดนิยม
        </Typography>

        <Grid container style={{ margin: '10px' }}>
          <Grid item lg={3} style={{ padding: '10px' }}>
            <GridListTile style={{ listStyle: 'none', height: '300px' }}>
              <img src={imgTest} alt={'รับปริญญา'} />
              <GridListTileBar
                title={'รับปริญญา'}
                style={{
                  height: '100%',
                  textAlign: 'center',
                  fontSize: '50px',
                }}
              />
            </GridListTile>
          </Grid>
          <Grid item lg={3} style={{ padding: '10px' }}>
            <GridListTile style={{ listStyle: 'none', height: '300px' }}>
              <img src={imgTest} alt={'แต่งงาน'} />
              <GridListTileBar
                title={'แต่งงาน'}
                style={{
                  height: '100%',
                  textAlign: 'center',
                  fontSize: '50px',
                }}
              />
            </GridListTile>
          </Grid>
          <Grid item lg={3} style={{ padding: '10px' }}>
            <GridListTile style={{ listStyle: 'none', height: '300px' }}>
              <img src={imgTest} alt={'ปาร์ตี้'} />
              <GridListTileBar
                title={'ปาร์ตี้'}
                style={{
                  height: '100%',
                  textAlign: 'center',
                  fontSize: '50px',
                }}
              />
            </GridListTile>
          </Grid>
          <Grid item lg={3} style={{ padding: '10px' }}>
            <GridListTile style={{ listStyle: 'none', height: '300px' }}>
              <img src={imgTest} alt={'งานบวช'} />
              <GridListTileBar
                title={'งานบวช'}
                style={{
                  height: '100%',
                  textAlign: 'center',
                  fontSize: '50px',
                }}
              />
            </GridListTile>
          </Grid>
        </Grid>
      </div>
    </Grid>
  )
}

export default CategoryHome
