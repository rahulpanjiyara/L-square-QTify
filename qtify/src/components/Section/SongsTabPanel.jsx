import React from "react";
import Carousel from "../Carousel/Carousel";
import SongCard from "../SongCard/SongCard"; // build it like AlbumCard
import styles from "./Section.module.css";


function SongsTabPanel({ value, index, data }) {
  if (value !== index) return null;

  return (
    <div className={styles.section}>
      <Carousel
        data={data}
        renderItem={(song) => <SongCard song={song} />}
      />
    </div>
  );
}

export default SongsTabPanel;
