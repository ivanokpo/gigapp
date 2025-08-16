import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import InfoIcon from '@mui/icons-material/Info';
type SearchResultItemPropsType = {
    title: string;
    date: string;
    url: string;
    onClick: () => void;
    ticketUrl: string;
}

export const SearchResultItem = (props: SearchResultItemPropsType ) => {
    const {title, date, url, onClick, ticketUrl} = props;

  return (
   
    <Card sx={{p: 1, display: 'flex', backgroundColor: '#363636'}}>
        <CardMedia
        component="img"
        sx={{ width: "20%"}}
        image={url}
        alt="Item Cover"
      />
         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                    {title}
                </Typography>
                <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ color: 'text.secondary' }}
                >
                    {date}
                </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'start', pl: 1, pb: 1 }}>
                <IconButton aria-label="details" onClick={() => onClick()}>
                    <InfoIcon sx={{color: 'lightgrey'}}/>
                </IconButton>
                <IconButton aria-label="buy" onClick={()=> window.open(ticketUrl)}>
                    <ConfirmationNumberIcon sx={{color: 'lightgrey'}}/>
                </IconButton>
            </Box>
        </Box>
    </Card>
  )
}
