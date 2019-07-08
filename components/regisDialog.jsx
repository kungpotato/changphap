import React, { forwardRef, useState } from 'react'
import {
  Dialog,
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Grid,
  TextField,
  Slide,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { DatePicker } from '@material-ui/pickers'
import { makeStyles } from '@material-ui/styles'

const useStyle = makeStyles(theme => {
  //console.log(theme.palette.primary)
  return {
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }
})

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const fields = [
  { label: 'ชื่อผู้ใช้', name: 'username', type: 'text' },
  { label: 'รหัสผ่าน', name: 'password', type: 'password' },
  { label: 'ชื่อ', name: 'name', type: 'text' },
  { label: 'นามสกุล', name: 'lastName', type: 'text' },
  { label: 'อีเมลล์', name: 'email', type: 'email' },
  { label: 'เบอร์โทรศัพท์', name: 'phone', type: 'number' },
  { label: 'วันเกิด', name: 'birthday', type: 'date' },
  { label: 'ที่อยู่', name: 'address', type: 'text' },
]

const RegisDialog = ({ open, handleClose }) => {
  const classes = useStyle()

  const [selectedDate, setSelectedDate] = useState(null)
  const handleDateChange = date => {
    setSelectedDate(date)
  }
  const handleCloseDialog = () => {
    handleClose(false)
  }
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleCloseDialog}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Container maxWidth='lg'>
          <Toolbar>
            <IconButton
              edge='start'
              style={{ color: '#fff' }}
              onClick={handleCloseDialog}
              aria-label='Close'
            >
              <CloseIcon />
            </IconButton>
            <Typography
              style={{ color: '#fff' }}
              variant='h6'
              className={classes.title}
            >
              กรุณากรอกข้อมูล
            </Typography>
            <Button
              style={{ color: '#fff', fontSize: '18px' }}
              onClick={handleClose}
            >
              save
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth='lg'>
        <Grid container spacing={3} justify='space-around'>
          <Grid item xs={12} sm={4}>
            {fields.map(item => {
              return item.name !== 'address' && item.name !== 'birthday' ? (
                <TextField
                  key={item.name}
                  label={item.label}
                  name={item.name}
                  fullWidth
                  margin='normal'
                  variant='outlined'
                />
              ) : item.name === 'birthday' ? (
                <DatePicker
                  key={item.name}
                  label={item.name}
                  name={item.name}
                  fullWidth
                  margin='normal'
                  variant='dialog'
                  inputVariant='outlined'
                  value={selectedDate}
                  onChange={handleDateChange}
                  format='dd/MM/yyyy'
                  views={['date', 'month', 'year']}
                />
              ) : (
                <TextField
                  key={item.name}
                  label={item.name}
                  name={item.name}
                  fullWidth
                  margin='normal'
                  multiline={true}
                  rows={3}
                  rowsMax={3}
                  variant='outlined'
                />
              )
            })}
          </Grid>
        </Grid>
        <Typography variant='body1'></Typography>
      </Container>
    </Dialog>
  )
}

export default RegisDialog
