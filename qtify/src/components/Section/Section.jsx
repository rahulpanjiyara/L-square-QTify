import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Section.module.css";
import Button from "../Button/Button";

function Section({ title, fetchUrl, renderCard }) {
  const [data, setData] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(fetchUrl);
        setData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [fetchUrl]);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <Button onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? "Expand" : "Collapse"}
        </Button>
      </div>
      {!collapsed && (
        <div className={styles.grid}>
          {data.map((item) => renderCard(item))}
        </div>
      )}
      
    </div>
  );
}

export default Section;