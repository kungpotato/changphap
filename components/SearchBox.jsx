import React from 'react'
import { withRouter } from 'next/router'
import styled from 'styled-components'
import { TextField, Button, Grid, Typography } from '@material-ui/core'

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    fieldset {
      border-color: #fff;
    }
    &:hover fieldset {
      border-color: #4eb8a0;
    }
    &.Mui-focused fieldset {
      border-color: #fff;
    }
  }
  label.Mui-focused {
    color: white;
  }
  .MuiInputLabel-animated {
    transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
      transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    color: #fff;
  }
  .MuiOutlinedInput-root fieldset {
    border-color: #fff;
    border-top: 0;
    border-left: 0;
    border: -r;
    border-right: 0;
    border-radius: 0;
  }
  .MuiInputBase-input {
    color: #fff;
  }
  .MuiFormControl-root {
    width: 100% !important;
  }
`

const SearchBox = () => {
  const stylyBg = {
    backgroundImage: 'url("./static/images/photography.jpg")',
    width: '100%',
    height: '550px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  const TextFieldStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    minHeight: '550px',
    background: '#4eb8a036',
  }

  const btnStyle = {
    background: '#4EB8A0',
    color: '#fff',
    width: '100%',
    height: '50px',
    marginTop: '25px',
    borderRadius: '0',
  }

  return (
    <div style={{ marginBottom: '50px' }}>
      <div style={stylyBg}>
        <div style={TextFieldStyle}>
          <Typography
            variant='h2'
            style={{ color: '#fff', marginBottom: '20px', maxWidth: '540px' }}
          >
            เลือกและหาช่างภาพที่เหมาะกับงานของคุณ
          </Typography>
          <Typography
            variant='h5'
            style={{ color: '#fff', marginBottom: '20px', maxWidth: '540px' }}
          >
            บริการด้วยฝีมือดี เพิ่อเก็บภาพในวันสำคัญของคุณ
          </Typography>
          <Grid
            container
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Grid
              item
              xs={12}
              md={12}
              lg={4}
              style={{
                paddingRight: '20px',
                paddingLeft: '20px',
                backgroundColor: 'rgba(0, 0, 0, 0.39)',
                height: '106px',
              }}
            >
              <StyledTextField
                style={{
                  paddingTop: '20px',
                  paddingBottom: '20px',
                  width: '100%',
                }}
                label='ค้นหาช่างภาพใกล้คุณ'
                id='deterministic-outlined-input'
                variant='outlined'
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              lg={4}
              style={{
                paddingRight: '20px',
                paddingLeft: '20px',
                backgroundColor: 'rgba(0, 0, 0, 0.39)',
                height: '106px',
              }}
            >
              <StyledTextField
                style={{
                  paddingTop: '20px',
                  paddingBottom: '20px',
                  width: '100%',
                }}
                label='ค้นหาตามประเภทของงาน'
                id='deterministic-outlined-input'
                variant='outlined'
              />
            </Grid>
            <Grid
              item
              xs={12}
              lg={1}
              style={{
                paddingRight: '20px',
                paddingLeft: '20px',
                backgroundColor: 'rgba(0, 0, 0, 0.39)',
                height: '106px',
              }}
            >
              <Button variant='contained' style={btnStyle}>
                ค้นหา
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default withRouter(SearchBox)
