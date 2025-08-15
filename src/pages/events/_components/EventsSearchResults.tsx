import React from 'react'
import type { EventType } from '../../../types/EventType'
import { Box, Grid, Paper, Stack, styled } from '@mui/material';
import { EventSearchResultItem } from './EventSearchResultItem';

type EventsSearchResultsProps = {
    data?: EventType;
}




export const EventsSearchResults = (props: EventsSearchResultsProps) => {
    const {data} = props;

  return (
    <>
    <Box sx={{padding: 5}}>
        {data?._embedded?.events?.map(event => {
            return <EventSearchResultItem data={event}/>
        })}
        </Box>
    </>
  )
}
