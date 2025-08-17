
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
    <Box sx={{paddingTop: 5}}>
        {data?._embedded?.events?.map(event => {
            return (
            <Box paddingTop={2} key={event.id}>
                <EventSearchResultItem data={event}/>
            </Box>
            )
        })}
        </Box>
    </>
  )
}
