import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

const auth = localStorage.getItem("user");
const fullData = JSON.parse(auth);
// const email = fullData.email;

// console.log(email.split("@")[0])

const Navbar = () => {

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className={styles.navbar}>
      <ul>
        <div>
          <img src="/images/login2.png" alt="error-404" />
          {auth ? (
            <li>
              {fullData.email.split("@")[0]}
              <Link className={styles.link} onClick={handleLogout}>
                | logout
              </Link>
            </li>
          ) : (
            <li>
              <Link className={styles.link} to="/login">
                login
              </Link>
            </li>
          )}
        </div>
        {!auth && (
          <div>
            <img src="/images/login2.png" alt="error-404" />
            <Link className={styles.link} to="/signup">
              Sign up
            </Link>
          </div>
        )}

        <div>
          <img src="/images/user.png" alt="error-404" />
          <li>
            <Link className={styles.link}>My Account</Link>
          </li>
        </div>
        <div>
          <img src="/images/track.png" alt="error-404" />
          <li>
            <Link className={styles.link}>Track Order</Link>
          </li>
        </div>
        <div>
          <img src="/images/location.png" alt="error-404" />
          <li>
            <Link className={styles.link}>Stores</Link>
          </li>
        </div>
        <div>
          <img src="/images/help.png" alt="error-404" />
          <li>
            <Link className={styles.link}>Help</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
