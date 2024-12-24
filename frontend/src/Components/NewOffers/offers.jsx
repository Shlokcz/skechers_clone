import React from 'react';
import styles from "./offers.module.css";

const Offers = () => {
  return (
    <div className={styles.offers}>
        <div className={styles.line}></div>
        <p>New Offers</p>
        <img src="/images/blackfriday.png" alt="error-404" />
    </div>
  )
}

export default Offers;