import React from "react";
import styles from "./confidence.module.css";

const cards = [
  {
    src: "/images/store.png",
    title: "OFFICIAL BRAND STORE",
    p: "The largest selection of 100% official skechers products in India.",
  },
  {
    src: "/images/delivery.png",
    title: "SHOP AT YOUR CONVENIENCE",
    p: "Free Home delivery within 10 working days.*",
  },
  {
    src: "/images/shopping.png",
    title: "SAFE SHOPPING",
    p: "Secure socket layer (SSL) encryption makes every payment safe.",
  },
  {
    src: "/images/return.png",
    title: "EASY RETURN POLICY",
    p: "Easy and hassle free return of products.*",
  },
];

const Confidence = () => {
  return (
    <div className={styles.confidence}>
      <h2>SHOP WITH CONFIDENCE AT SKECHERS ONLINE STORE</h2>
      <div className={styles.cards}>
        {cards.map((item, index) => (
          <div key={index} className={styles.card}>
            <h4>{item.title}</h4>
            <p>{item.p}</p>
            <img src={item.src} alt="error-404" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Confidence;
