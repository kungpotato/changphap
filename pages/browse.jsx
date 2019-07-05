import React, { useState, useEffect } from 'react'
import '../styles/styles.less'
import { css } from '@emotion/core'
import { BounceLoader } from 'react-spinners'
import { makeStyles, Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from '../theme'
import Header from '../components/Header'
import MainTextField from '../components/MainTextField'
import _JSXStyle from 'styled-jsx/style' //eslint-disable-line

const override = css`
  display: block;
  margin: 0 auto;
`

const useStyle = makeStyles(() => ({
  search: {
    background: '#48BFA3',
    width: '100%',
    height: 'auto',
    padding: '15px',
  },
  searchLeft: {
    float: 'right',
  },
  searchRight: {
    float: 'left',
    textAlign: 'center',
  },
}))

const Browse = ({ pathname, slug }) => {
  const classes = useStyle()
  const [loading, setLoading] = useState(false) // เปลี่ยนเป็น true เมื่อเดฟเสร็จ
  const [values, setValues] = React.useState({
    jobType: '',
    place: '',
  })

  useEffect(() => {
    console.log(pathname)
    console.log(slug)

    window.onload = () => {
      setLoading(false)
    }
  }, [pathname, slug])

  const handleChange = param => event => {
    setValues({ ...values, [param]: event.target.value })
    console.log(event.target.value)
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
        <Container maxWidth='xl' style={{ marginTop: '80px' }}>
          <div className={classes.search}>
            <form noValidate autoComplete='off'>
              <Grid container spacing={3} justify='center'>
                <Grid item xs={12} sm={4} style={{ textAlign: 'center' }}>
                  <div className='searchLeft'>
                    <MainTextField
                      label='คุณต้องการถ่ายภาพงานอะไร'
                      handleChange={handleChange('jobType')}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={4} style={{ textAlign: 'center' }}>
                  <div className='searchRight'>
                    <MainTextField
                      label='คุณจะถ่ายภาพที่ไหน'
                      handleChange={handleChange('jobType')}
                    />
                  </div>
                </Grid>
              </Grid>
            </form>
          </div>
          <Grid container>
            <Grid item xs={12} sm={4} style={{ margin: '25px' }}>
              <Paper square style={{ padding: '15px' }}>
                <Typography
                  variant='subtitle1'
                  align='center'
                  color='secondary'
                >
                  หาช่างภาพตามภูมิภาค
                </Typography>
                <hr />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
      <style jsx>
        {`
          .searchLeft {
            float: right;
          }
          .searchRight {
            float: left;
          }
          @media screen and (max-width: 660px) {
            .searchLeft {
              float: inherit;
            }
            .searchRight {
              float: inherit;
            }
          }
        `}
      </style>
    </MuiThemeProvider>
  )
}

Browse.getInitialProps = async ({ pathname, query }) => {
  const slug = query.slug
  return { pathname, slug }
}

export default Browse
