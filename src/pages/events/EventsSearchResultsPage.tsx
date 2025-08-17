import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import {  useLocation } from 'react-router-dom';
import { EventService } from '../../services/events';
import { Searchbar } from '../../components/Searchbar';
import { Box, Skeleton, Typography } from '@mui/material';
import { EventsSearchResults } from './_components/EventsSearchResults';

export type locationSearchStateType = {
    searchQuery: string
}
export const EventsSearchResultsPage = () => {
    const location = useLocation();
    const searchState = location.state as locationSearchStateType; 
    
    const [searchPageQuery, setSearchPageQuery] = useState(searchState.searchQuery);

const { data, refetch, isLoading, isFetching } = useQuery({
  queryKey:[ "events"],
  queryFn: () => EventService.getEventsQuery(searchPageQuery),
//  enabled: false
  
})

const searchEvents = () => {
    refetch()
console.log(data)
}


  return (
    <>
    <Box>
        <Searchbar searchEntity={'events'} setSearchQuery={setSearchPageQuery} onSearch={searchEvents}/>
        {(isLoading || isFetching) &&
        Array.from({ length: 10 }).map((_, i) => (
          <Skeleton
            key={i}
            variant="rectangular"
            width="100vw"
            height='30%'
            style={{ margin: 5}}
          />
        ))}

         {!isLoading && data?.page.totalElements === 0 && (
        <Typography sx={{p: 10}}>No events found. Please try again!</Typography>
      )}
        {!isLoading && <EventsSearchResults data={data}/>}
    </Box>
    </>
    
    
  )
}
