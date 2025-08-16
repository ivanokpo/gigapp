import { Box,  Card, CardMedia, Divider, Fade, IconButton, Modal, Stack, Typography } from '@mui/material';
import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import CloseIcon from '@mui/icons-material/Close';
import type { EmbeddedVenue } from '../types/EmbeddedVenue';
import type { EmbeddedAttraction } from '../types/EmbeddedAttraction';
import FestivalIcon from '@mui/icons-material/Festival';
import AttractionsIcon from '@mui/icons-material/Attractions';
type ItemModalType = {
    isOpen: boolean;
    title: string;
    date: string;
    ticketUrl: string;
    imageUrl: string;
    details?: string[];
    onClose: () => void;
    venueDetails?: EmbeddedVenue[];
    attractionDetails?: EmbeddedAttraction[];
    type: string;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'rgba(34, 34, 34, 1)',
  boxShadow: 24,
  p: 4,
  
};

export const ItemModal = (props: ItemModalType) => {
    const {isOpen, title, date, ticketUrl, imageUrl, onClose, venueDetails, attractionDetails, type} = props;
  console.log(venueDetails, attractionDetails)
  
    return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        
      >
        <Fade in={isOpen}>
          <Box sx={style} >
            <Card sx={{bgcolor: 'rgba(34, 34, 34, 1)' }}>
                <CardMedia
                component="img"
                sx={{ width: "100%"}}
                image={imageUrl}
                alt="Modal Cover"
                />
                <Box id="modal-content" sx={{p: 2, mt: 2, color: 'white', border: 'solid', borderRadius: 0.5, borderColor: 'rgba(125, 125, 125, 0.2)'}}>
                    <Box id="modal-details">
                        <Box id="modal-header" sx={{p:1}}>
                        <Typography id="modal-title" variant="h5" component="h2">
                        {title}
                        </Typography>
                        <Typography id="modal-date" sx={{ mt: 2 }}>
                        {date}
                        </Typography>
                        </Box>
                        <Divider variant='middle'sx={{bgcolor: 'grey', m: 2}}/>
                        {type=='event' && <Box id='event-embedded-details' sx={{p: 0.5}}>
                            <Box id="venue-details" sx={{mt: 1}}>
                                <Stack direction='row'>
                                    <FestivalIcon />
                                    <Box sx={{ml: 3}}>
                                    {venueDetails && venueDetails.map(venue=> 
                                    <>
                                    <Typography variant='subtitle1'>{venue.name}</Typography>
                                    <Typography variant='subtitle2'>{venue.city?.name ?? ''}, {venue.country?.name ?? ''}</Typography></>)}
                                    </Box>
                                </Stack>
                                
                            </Box>
                            <Box id="attractions-details" sx={{mt: 2}}>
                                <Stack direction='row'>
                                    <AttractionsIcon />
                                    <Box sx={{ml: 3}}>
                                    {attractionDetails && attractionDetails.map(attraction=> 
                                    <>
                                    <Typography variant='subtitle1'>{attraction.name}</Typography>
                                    </>)}
                                    </Box>
                                </Stack>
                            </Box>
                        </Box>}
                        <Box>

                        </Box>
                    </Box>
                    <Box sx={{mt: 1}}>
                        <IconButton aria-label="details" onClick={() => onClose()}>
                            <CloseIcon sx={{color: 'lightgrey'}}/>
                        </IconButton>
                        <IconButton aria-label="buy" sx={{float: 'right'}} onClick={()=> window.open(ticketUrl)}>
                            <ConfirmationNumberIcon sx={{color: 'lightgrey'}}/>
                        </IconButton>
                    </Box>
                </Box>
            </Card>
            
          </Box>
        </Fade>
      </Modal></>
  )
}
