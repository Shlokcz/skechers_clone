import React from "react";
import styles from "./gamechangers.module.css";

const shoetype = [
  {
    src: "/images/gowalk.jpg",
    title: "GO WALK>>",
  },
  {
    src: "/images/pickleball.jpg",
    title: "PICKLEBALL>>>>",
  },
  {
    src: "/images/gorun.jpg",
    title: "GO RUN>>",
  },
];

const Gamechangers = () => {
  return (
    <div className={styles.game}>
      <div className={styles.line}></div>
      <p>Built for Game Changers: Play Your Way!</p>
      <div className={styles.shoeType}>
        {shoetype.map((item, index) => (
          <div className={styles.shoeCard}>
            <img src={item.src} alt="error-404" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gamechangers;
