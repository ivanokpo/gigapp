import React, { useEffect, useState } from 'react'
import { Searchbar } from '../../components/Searchbar'
import { useQuery } from '@tanstack/react-query';
import { EventService } from '../../services/events';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

export const EventsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

//   const { data, isLoading, error, refetch, isFetched } = useQuery({
//   queryKey:[ "events"],
//   queryFn: () => EventService.getEventsQuery(searchQuery),
//   enabled: false
  
// })
  //useQuery( EventService.getEventsQuery(searchQuery));
  // useEffect(()=>{
  //   console.log(searchQuery)
  // },[searchQuery])

  const searchEvents =()=>{
    //refetch()
    //console.log(isFetched)
   navigate(`/events-search-results`, {state: {searchQuery: searchQuery}});

  }

  // useEffect(()=>{
  //   console.log(data)
  // },[data])
  return (
    <Box sx={{display: 'flex',}}>
    <Searchbar searchEntity={'events'} setSearchQuery={setSearchQuery} onSearch={searchEvents}/>
    </Box>
  )
}
