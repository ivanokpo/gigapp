import {  useState } from 'react'
import { Searchbar } from '../../components/Searchbar'

import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

export const EventsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();


  const searchEvents =()=>{
   navigate(`/events-search-results`, {state: {searchQuery: searchQuery}});

  }


  return (
    <Box sx={{display: 'flex',}}>
    <Searchbar searchEntity={'events'} setSearchQuery={setSearchQuery} onSearch={searchEvents}/>
    </Box>
  )
}
