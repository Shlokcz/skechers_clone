import React from 'react';
import styles from "./hot.module.css";
import Variety from '../Variety/variety';

const Hot = () => {
  return (
    <div className={styles.hot}>
        {/* <div className={styles.line}></div> */}
        <p>What's Hot</p>
        <Variety />
    </div>
  )
}

export default Hot;