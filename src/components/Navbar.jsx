import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div> 
      <AppBar>
        <Toolbar>
          <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>Blog</Typography>
          <Link to="/home" >
          <Button variant='contained'>Home</Button>
          </Link>&nbsp; &nbsp;
          <Link to="/bform" >
          <Button variant='contained'>Form</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar