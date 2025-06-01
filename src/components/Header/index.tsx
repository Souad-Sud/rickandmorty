"use client";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <header>
      <Typography  variant="h1" component="h1" sx={{ textAlign: "center", fontSize: "2.5rem", padding: "16px", fontFamily: 'Poppins'}} >
       Rick and Morty API
      </Typography>
    </header>
  );
};

export default Header;
