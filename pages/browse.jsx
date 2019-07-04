import React, { useState, useEffect } from 'react'
import '../styles/styles.less'
import { css } from '@emotion/core'
import { BounceLoader } from 'react-spinners'
import { makeStyles, TextField } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from '../theme'
import Header from '../components/Header'

const override = css`
  display: block;
  margin: 0 auto;
`

const useStyle = makeStyles(theme => ({
  search: {
    background: '#48BFA3',
    width: '100%',
    height: 'auto',
  },
  field: {
    background: '#fff',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}))

const Browse = () => {
  const classes = useStyle()
  const [loading, setLoading] = useState(false) // เปลี่ยนเป็น true เมื่อเดฟเสร็จ
  const [values, setValues] = React.useState({
    jobType: '',
    place: '',
  })

  useEffect(() => {
    window.onload = () => {
      setLoading(false)
    }
  }, [])

  const handleChange = param => event => {
    setValues({ ...values, [param]: event.target.value })
  }

  return (
    <MuiThemeProvider theme={theme}>
      <div
        className='sweet-loading'
        style={{ paddingTop: '200px', display: loading ? 'block' : 'none' }}
      >
        <BounceLoader
          css={override}
          sizeUnit='px'
          size={150}
          color='#48BFA3'
          loading={loading}
        />
      </div>
      <div style={{ display: !loading ? 'block' : 'none' }}>
        <Header />
        <div className={classes.search}>
          <form noValidate autoComplete='off'>
            <Grid container spacing={3} justify='center'>
              <Grid item xs={12} sm={4} style={{ marginRight: '20px' }}>
                <TextField
                  id='outlined-name'
                  className={classes.field}
                  label='คุณต้องการถ่ายภาพงานอะไร'
                  value={values.jobType}
                  onChange={handleChange('jobType')}
                  margin='normal'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4} style={{ marginRight: '20px' }}>
                <TextField
                  id='place'
                  className={classes.field}
                  label='คุณจะถ่ายภาพที่ไหน'
                  value={values.place}
                  onChange={handleChange('place')}
                  margin='normal'
                  fullWidth
                />
              </Grid>
            </Grid>
          </form>
        </div>
        <Grid container>
          <Grid item xs={12} sm={4} style={{ margin: '25px' }}>
            <Paper square style={{ padding: '15px' }}>
              <Typography variant='subtitle1' align='center' color='secondary'>
                หาช่างภาพตามภูมิภาค
              </Typography>
              <hr />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  )
}

export default Browse
