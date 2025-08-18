import { Box, Typography, Button, alpha } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { theme } from '../theme';

export const Homepage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 2,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Typography variant="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
        Gigli
      </Typography>

      <Button
        variant="contained"
        size="large"
        sx={{ mt: 3, bgcolor: `${alpha(theme.palette.primary.main, 0.5)}` }}
        onClick={() => navigate('/events')}
      >
        <Typography variant="h5">Find your next memory</Typography>
      </Button>
    </Box>
  );
};
