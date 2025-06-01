'use client';

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useState } from 'react';
import { RickType } from '@/utils/types';
import DisplayCharacter from '@/components/Displaycharacter';

const Character = () => {
const [character, setCharacter] = useState<RickType | null>(null);

  const fetchCharacter = async (): Promise<void> => {
    try {
      const randomNum: number = Math.floor(Math.random() * 19);
      const API_URL: string = "https://rickandmortyapi.com/api/character";
      const response: Response = await fetch(`${API_URL}/${randomNum}`);
      const data = await response.json();

        const characterData: RickType = {
        id: data.id,
        name: data.name,
        status:data.status,
        link: data.location.url,
        gender: data.gender,
        image: data.image,
        location: data.location.name
     
      };

      setCharacter(characterData);

     
    } catch (error) {
      console.log(`Something went wrong: ${error}`);
    }
  };
  return (
    <Box sx={{ padding: 4, textAlign: 'center', m:6 }}>
      <Typography variant="h4" gutterBottom>
        Rick and Morty Characters
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
        doloremque libero consequuntur quaerat obcaecati itaque quam nemo,
        minima neque modi doloribus quibusdam natus eligendi laudantium
        impedit. Veritatis illum facilis suscipit.
      </Typography>

      <Button variant="contained" color="primary" onClick={fetchCharacter}>
        
        Find more
      </Button>
      {character && <DisplayCharacter {...character} />}
    </Box>
  );
};

export default Character;