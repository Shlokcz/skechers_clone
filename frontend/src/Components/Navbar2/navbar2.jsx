import React from "react";
import styles from "./navbar2.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
// import DOMPurify from 'dompurify';
// import parse from 'html-react-parser';

const Navbar2 = ({cartItem}) => {
  const [show, setShow] = useState(false);
  const [menshow, setMenshow] = useState(false);
  const [kidsshow, setKidsShow] = useState(false);
  const [collectionsshow, setCollectionsshow] = useState(false);
  const [saleshow, setSaleshow] = useState(false);

  const handleWomenMouseEnter = () => {
    setShow(true);
  };

  const handleWomenMouseLeave = () => {
    setShow(false);
  };

  const handleMenMouseEnter = () => {
    setMenshow(true);
  };

  const handleMenMouseLeave = () => {
    setMenshow(false);
  };

  const handleKidsMouseEnter = () => {
    setKidsShow(true);
  };

  const handleKidsMouseLeave = () => {
    setKidsShow(false);
  };

  const handleCollectionsMouseEnter = () => {
    setCollectionsshow(true);
  };

  const handleCollectionsMouseLeave = () => {
    setCollectionsshow(false);
  };

  const handleSaleMouseEnter = () => {
    setSaleshow(true);
  };

  const handleSaleMouseLeave = () => {
    setSaleshow(false);
  };

  const DiffSections = [
    {
      heading: "Featured",
      li1: "New Arrivals",
      li2: "Automn Winter 24",
      li3: "PickleBall Store",
      li4: "Run Store",
      li5: "Walk store",
    },
    {
      heading: "Footwear",
      li1: "Running Shoes",
      li2: "Walking Shoes",
      li3: "Casual Sneakers",
      li4: "Slippers",
      li5: "Lace Up",
      li6: "Slides",
    },
    {
      heading: "Shop By Activity",
      li1: "Running",
      li2: "Walking",
      li3: "Trail Hiking",
      li4: "Pickle Ball",
    },
    {
      heading: "Shop By Collections",
      li1: "Arch Fit",
      li2: "Go Walk",
      li3: "Go Run",
      li4: "Skechers Street",
      li5: "Skech-AIR",
      li6: "Max Cushioning",
    },
    {
      heading: "Apparels",
      li1: "T-shirts",
      li2: "Tanks",
      li3: "Jackets",
      li4: "Tops",
      li5: "Cappries",
      li6: "Pants",
      li7: "leggings",
      li8: "Shorts",
    },
    {
      heading: "Accessories",
      li1: "Socks",
      li2: "Bags",
      li3: "Caps",
      li4: "Fittness equipment",
    },
    {
      heading: "Collaborations",
      li1: "Mohun Bagan",
      li2: "Mumbai Indians",
      li3: "RetroVerse",
      li4: "Gold Crown",
      li5: "Toki Doki",
      li6: "Rolling Shoes",
    },
  ];

  const KidsSection = [
    {
      heading: "Featured",
      li1: "New featured",
    },
    {
      heading: "Shop By Age",
      li1: "1.5 to 3.5 years",
      li2: "4 to 8 years",
      li3: "8 to 13 years",
    },
    {
      heading: "Shop By Gender",
      li1: "Boys",
      li2: "GIrls",
      li3: "Toddlers",
    },
    {
      heading: "Footwear",
      li1: "Athletic Sneakers",
      li2: "Casual Sneakers",
      li3: "Slippers",
      li4: "Slip-Ons",
      li5: "Lace-Ups",
    },
    {
      heading: "Shop By Collections",
      li1: "Foamies",
      li2: "SKECHERS Street",
      li3: "Twinkle Toes",
      li4: "GO RUN",
      li5: "SPORT",
      li6: "UNOs",
    },
  ];

  const CollectionSection = [
    {
      heading: "New Arrivals",
      li1: "Automn Winter 24",
      li2: "Walk Store",
      li3: "Run Store",
      li4: "Pickleball Store",
    },
    {
      heading: "Comfort technologies",
      li1: "Ultra Go",
      li2: "Slip-Ins",
      li3: "Arch Fit",
      li4: "Goga Mat",
      li5: "Hyper Burst",
      li6: "Luxe Foam",
      li7: "Max Cushioning",
      li8: "Relaxed Fit",
      li9: "Stretch Fit",
    },
    {
      heading: "Features",
      li1: "Goodyear Rubber",
      li2: "Breadthwable",
      li3: "Machine Washable",
      li4: "Recycled",
      li5: "Slip Resistant",
      li6: "Vegan",
      li7: "Water Repellant",
    },
    {
      heading: "Collections",
      li1: "BOBS",
      li2: "Cali",
      li3: "D'Lites",
      li4: "Foamies",
      li5: "GO RUN",
      li6: "GO WALK",
      li7: "UNOs",
      li8: "Trail Hiking",
      li9: "Court Classics",
    },
    {
      heading: "Accessories",
      li1: "Bags",
      li2: "Socks",
      li3: "Fitness Aquipments",
      li4: "Caps",
    },
    {
      heading: "Collaborations",
      li1: "Mohun Bagan",
      li2: "Mumbai Indians",
      li3: "RetroVerse",
      li4: "Goldcrown",
      li5: "Rolling Shoes",
    },
  ];

  const SaleSection = [
    {
      heading: "Women",
      li1: "Footwear",
      li2: "Apparels",
    },
    {
      heading: "Men",
      li1: "Footwear",
      li2: "Apparels",
    },
    {
      heading: "Girls",
      li1: "Footwear",
    },
    {
      heading: "Boys",
      li1: "Footwear",
    },
    {
      heading: "Clearance Sale",
      li1: "Footwear",
      li2: "Apparels",
    },
  ];

  const cartCount = localStorage.getItem("cartValue");

  const [openCart, setOpenCart] = useState(false);
  // console.log(cartItem);

  const handleClick = () => {
    setOpenCart(!openCart);
  }

  console.log(cartItem);

  // const sanitizedHTML = DOMPurify.sanitize(cartItem);

  return (
    <>
      <div className={styles.navbar2}>
        <img className={styles.logo} src="/images/logo.png" alt="error-404" />
        <div className={styles.category}>
          <ul>
            <li
              onMouseEnter={handleWomenMouseEnter}
              onMouseLeave={handleWomenMouseLeave}
            >
              <Link className={styles.link} to="/women">
                WOMEN
              </Link>
            </li>
            <li
              onMouseEnter={handleMenMouseEnter}
              onMouseLeave={handleMenMouseLeave}
            >
              <Link className={styles.link} to="/men">
                MEN
              </Link>
            </li>
            <li
              onMouseEnter={handleKidsMouseEnter}
              onMouseLeave={handleKidsMouseLeave}
            >
              <Link className={styles.link}>KIDS</Link>
            </li>
            <li
              onMouseEnter={handleCollectionsMouseEnter}
              onMouseLeave={handleCollectionsMouseLeave}
            >
              <Link className={styles.link}>COLLECTIONS</Link>
            </li>
            <li
              onMouseEnter={handleSaleMouseEnter}
              onMouseLeave={handleSaleMouseLeave}
            >
              <Link className={styles.link}>SALE</Link>
            </li>
          </ul>
        </div>

        {show && (
          <>
            <div className={styles.blurredBackground}></div>
            <div
              className={styles.hoveredMenu}
              onMouseEnter={handleWomenMouseEnter}
              onMouseLeave={handleWomenMouseLeave}
            >
              {DiffSections.map((item, index) => (
                <div key={index} className={styles.differentSections}>
                  <ul>
                    <div className={styles.headingDiv}>
                      <li className={styles.heading}>{item.heading}</li>
                    </div>
                    <li>{item.li1}</li>
                    <li>{item.li2}</li>
                    <li>{item.li3}</li>
                    <li>{item.li4}</li>
                    <li>{item.li5}</li>
                    <li>{item.li6}</li>
                    <li>{item.li7}</li>
                    <li>{item.li8}</li>
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}

        {menshow && (
          <>
            <div className={styles.blurredBackground}></div>
            <div
              className={styles.hoveredMenu}
              onMouseEnter={handleMenMouseEnter}
              onMouseLeave={handleMenMouseLeave}
            >
              {DiffSections.map((item, index) => (
                <div key={index} className={styles.differentSections}>
                  <ul>
                    <div className={styles.headingDiv}>
                      <li className={styles.heading}>{item.heading}</li>
                    </div>
                    <li>{item.li1}</li>
                    <li>{item.li2}</li>
                    <li>{item.li3}</li>
                    <li>{item.li4}</li>
                    <li>{item.li5}</li>
                    <li>{item.li6}</li>
                    <li>{item.li7}</li>
                    <li>{item.li8}</li>
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}

        {kidsshow && (
          <>
            <div className={styles.blurredBackground}></div>
            <div
              className={styles.hoveredMenu}
              onMouseEnter={handleKidsMouseEnter}
              onMouseLeave={handleKidsMouseLeave}
            >
              {KidsSection.map((item, index) => (
                <div key={index} className={styles.differentSections}>
                  <ul>
                    <div className={styles.headingDiv}>
                      <li className={styles.heading}>{item.heading}</li>
                    </div>
                    <li>{item.li1}</li>
                    <li>{item.li2}</li>
                    <li>{item.li3}</li>
                    <li>{item.li4}</li>
                    <li>{item.li5}</li>
                    <li>{item.li6}</li>
                    <li>{item.li7}</li>
                    <li>{item.li8}</li>
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}

        {collectionsshow && (
          <>
            <div className={styles.blurredBackground}></div>
            <div
              className={styles.hoveredMenu}
              onMouseEnter={handleCollectionsMouseEnter}
              onMouseLeave={handleCollectionsMouseLeave}
            >
              {CollectionSection.map((item, index) => (
                <div key={index} className={styles.differentSections}>
                  <ul>
                    <div className={styles.headingDiv}>
                      <li className={styles.heading}>{item.heading}</li>
                    </div>
                    <li>{item.li1}</li>
                    <li>{item.li2}</li>
                    <li>{item.li3}</li>
                    <li>{item.li4}</li>
                    <li>{item.li5}</li>
                    <li>{item.li6}</li>
                    <li>{item.li7}</li>
                    <li>{item.li8}</li>
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}

        {saleshow && (
          <>
            <div className={styles.blurredBackground}></div>
            <div
              className={styles.hoveredMenu}
              onMouseEnter={handleSaleMouseEnter}
              onMouseLeave={handleSaleMouseLeave}
            >
              {SaleSection.map((item, index) => (
                <div key={index} className={styles.differentSections}>
                  <ul>
                    <div className={styles.headingDiv}>
                      <li className={styles.heading}>{item.heading}</li>
                    </div>
                    <li>{item.li1}</li>
                    <li>{item.li2}</li>
                    <li>{item.li3}</li>
                    <li>{item.li4}</li>
                    <li>{item.li5}</li>
                    <li>{item.li6}</li>
                    <li>{item.li7}</li>
                    <li>{item.li8}</li>
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}

        <div className={styles.cartImg}>
          <input type="text" placeholder="Search" />
          <img src="/images/cart.png" alt="error-404" onClick={handleClick}/>
          <p>{cartCount ? cartCount : 0}</p>
          {/* {openCart ? parse(cartItem) : <p>No items in the cart</p>} */}
        </div>
      </div>
    </>
  );
};

export default Navbar2;
