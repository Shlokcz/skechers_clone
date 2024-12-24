import React from "react";
import styles from "./menoffers.module.css";

const Menoffers = () => {
  return (
    <div className={styles.menOffers}>
      <div className={styles.line}></div>
      <p>New Offers</p>
      <img src="/images/menoffers.jpg" alt="error-404" />
    </div>
  );
};

export default Menoffers;
