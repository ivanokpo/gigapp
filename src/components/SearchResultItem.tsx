import {
  alpha,
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Snackbar,
  Typography,
  useTheme,
} from '@mui/material';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import InfoIcon from '@mui/icons-material/Info';


import { Alert } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const urlRedirectAlerts = {
  
  failedSearch: (
  <Alert icon={<CloseIcon fontSize="inherit"/>} severity='error'>
    Ticket URL invalid
  </Alert>)
}

type SearchResultItemPropsType = {
  title: string;
  date: string;
  url: string;
  onClick: () => void;
  ticketUrl: string | undefined;
};

export const SearchResultItem = (props: SearchResultItemPropsType) => {
  const { title, date, url, onClick, ticketUrl } = props;
  const [showSnackbar, setShowSnackbar] = useState(false);
    
  
  const theme = useTheme();

  return (
    <Card
      sx={{ p: 1, display: 'flex', backgroundColor: `${alpha(theme.palette.primary.main, 0.5)}` }}
    >
      <CardMedia component="img" sx={{ width: '20%' }} image={url} alt="Item Cover" />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" component="div" sx={{ color: 'text.secondary' }}>
            {date}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'start', pl: 1, pb: 1 }}>
          <IconButton aria-label="details" onClick={() => onClick()}>
            <InfoIcon sx={{ color: 'lightgrey' }} />
          </IconButton>
          <IconButton aria-label="buy" onClick={() => {
            if(ticketUrl == undefined){
              setShowSnackbar(true)
            } else {
              window.open(ticketUrl)
            }
            }}>
            <ConfirmationNumberIcon sx={{ color: 'lightgrey' }} />
          </IconButton>
        </Box>
      </Box>
      <Snackbar 
              open={showSnackbar} 
              autoHideDuration={4000} 
              onClose={() => setShowSnackbar(false)} 
              anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
            >
             {urlRedirectAlerts.failedSearch} 
            </Snackbar>
    </Card>
  );
};
