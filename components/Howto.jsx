import React, { useEffect } from 'react'
import { withRouter } from 'next/router'
import { Grid, Typography } from '@material-ui/core'
import Portrait from '@material-ui/icons/portrait'
import NaturePeople from '@material-ui/icons/naturePeople'
import PhotoCamera from '@material-ui/icons/photoCamera'

const Howto = () => {
  useEffect(() => {}, [])

  const iconStyle = { fontSize: '100px', color: '#4EB8A0' }
  const fontStyle = { color: '#4EB8A0' }
  const textDetail = { maxWidth: '315px', margin: 'auto' }

  return (
    <div style={{ marginTop: '50px' }}>
      <Typography
        variant='h3'
        style={{ textAlign: 'center', marginBottom: '50px' }}
      >
        SONGNIW ทำงานยังไง?
      </Typography>
      <Grid container style={{ justifyContent: 'center' }}>
        <Grid item lg={4} style={{ textAlign: 'center' }}>
          <PhotoCamera style={iconStyle} />
          <Typography style={fontStyle} variant='h5'>
            หาช่างภาพ
          </Typography>
          <Typography variant='h6' style={textDetail}>
            ถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพ
          </Typography>
        </Grid>
        <Grid item lg={4} style={{ textAlign: 'center' }}>
          <NaturePeople style={iconStyle} />
          <Typography style={fontStyle} variant='h5'>
            ถ่ายภาพ
          </Typography>
          <Typography variant='h6' style={textDetail}>
            ถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพถ่ายภาพ
          </Typography>
        </Grid>
        <Grid item lg={4} style={{ textAlign: 'center' }}>
          <Portrait style={iconStyle} />
          <Typography style={fontStyle} variant='h5'>
            รับภาพ
          </Typography>
          <Typography variant='h6' style={textDetail}>
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
    </div>
  )
}

export default withRouter(Howto)
