import React from "react";
import { useState, useEffect } from "react";
// import {IonIcon} from "@ionic/react";
import { Sling as Hamburger } from "hamburger-react";
// import {menuOutline,closeOutline} from 'ionicons/icons'
import logo from "../../assets/omnifood-logo.png";
import classes from "./navbar.module.css";
// import '../../css/queries.css'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // const sectionHeroEl = document.querySelector(".section-hero");

  const obs = new IntersectionObserver(function (entries) {
    const ent = entries[0];
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (ent.isIntersecting === false) {
          document.body.classList.add("sticky");
        } else 
        if (ent.isIntersecting === true){
          document.body.classList.remove("sticky");
        }
      });
    });
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  });

  // obs.observe(sectionHeroEl);

  return (
    <header className={classes.header}>
      <a href='#'>
        <img src={logo} alt='Omnifood Logo' className={classes.logo} />
      </a>

      <nav
        className={`${isOpen ? classes.open : classes.close} ${
          classes.main_nav
        }`}
      >
        <ul className={classes.main_nav_list}>
          <li>
            <a href='#how' className={classes.main_nav_link}>
              How it works
            </a>
          </li>
          <li>
            <a href='#meals' className={classes.main_nav_link}>
              Meals
            </a>
          </li>
          <li>
            <a href='#testimonials' className={classes.main_nav_link}>
              Testimonials
            </a>
          </li>
          <li>
            <a href='#pricing' className={classes.main_nav_link}>
              Pricing
            </a>
          </li>
          <li>
            <a
              href='#cta'
              className={`${classes.main_nav_link} ${classes.nav_cta}`}
            >
              Try for free
            </a>
          </li>
        </ul>
      </nav>
      {/* <section className={`${isOpen ? classes.open : classes.close}`}> */}
      <Hamburger
        duration={0.3}
        toggled={isOpen}
        toggle={setIsOpen}
        easing='ease-in'
      />
      {/* <nav className={open ? "open" : null}> */}

      {/* <button className={classes.btn_mobile_nav} onClick={toggle}>
            <IonIcon className={classes.icon_mobile_nav} icon={menuOutline} name="menu-outline" id="open"/>
            <IonIcon className={classes.icon_mobile_nav_close} icon={closeOutline} />
        </button> */}
    </header>
  );
};

export default NavBar;
