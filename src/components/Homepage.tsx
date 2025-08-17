import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
        Gigli
      </Typography>
      <Typography variant="h5" gutterBottom>
        Find your next memory here
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ mt: 3 }}
        onClick={() => navigate("/events")}
      >
        Search Events
      </Button>
    </Box>
  );
}
