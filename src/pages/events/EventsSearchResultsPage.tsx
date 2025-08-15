import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { data, useLocation } from 'react-router-dom';
import { EventService } from '../../services/events';
import { Searchbar } from '../../components/Searchbar';
import { Box, Toolbar } from '@mui/material';
import { EventsSearchResults } from './_components/EventsSearchResults';

export type locationSearchStateType = {
    searchQuery: string
}
export const EventsSearchResultsPage = () => {
    const location = useLocation();
    //console.log(location.state);
    const searchState = location.state as locationSearchStateType; 
    
    const [searchPageQuery, setSearchPageQuery] = useState(searchState.searchQuery);

const { data, isLoading, error, refetch, isFetched } = useQuery({
  queryKey:[ "events"],
  queryFn: () => EventService.getEventsQuery(searchPageQuery),
//  enabled: false
  
})

const searchEvents = () => {
    refetch()
console.log("refetched!")
console.log("data", data?._embedded?.events !== undefined && data?._embedded?.events[0].name)
console.log(data)
}


  return (
    <>
    <Box>
        <Searchbar searchEntity={'events'} setSearchQuery={setSearchPageQuery} onSearch={searchEvents}/>
   
    <EventsSearchResults data={data}/>
    </Box>
    </>
    
    
  )
}
