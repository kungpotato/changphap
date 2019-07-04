import React, { useEffect } from 'react'
import { withRouter } from 'next/router'
import { TextField, Button, Grid, Typography } from '@material-ui/core'
import Howto from '../components/Howto'
import LastProfile from '../components/LastProfile';


const HomeSec2 = ({ router }) => {


    useEffect(() => {


    }, [])


    return (
        <React.Fragment>
            <Howto/>
            <LastProfile/>
        </React.Fragment>
    )
}

export default withRouter(HomeSec2)
