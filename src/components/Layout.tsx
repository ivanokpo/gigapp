import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Box } from '@mui/material'

export const Layout = () => {
  return (
    <Box sx={{display: 'flex', padding: 0, width: '100vw', height: '100vh' }}>
    <Navbar/>
      <Box sx={{pt: 15, pl: 2}}>
        <Outlet/>
      </Box>
    </Box>
    
  )
}

