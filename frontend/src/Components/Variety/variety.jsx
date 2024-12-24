import React from "react";
import styles from "./variety.module.css";

const variety = [
  {
    src: "/images/sandals.jpg",
    name: "Sandals",
  },
  {
    src: "/images/slipons.jpg",
    name: "Slipons",
  },
  {
    src: "/images/apparels.jpg",
    name: "Apparels",
  },
];

const Variety = () => {
  return (
    <div className={styles.cards}>
      {variety.map((item, index) => (
        <div key={index} className={styles.card}>
          <img src={item.src} alt="error-404" />
          <p>{item.name}>></p>
        </div>
      ))}
    </div>
  );
};

export default Variety;
