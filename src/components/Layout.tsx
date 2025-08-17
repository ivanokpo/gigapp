import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Box } from '@mui/material'
import backgroundpic from '../../public/images/backgroundpic.jpg'
import "../main.css";

export const Layout = () => {
  return (
    <>
    <Box className='overlay'></Box>
    <Box 
    className='app-background'
    sx={{display: 'flex', padding: 0, width: '100vw', height: '100vh', backgroundImage: `url(${backgroundpic})` }} >
    <Navbar/>
      <Box sx={{pt: 15, pl: 2, overflow: 'scroll', width: '100vw'}} className="content">
        <Outlet/>
      </Box>
    </Box>
    
    </>
  )
}

