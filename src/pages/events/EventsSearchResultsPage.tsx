import { keepPreviousData, useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import {  useLocation, useNavigate, useNavigationType } from 'react-router-dom';
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
    const navigate = useNavigate();
    const params = new URLSearchParams(location.search);
    const query = params.get("query") || "";
    const [searchPageQuery, setSearchPageQuery] = useState(query);

    

const { data, refetch, isLoading, isFetching, isPending, isRefetching, isSuccess} = useQuery({
  queryKey:[ "events", query],
  queryFn: () => EventService.getEventsQuery(query),
  staleTime: 1000 * 10 * 1, 

  //enabled: !!searchState,
  
  placeholderData: keepPreviousData,
  
})

// const searchEvents = () => {
//     //refetch()
//     //console.log(data)

  
// }

//console.log("new page", searchPageQuery, query, searchState)

const searchEvents = () => {
  //console.log("hey", searchPageQuery)
  //console.log(isPending, isRefetching, isFetching, isLoading, isSuccess)
    navigate(`/events-search-results?query=${encodeURIComponent(searchPageQuery)}`);
    refetch();
  }

  const navigationType = useNavigationType();
  



  // console.log("Back/forward button clicked, query now: ", searchPageQuery, query, searchState);
  //     console.log("search page query", searchPageQuery);
  //     console.log('url query', query)
  //     console.log('search state', searchState)

  return (
    <>
    <Box>
        <Searchbar searchEntity={'events'} setSearchQuery={setSearchPageQuery} onSearch={searchEvents}  placeholder={query ?? ''}/>
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
        { <EventsSearchResults data={data}/>}
    </Box>
    </>
    
    
  )
}
