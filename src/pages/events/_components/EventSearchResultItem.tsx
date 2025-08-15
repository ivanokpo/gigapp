import { Box, Paper, Stack, styled, Typography } from '@mui/material'
import React, { useEffect } from 'react'

const Item = styled(Paper)(() => ({
  backgroundColor: '#fff',
  
  padding: 2,
  textAlign: 'center',
  color: 'grey'
  
}));

type EventSearchResultItemType = {
     
        id: string;
      name: string;
      dates?: {start: {localDate: string}}
      url?: string;
      type: string;
       images?: {
        height: number;
        width: number;
        ratio: string;
        url: string;
      }[];
          _embedded?: {
                venues?: {
                    id: string;
                    name: string;
                    country?: { name: string };
                    city?: { name: string };
                    url?: string;
                    type: string;
                }[];
                attractions?: {
                    id: string;
                    name: string;
                    country?: { name: string };
                    city?: { name: string };
                    url?: string;
                    type: string;
                }[];
  };
    
}

type EventSearchResultItemProps = {
    data: EventSearchResultItemType
}

export const EventSearchResultItem = (props: EventSearchResultItemProps) => {
    const {data: event} = props;

useEffect(()=>{
    console.log(event?.images?.filter(x => x.url.includes("ARTIST")) && event?.images?.filter(x => x.url.includes("ARTIST")).length > 0 ? event?.images?.filter(x => x.url.includes("ARTIST"))[0].url : "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg")
},[event?.images])
  return (
    <Box padding={10}>
        <Stack direction='row'>
            <Stack>
                <img 
                src={`${event?.images?.filter(x => x.url.includes("ARTIST")) && 
                    event?.images?.filter(x => x.url.includes("ARTIST")).length > 0 ? 
                event?.images?.filter(x => x.url.includes("ARTIST"))[0].url : 
                "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg"}`}
                style={{ width: "200px", height: "150px" }} 
                >
                </img>
            </Stack>
            <Typography>
                {event.name}, {event.dates?.start.localDate}
            </Typography>
            
        </Stack>
        
        
        </Box>
  )
}
