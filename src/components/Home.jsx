import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Home = () => {
  var[user,setuser]=useState([])
  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then((response)=>{
    setuser(response.data)
  })
  return (
    <div> 
      <br />
      <h2>Dashboard</h2>
      <TableContainer>
        <Table>
          <TableHead>
            <TableCell>Id</TableCell>
            <TableCell>Title</TableCell>
          </TableHead>
          <TableBody>
            {user.map((val)=>{
              return(
            <TableRow>
            <TableCell>{val.id}</TableCell>
            <TableCell>{val.title}</TableCell>
            </TableRow>
              )
          })}

          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Home