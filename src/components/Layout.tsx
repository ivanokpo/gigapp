
import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Box } from '@mui/material';
import '@/main.css';

export const Layout = () => {
  return (
    <>
      <Box className="overlay"></Box>
      <Box
        className="app-background"
        sx={{
          display: 'flex',
          
          width: '100vw',
          height: '100vh',
          backgroundImage: `url(images/backgroundpic.jpg)`,
        }}
      >
        <Navbar />
        <Box sx={{  pl: 2, mt: 15,overflowY: 'overlay', width: '100vw' }} className="content">
          <Outlet />
        </Box>
      </Box>
    </>
  );
};
