import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import SongsTabPanel from "./SongsTabPanel";
import styles from "./Section.module.css";

const SongsTab = ({ genres, songs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (e, newValue) => {
    setActiveTab(newValue);
  };
  return (
    <Box clasName={styles.section}>
        
      <Tabs
        value={activeTab}
        onChange={handleChange}
        variant="scrollable"
        sx={{
          bgcolor: "#121212",
          "& .MuiTab-root": {
            color: "white",
            fontFamily: "Poppins, sans-serif",
          },
          "& .Mui-selected": {
            color: "white",
            borderBottom: "3px solid green",
            fontWeight: "bold",
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "transparent", // hide default indicator
            color: "white", // use custom color
          },
        }}
      >
        {genres.map((genre, index) => (
          <Tab key={genre.key} label={genre.label} />
        ))}
      </Tabs>
      {genres.map((genre, index) => {
        const filteredSongs =
          genre.key === "all"
            ? songs
            : songs.filter((song) => song.genre.key === genre.key);
        return (
          <SongsTabPanel
            key={genre.key}
            value={activeTab}
            index={index}
            data={filteredSongs}
          />
        );
      })}
    </Box>
  );
};

export default SongsTab;
