import React from "react";
import styles from "./mengamechangers.module.css";

const shoetype = [
  {
    src: "/images/basketball.jpg",
    title: "BASKETBALL>>",
  },
  {
    src: "/images/menpickleball.jpg",
    title: "PICKLEBALL>>>>",
  },
  {
    src: "/images/mengorun.jpg",
    title: "GO RUN>>",
  },
];

const Mengamechangers = () => {
  return (
    <div className={styles.game}>
      <div className={styles.line}></div>
      <p>Built for Game Changers: Play Your Way!</p>
      <div className={styles.shoeType}>
        {shoetype.map((item, index) => (
          <div key={index} className={styles.shoeCard}>
            <img src={item.src} alt="error-404" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mengamechangers;
