"use client";
import { RickType } from "@/utils/types";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  Box,
} from "@mui/material";

const Rick = () => {
  const [ricks, setRicks] = useState<RickType[]>([]);

  useEffect(() => {
    const fetchRick = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        setRicks(data.results);
      } catch (error) {
        console.error("Something went wrong:", error);
      }
    };

    fetchRick();
  }, []);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center", m: 5 }}>
        Rick and Morty Characters
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {ricks.map((char) => (
          <Card key={char.id} sx={{ width: 300, flex: "0 1 auto" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={char.image}
                alt={char.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {char.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Character from Rick and Morty series.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link href="/character" passHref>
                <Button size="small" color="primary">
                  Character
                </Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Rick;
