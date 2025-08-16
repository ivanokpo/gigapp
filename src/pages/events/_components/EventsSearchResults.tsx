
import type { EventType } from '../../../types/EventType'
import { Box } from '@mui/material';
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
            return (
            <Box padding={2}>
                <EventSearchResultItem data={event}/>
                </Box>
            )
        })}
        </Box>
    </>
  )
}
