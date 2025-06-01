'use client';

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const AboutPage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          About Us
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Learn more about our mission and the team behind this project.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="body1" paragraph>
          This project was built using the Rick and Morty API to explore characters from the popular animated series.
          We use modern web technologies such as Next.js and Material UI to create a fast and beautiful experience.
        </Typography>
        <Typography variant="body1" paragraph>
          Our goal is to showcase reusable UI components, data fetching, and clean React architecture using real-world APIs.
        </Typography>
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <Button variant="contained" color="primary" href="/">
          Back to Home
        </Button>
      </Box>
    </Container>
  );
};

export default AboutPage;