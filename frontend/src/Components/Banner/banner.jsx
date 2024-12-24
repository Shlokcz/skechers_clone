import React, { useState } from "react";
import styles from "./banner.module.css";

const Banner = () => {
  const [value, setValue] = useState(true);
  setTimeout(() => {
    setValue(!value);
  }, 4000);

  return (
    <div className={styles.banner}>
      <img src="/images/leftarrow.png" alt="error-404" />
      {value ? (
        <p>
          Buy <span>Apparel</span> for ₹2499 or more* and Get Bags for ₹699!{" "}
          <span>T&C Apply</span>
        </p>
      ) : (
        <p>
          Early Access Black Friday Event! 30% OFF* Select Footwear - Code:
          EARLY30 <span>SHOP NOW</span> <span>*T&C APPLY</span>
        </p>
      )}

      <img src="/images/rightarrow.png" alt="error-404" />
    </div>
  );
};

export default Banner;
