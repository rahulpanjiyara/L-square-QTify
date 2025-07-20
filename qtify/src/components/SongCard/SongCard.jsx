import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Box,
} from "@mui/material";

function SongCard({ song }) {
  return (
    <Box>
      <Card
        sx={{
          width: 160,
          borderRadius: 2,
          boxShadow: 3,
          cursor: "pointer",
        }}
      >
        <CardMedia
          component="img"
          height="160"
          image={song.image}
          alt={song.title}
        />
        <CardContent sx={{ p: 1, display: "flex", justifyContent: "center" }}>
          <Chip
            label={`${song.likes ?? 0} Likes`}
            variant="outlined"
            size="small"
          />
        </CardContent>
      </Card>

      <Typography
        variant="body2"
        sx={{
          mt: 1,
          fontFamily: "Poppins, sans-serif",
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        {song.title}
      </Typography>
    </Box>
  );
}

export default SongCard;
