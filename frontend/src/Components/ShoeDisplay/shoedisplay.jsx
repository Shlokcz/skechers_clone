import React from 'react';
import styles from "./shoedisplay.module.css";
import Shoecard from '../ShoeCard/shoecard';

const Shoedisplay = ({cartCount, setCartCount , setCartItem}) => {
  return (
    <div className={styles.shoedisplay}>
        <Shoecard cartCountt={cartCount} setCartCountt={setCartCount} setCartItemm={setCartItem}/>
    </div>
  )
}

export default Shoedisplay;