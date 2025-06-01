import { RickType } from "@/utils/types";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const DisplayCharacter = ({
  id,
  name,
  image,
  link,
  gender,
  status,
  location,
}: RickType) => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center", m: 3 }}>
        The craziest characters
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        <Card sx={{ width: 300, flex: "0 1 auto" }}>
          <CardActionArea>
            <CardMedia component="img" height="350" image={image} alt={name} />
            <CardContent sx={{padding:5, color: '#7D4D3B',}}>
              <Typography variant="body2" sx={{padding: 1}}>
                Status: {status}
              </Typography>
              <Typography variant="body2" sx={{padding: 1}} >
                ID: {id}
              </Typography>
              <Typography variant="body2" sx={{padding: 1}}>
                Name: {name}
              </Typography>
              <Typography variant="body2" sx={{padding: 1}}>
                Status: {status}
              </Typography>
              <Typography variant="body2" sx={{padding: 1}}>
                Gender: {gender}
              </Typography>
              <Typography variant="body2" sx={{padding: 1}}>
                From: {location}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
};

export default DisplayCharacter;
