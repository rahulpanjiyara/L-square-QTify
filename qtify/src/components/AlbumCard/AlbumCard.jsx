import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Box,
} from "@mui/material";
import styles from "./AlbumCard.module.css";

function AlbumCard({ album }) {
  return (
    <Box>
      <Card
        sx={{ width: 160, borderRadius: 2, boxShadow: 3, cursor: "pointer" }}
      >
        <CardMedia
          component="img"
          height="160"
          image={album.image}
          alt={album.title}
        />
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Chip
              label={`${album.follows ?? 0} Follows`}
              variant="outlined"
              className={styles.chip}
            />
          </Box>
        </CardContent>
      </Card>
      <Typography
        variant="body2"
        sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
      >
        {album.title}
      </Typography>
    </Box>
  );
}

export default AlbumCard;
