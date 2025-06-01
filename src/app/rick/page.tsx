'use client';
import { useState, useEffect } from "react";

type RickType = {
  id: number;
  name: string;
  image: string;
};

const Rick = () => {
const [characters, setCharacters] = useState<RickType[]>([]);

  const fetchRick = async (): Promise<void> => {
    try {
      const API_URL: string = "https://rickandmortyapi.com/api/character";
      const response: Response = await fetch(API_URL);
      const data = await response.json();
      setCharacters(data.results); // Set the characters to state
    } catch (error) {
      console.log(`Something went wrong: ${error}`);
    }
  };

  useEffect(() => {
    fetchRick(); // Call it when component mounts
  }, []);

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <ul>
        {characters.map((char) => (
          <li key={char.id}>
            {char.name}
            <br />
            <img src={char.image} alt={char.name} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rick;
