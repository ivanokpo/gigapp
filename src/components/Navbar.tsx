import { AppBar, Box, Button, Container,  MenuItem, Toolbar, Typography, useTheme } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';

export const Navbar = () => {
    const pages = ['Events'];


    const navigate = useNavigate();

  const navigateToEvents = ()=>{
    navigate("/events")
  }

  const handleCategorySelect = (page: string) => {

    switch(page){
      case pages[0]:
        navigateToEvents()
    }
      
    
  };

  const theme = useTheme();

  return (
    <AppBar position='sticky' 
    sx={{
        position: "fixed",     
        top: 0,              
        left: 0,
        width: "100%",         
        backgroundColor:  `${theme.palette.primary.main}`,
        color: "#fff",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: 'start',
        zIndex: 1,          
    }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          
          <TheaterComedyIcon sx={{pr: 1.5}}/>
          
          <MenuItem onClick={() => navigate("/")} sx={{borderRadius: '0.5rem'}}>
          <Typography
            variant="h6"
            noWrap
            sx={{ 
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: `${theme.palette.secondary.main}`,
              textDecoration: 'none',
              textAlign: 'center',
              
            }}
          >
            GIGLI
          </Typography>
          </MenuItem>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCategorySelect(page)}              
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          
          
        </Toolbar>
      </Container>
    </AppBar>
  )
}
