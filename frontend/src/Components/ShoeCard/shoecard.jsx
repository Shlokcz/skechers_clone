import React, { useEffect, useState } from "react";
import styles from "./shoecard.module.css";

// const shoecard = [
//     {
//         gender: "Women",
//         title: "UNO COURT - COURTED STYLE",
//         price: "MRP ₹7,499.00",
//         src: "/images/shoe1.jpg"
//     },
//     {
//         gender: "Women",
//         title: "UNO COURT - FAST BREAK",
//         price: "MRP ₹6,999.00",
//         src: "/images/shoe2.jpg"
//     },
//     {
//         gender: "Men",
//         title: "UNO COURT - LOW POST",
//         price: "MRP ₹7,999.00",
//         src: "/images/shoe3.jpg"
//     },
//     {
//         gender: "Men",
//         title: "TRES-AIR UNO - VISION-AIRY SLIP-INS",
//         price: "MRP ₹8,499.00",
//         src: "/images/shoe4.jpg"
//     },
// ]

const Shoecard = ({cartCountt, setCartCountt, setCartItemm}) => {
  const [shoecard, setShoecard] = useState([]);
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const response = await fetch("http://localhost:5000/");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setShoecard(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching shoe data:", error);
        setLoading(false);
      }
    };

    fetchShoes();
  }, []); // Empty dependency array means this runs once when the component mounts

  // Render logic
  if (loading) {
    return <p>Loading...</p>;
  } 

  const shoeDisplay = shoecard.slice(0,4);
  // const shoeDisplay = shoecard
  // .filter(item => item.gender && item.gender.toLowerCase().includes("women"))
  // .slice(0, 4);

  const addtocart = (e) => {
    
    
    // console.log(e.target.parentElement.parentElement);
    setCartItemm(e.target.parentElement.parentElement);
    setCartCountt(cartCountt+1)
    localStorage.setItem("cartValue", JSON.stringify(cartCountt+1));
  }

  return (
    <div className={styles.shoecards}>
      {shoeDisplay.map((item, index) => (
        <div key={index} className={styles.shoecard}>
          <div className={styles.new}>
            <button>New</button>
            <img src="/images/wishlist.png" alt="error-404" />
          </div>
          <div className={styles.shoeImg}>
            <img src={item.src} alt="error-404" />
          </div>
          <div className={styles.addtocart}>
            <p>{item.gender}</p>
            <img src="/images/plus.png" alt="error-404" onClick={addtocart}/>
          </div>
          <div className={styles.titleandprice}>
            <h6>{item.title}</h6>
            <p>{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shoecard;
