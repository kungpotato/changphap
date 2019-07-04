import React from 'react'
import { TextField } from '@material-ui/core'
import { withRouter } from 'next/router'
import styled from 'styled-components'

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
    width: 275px;
  }
`

const MainTextField = ({ label, width, handleChange }) => {
  return (
    <StyledTextField
      style={{
        paddingRight: '10px',
        marginBottom: '10px',
        paddingTop: '20px',
        paddingBottom: '20px',
        width: `${width}px`,
      }}
      label={label}
      id='deterministic-outlined-input'
      variant='outlined'
      onChange={handleChange}
    />
  )
}

export default withRouter(MainTextField)
