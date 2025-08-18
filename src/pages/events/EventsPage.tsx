import { useState } from 'react';
import { Searchbar } from '@/components/Searchbar';

import { useNavigate } from 'react-router-dom';
import { Alert, Box, Snackbar } from '@mui/material';
import { searchSchema } from '@/schemas/searchSchema';
import CloseIcon from '@mui/icons-material/Close';
const urlRedirectAlerts = {
  
  failedSearch: (
  <Alert icon={<CloseIcon fontSize="inherit"/>} severity='error'>
    Ticket URL invalid
  </Alert>)
}
export const EventsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
    const [showSnackbar, setShowSnackbar] = useState(false);

  const navigate = useNavigate();

 

  const searchEvents = () => {
    if(!searchSchema.safeParse(searchQuery).success){
              
              
                
                setShowSnackbar(true);
              } else { 
               navigate(`/events-search-results?query=${encodeURIComponent(searchQuery)}`, 
               {
                state: { searchQuery: searchQuery },
               });
              
              }
              
    
  };

  return (
    <Box
      sx={{
        position: 'fixed', 
        top: 0,
        left: 0,
        width: '100vw', 
        height: '100vh', 
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'column',
        gap: 2,
        margin: 0,
        padding: 0,
      }}
    >
      <Searchbar searchEntity={'events'} setSearchQuery={setSearchQuery} onSearch={searchEvents} />
      <Snackbar 
                    open={showSnackbar} 
                    autoHideDuration={4000} 
                    onClose={() => setShowSnackbar(false)} 
                    anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                  >
                   {urlRedirectAlerts.failedSearch} 
                  </Snackbar>
    </Box>
  );
};
