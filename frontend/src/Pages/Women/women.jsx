import React from 'react';
// import styles from "./women.module.css";
import Banner from '../../Components/Banner/banner';
import Navbar from '../../Components/Navbar/navbar';
import Navbar2 from '../../Components/Navbar2/navbar2';
import Womenmainphoto from '../../Components/womenmainphoto/womenmainphoto';
import Shoedisplay from '../../Components/ShoeDisplay/shoedisplay';
import Offers from '../../Components/NewOffers/offers';
import Confidence from '../../Components/Confidence/confidence';
import Footer from '../../Components/Footer/footer';
import Rights from '../../Components/Rights/rights';
import Shopbystyles from '../../Components/ShopByStyles/shopbystyles';
import Gamechangers from '../../Components/GameChangers/gamechangers';

const Women = () => {
  return (
    <div>
        <Banner />
        <Navbar />
        <Navbar2 />
        <Womenmainphoto />
        <Shoedisplay />
        <Offers />
        <Shopbystyles />
        <Gamechangers />
        <Confidence />
        <Footer />
        <Rights />
        
    </div>
  )
}

export default Women;