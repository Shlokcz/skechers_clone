import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerImg}>
        <img src="/images/logo.png" alt="error-404" />
      </div>
      <div className={styles.footerComps}>
        <div className={styles.comp1}>
          <div>
            <h2>About Skechers</h2>
            <p>Corporate Info</p>
            <p>Corporate Governance</p>
          </div>
          <div>
            <h2>Customer Service</h2>
            <p>Return Policy</p>
            <p>Product Information</p>
            <p>Contact Us</p>
            <p>Site Map</p>
          </div>
          <div>
            <h2>My Account</h2>
            <p>Order Status</p>
            <p>Saved Products</p>
            <p>My Returns</p>
          </div>
          <div>
            <h2>Others</h2>
            <p>FAQ</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Find A Store</p>
          </div>
        </div>
        <div className={styles.comp2}>
          <h6>Follow us</h6>
          <div className={styles.socials}>
            <img src="/images/facebook.png" alt="error-404" />
            <img src="/images/twitter.png" alt="error-404" />
            <img src="/images/social.png" alt="error-404" />
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default Footer;
