import { Button, TextField } from '@mui/material'
import React from 'react'

const BlogForm = () => {
  return (
    <div> 
      <br />
      <h2>Blog Form</h2>
      <TextField variant='outlined' label="Blog Name"></TextField>
      <br /> <br />
      <TextField variant='outlined' label="Description"></TextField>
      <br /> <br />
      <TextField variant='outlined' label="Author Name"></TextField>
      <br /> <br />
      <Button variant='contained' color='success'>Done</Button>

    </div>
  )
}

export default BlogForm