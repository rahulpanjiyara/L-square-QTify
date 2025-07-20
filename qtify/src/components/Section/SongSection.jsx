import React, { useEffect, useState } from "react";
import axios from "axios";
import SongsTab from "./SongsTab";
import { Box } from "@mui/material";
import styles from "./Section.module.css";


function SongsSection() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function fetchSongsAndGenres() {
      const songsRes = await axios.get("https://qtify-backend-labs.crio.do/songs");
      const genresRes = await axios.get("https://qtify-backend-labs.crio.do/genres");

      setSongs(songsRes.data);
      setGenres([{ key: "all", label: "All" }, ...genresRes.data.data]);
    }

    fetchSongsAndGenres();
  }, []);

  return (
    <Box className={styles.section}>
      <h2>Songs</h2>
    
  <SongsTab genres={genres} songs={songs} />
  </Box>
);
}

export default SongsSection;
