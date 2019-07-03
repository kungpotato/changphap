import React, { useEffect, useState } from 'react'
import { withRouter } from 'next/router'
import { TextField } from '@material-ui/core'
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
    overrides: {
        MuiInputLabel: {
            root: {
                borderColor:'white',
                color: "white",
                "&$focused": {
                    color: "white"
                },
                "&$:after" : {
                    borderBottom: 'white'
                }
            }
        }
    }
})

const SearchBox = ({ router }) => {


    useEffect(() => {


    }, [])

    function handleClick(event) {
        setAnchorEl(event.currentTarget)
    }

    function handleClose() {
        setAnchorEl(null)
    }

    const stylyBg = {
        backgroundImage: 'url("./static/images/photography.jpg")',
        width: '100%',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }

    const TextFieldStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '100vh'
    }


    return (
        <React.Fragment>
            <div style={stylyBg}>
                <div style={TextFieldStyle}>
                    <ThemeProvider theme={theme}>
                        <TextField label="label" />
                    </ThemeProvider>
                </div>
            </div>
        </React.Fragment>
    )
}

export default withRouter(SearchBox)
