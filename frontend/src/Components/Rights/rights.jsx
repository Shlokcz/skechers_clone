import React from 'react';
import styles from "./rights.module.css";

const Rights = () => {

    const currYear = new Date();
    const prevYear = new Date();

  return (
    <div className={styles.rights}>
        <p>© {currYear.getFullYear()-4} - {prevYear.getFullYear()-3} Skechers India. All Rights Reserved. </p>
    </div>
  )
}

export default Rights;