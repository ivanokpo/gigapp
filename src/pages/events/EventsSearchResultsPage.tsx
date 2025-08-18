import { keepPreviousData, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { EventService } from '@/services/events';
import { Searchbar } from '@/components/Searchbar';
import { Box, Skeleton, Typography } from '@mui/material';
import { EventsSearchResults } from '@/pages/events/_components/EventsSearchResults';

export type locationSearchStateType = {
  searchQuery: string;
};
export const EventsSearchResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const query = params.get('query') || '';
  const [searchPageQuery, setSearchPageQuery] = useState(query);

  const { data, refetch, isLoading, isFetching, isRefetching, error } = useQuery({
    queryKey: ['events', query],
    queryFn: () => EventService.getEventsQuery(query),
    staleTime: 1000 * 10 * 1,

    placeholderData: keepPreviousData,
  });

  const showSkeleton = isFetching || isRefetching;

  const searchEvents = () => {
    navigate(`/events-search-results?query=${encodeURIComponent(searchPageQuery)}`);
    refetch();
  };

  if (error) return <div>Error fetching events</div>;

  return (
    <>
      <Box>
        <Box sx={{ position: 'fixed', zIndex: 1 }}>
          <Searchbar
            searchEntity={'events'}
            setSearchQuery={setSearchPageQuery}
            onSearch={searchEvents}
            placeholder={query ?? ''}
          />
        </Box>

        {showSkeleton && (
          <Box sx={{ pt: 6, height: '100vh', mr: '12%' }}>
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                width="100%"
                height="10%"
                style={{ padding: '8%', paddingTop: 10, marginTop: 10, marginBottom: '1rem' }}
              />
            ))}
          </Box>
        )}

        {!isLoading && data?.page.totalElements === 0 && (
          <Typography sx={{ p: 10 }}>No events found. Please try again!</Typography>
        )}
        {!isFetching && data !== undefined && <EventsSearchResults data={data} />}
      </Box>
    </>
  );
};
