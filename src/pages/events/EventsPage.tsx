import { useState } from 'react';
import { Searchbar } from '@/components/Searchbar';

import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

export const EventsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

 

  const searchEvents = () => {
    navigate(`/events-search-results?query=${encodeURIComponent(searchQuery)}`, {
      state: { searchQuery: searchQuery },
    });
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
    </Box>
  );
};
