import React from "react";
import {IonIcon} from "@ionic/react";
import {logoInstagram, logoFacebook, logoTwitter} from 'ionicons/icons'
import logo from "../../assets/omnifood-logo.png"
import classes from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={classes.footer} >
      <div className={`container grid ${classes.grid__footer}`}>
        <div className={classes.logo_col}>
          {" "}
          <a href='#' className={classes.footer_logo}>
            <img
              src={logo}
              alt='Omnifood Logo'
              className='logo'
            />
          </a>
          <ul className={classes.social_links}>
            <li>
              <a className={classes.footer_link} href='#'>
              <IonIcon icon={logoInstagram} className={classes.social_icon} />
              </a>
            </li>
            <li>
              <a className={classes.footer_link} href='#'>
              <IonIcon icon={logoFacebook} className={classes.social_icon} />
                
              </a>
            </li>
            <li>
              <a className={classes.footer_link} href='#'>
              <IonIcon icon={logoTwitter} className={classes.social_icon} />
                
              </a>
            </li>
          </ul>
          <p className={classes.copyright}>
            Copyright &copy; 2022 by Chepkiyeng, Alexander. All rights reserved.
          </p>
        </div>
        <div className={classes.address_col}>
          <p className={classes.footer_heading}>Contact us</p>
          <address className={classes.contacts}>
            <p className={classes.address}>
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a className={classes.footer_link} href='tel:415-201-6370'>
                415-201-6370
              </a>
              {/* <br> */}
                <a className={classes.footer_link} href='mailto:hello@omnifood.com'>
                  hello@omnifood.com
                </a>
              {/* </br> */}
            </p>
          </address>
        </div>
        <nav className={classes.nav_col}>
          <p className={classes.footer_heading}>Account</p>

          <ul className={classes.footer_nav}>
            <li>
              <a className={classes.footer_link} href='#'>
                Create account
              </a>
            </li>
            <li>
              <a className={classes.footer_link} href='#'>
                Sign in
              </a>
            </li>
            <li>
              <a className={classes.footer_link} href='#'>
                iOS app
              </a>
            </li>
            <li>
              <a className={classes.footer_link} href='#'>
                Android app
              </a>
            </li>
          </ul>
        </nav>
        <nav className={classes.nav_col}>
          <p className={classes.footer_heading}>Company</p>
          <ul className={classes.footer_nav}>
            <li>
              <a className={classes.footer_link} href='#'>
                About Omnifood
              </a>
            </li>
            <li>
              <a className={classes.footer_link} href='#'>
                For Business
              </a>
            </li>
            <li>
              <a className={classes.footer_link} href='#'>
                Cooking partners
              </a>
            </li>
            <li>
              <a className={classes.footer_link} href='#'>
                Careers
              </a>
            </li>
          </ul>
        </nav>

        <nav className={classes.nav_col}>
          <p className={classes.footer_heading}>Resources</p>
          <ul className={classes.footer_nav}>
            <li>
              <a className={classes.footer_link} href='#'>
                Recipe directory
              </a>
            </li>
            <li>
              <a className={classes.footer_link} href='#'>
                Help center
              </a>
            </li>
            <li>
              <a className={classes.footer_link} href='#'>
                Privacy & terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
