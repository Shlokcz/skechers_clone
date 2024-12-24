import React, { useState, useEffect } from "react";
import Banner from "../../Components/Banner/banner";
import Navbar from "../../Components/Navbar/navbar";
import Navbar2 from "../../Components/Navbar2/navbar2";
import Menmainphoto from "../../Components/menmainphoto/menmainphoto";
import Shoedisplay from "../../Components/ShoeDisplay/shoedisplay";
import Menoffers from "../../Components/MenOffers/menoffers";
import Footer from "../../Components/Footer/footer";
import Rights from "../../Components/Rights/rights";
import Confidence from "../../Components/Confidence/confidence";
import Mengamechangers from "../../Components/Mengamechangers/mengamechangers";

const Men = () => {
  // const [cartCount, setCartCount] = useState(0);

  // console.log(cartCount);

  // Initialize state with value from localStorage or default to 0
  const [cartCount, setCartCount] = useState(() => {
    const savedCartValue = localStorage.getItem("cartValue");
    return savedCartValue ? JSON.parse(savedCartValue) : 0;
  });
  // console.log(cartCount);

  // Sync cartValue to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartValue", JSON.stringify(cartCount));
  }, [cartCount]);

  const [cartItem, setCartItem] = useState("");
  // console.log(cartItem);

  return (
    <div>
      <Banner />
      <Navbar />
      <Navbar2 cartItem={cartItem}/>
      <Menmainphoto />
      <Shoedisplay cartCount={cartCount} setCartCount={setCartCount} setCartItem={setCartItem} />
      <Menoffers />

      <Mengamechangers />
      <Confidence />
      <Footer />
      <Rights />
    </div>
  );
};

export default Men;
