import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'red',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant="body1">
        © {new Date().getFullYear()} Rick & Morty App By Souad. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;