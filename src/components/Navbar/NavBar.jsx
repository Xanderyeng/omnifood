import React from "react";
import logo from "../../assets/omnifood-logo.png";
import classes from "./navbar.module.css";

const NavBar = () => {
  return (
      <header className={classes.header}>
        <a href='#'>
          <img src={logo} alt='Omnifood Logo' className={classes.logo} />
        </a>

        <nav className={classes.main_nav}>
          <ul className={classes.main_nav_list}>
            <li><a href='#how' className={classes.main_nav_link}>How it works</a></li>
            <li><a href='#meals' className={classes.main_nav_link}>Meals</a></li>
            <li><a href='#testimonials' className={classes.main_nav_link}>Testimonials</a></li>
            <li><a href='#cta' className={`${classes.main_nav_link} ${classes.nav_cta}`}>Try for free</a></li>
          </ul>
        </nav>
      </header>
  );
};

export default NavBar;
