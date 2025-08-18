import {
  Box,
  Card,
  CardMedia,
  Divider,
  Fade,
  IconButton,
  Modal,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import CloseIcon from '@mui/icons-material/Close';
import FestivalIcon from '@mui/icons-material/Festival';
import AttractionsIcon from '@mui/icons-material/Attractions';
import type { AccessibilityObject, EmbeddedAttractionsObjectType, EmbeddedVenuesObjectType } from '@/types/event';
import AccessibleIcon from '@mui/icons-material/Accessible';


type ItemModalType = {
  isOpen: boolean;
  title: string;
  date: string;
  ticketUrl: string;
  imageUrl: string;
  details?: string[];
  onClose: () => void;
  venueDetails?: EmbeddedVenuesObjectType[];
  attractionDetails?: EmbeddedAttractionsObjectType[];
  type: string;
  accessibilityDetails?: AccessibilityObject;
};

export const ItemModal = (props: ItemModalType) => {
  const {
    isOpen,
    title,
    date,
    ticketUrl,
    imageUrl,
    onClose,
    venueDetails,
    attractionDetails,
    type,
    accessibilityDetails
  } = props;
  const theme = useTheme();
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: `${theme.palette.primary.main}`,
    boxShadow: 24,
    p: 2,
  };

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
          <Box sx={style}>
            <Card sx={{ bgcolor: `${theme.palette.primary.main}` }}>
              <CardMedia
                component="img"
                sx={{ width: '100%' }}
                image={imageUrl}
                alt="Modal Cover"
              />
              <Box
                id="modal-content"
                sx={{
                  p: 2,
                  mt: 2,
                  color: 'white',
                  border: 'solid',
                  borderRadius: 0.5,
                  borderColor: `${theme.palette.secondary.main}`,
                }}
              >
                <Box id="modal-details">
                  <Box id="modal-header" sx={{ p: 1 }}>
                    <Typography id="modal-title" variant="h5" component="h2">
                      {title}
                    </Typography>
                    <Typography id="modal-date" sx={{ mt: 2 }}>
                      {date}
                    </Typography>
                  </Box>
                  <Divider
                    variant="middle"
                    sx={{ bgcolor: `${theme.palette.secondary.main}`, m: 2 }}
                  />
                  {type == 'event' && (
                    <Box id="event-embedded-details" sx={{ p: 0.5 }}>
                      {venueDetails && <Box id="venue-details" sx={{ mt: 1 }}>
                        <Stack direction="row">
                          <FestivalIcon />
                          <Box sx={{ ml: 3 }}>
                            {
                              venueDetails.map((venue) => (
                                <Box key={venue.id}>
                                  <Typography variant="subtitle1">{venue.name}</Typography>
                                  <Typography variant="subtitle2">
                                    {venue.city?.name ?? ''}, {venue.country?.name ?? ''}
                                  </Typography>
                                </Box>
                              ))}
                          </Box>
                        </Stack>
                      </Box>}
                     { attractionDetails && <Box id="attractions-details" sx={{ mt: 2 }}>
                        <Stack direction="row">
                          <AttractionsIcon />
                          <Box sx={{ ml: 3 }}>
                            {
                              attractionDetails.map((attraction) => (
                                <Box key={attraction.id}>
                                  <Typography variant="subtitle1">{attraction.name}</Typography>
                                </Box>
                              ))}
                          </Box>
                        </Stack>
                      </Box>}
                      {accessibilityDetails?.info && <Box id="accessibility-details" sx={{ mt: 2 , maxHeight: '90px',overflowY: 'overlay'}}>
                        <Stack direction="row">
                          <AccessibleIcon />
                          <Box sx={{ ml: 3 }}>
                            {
                              
                                <Box>
                                  <Typography variant='caption'><i>{accessibilityDetails.info }</i></Typography>
                                </Box>
                             }
                          </Box>
                        </Stack>
                      </Box>}
                    </Box>
                  )}
                  <Box></Box>
                </Box>
                <Box sx={{ mt: 1 }}>
                  <IconButton aria-label="details" onClick={() => onClose()}>
                    <CloseIcon sx={{ color: 'lightgrey' }} />
                  </IconButton>
                  <IconButton
                    aria-label="buy"
                    sx={{ float: 'right' }}
                    onClick={() => window.open(ticketUrl)}
                  >
                    <ConfirmationNumberIcon sx={{ color: 'lightgrey' }} />
                  </IconButton>
                </Box>
              </Box>
            </Card>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
