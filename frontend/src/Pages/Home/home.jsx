import React from 'react';
import Banner from '../../Components/Banner/banner';
import Navbar from '../../Components/Navbar/navbar';
import Navbar2 from '../../Components/Navbar2/navbar2';
import Mainphoto from "../../Components/Mainphoto/mainphoto";
import Shoedisplay from '../../Components/ShoeDisplay/shoedisplay';
import Offers from '../../Components/NewOffers/offers';
import Hot from '../../Components/Whats Hot/hot';
import Confidence from '../../Components/Confidence/confidence';
import Footer from '../../Components/Footer/footer';
import Rights from '../../Components/Rights/rights';

const Home = () => {
  return (
    <div>
        <Banner />
        <Navbar />
        <Navbar2 />
        <Mainphoto />
        <Shoedisplay />
        <Offers />
        <Hot />
        <Confidence />
        <Footer />
        <Rights />
    </div>
  )
}

export default Home;