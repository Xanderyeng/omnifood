import React from "react";
import classes from "./hero.module.css";
// import '../../css/queries.css'
import customer_1 from "../../assets/customers/customer-1.jpg";
import customer_2 from "../../assets/customers/customer-2.jpg";
import customer_3 from "../../assets/customers/customer-3.jpg";
import customer_4 from "../../assets/customers/customer-4.jpg";
import customer_5 from "../../assets/customers/customer-5.jpg";
import customer_6 from "../../assets/customers/customer-6.jpg";
import hero from "../../assets/hero.png"

const Hero = () => {
  return (
    <section className={classes.section_hero}>
      <div className={classes.hero}>
        <div className={classes.hero_text_box}>
          <h1 className="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className={classes.hero_description}>
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs. We have delivered 250,000+ meals last year!
          </p>

          <a href='#cta' className='btn btn--full margin-right-sm'>
            Start eating well
          </a>
          <a href='#how' className='btn btn--cta'>
            Learn more &darr;
          </a>
           {/*  HERO SECTION CUSTOMER MINI IMAGES */}
      
        <div className={classes.delivered_meals}>
          <div className={classes.delivered_imgs}>
            <img src={customer_1} alt='Customer photo' />
            <img src={customer_2} alt='Customer photo' />
            <img src={customer_3} alt='Customer photo' />
            <img src={customer_4} alt='Customer photo' />
            <img src={customer_5} alt='Customer photo' />
            <img src={customer_6} alt='Customer photo' />
            {/* <img src={customer_1} alt='Customer photo' /> */}
          </div>
          <p className={classes.delivered_text}>
            <span>250,000+</span> meals delivered last year!
          </p>
        </div>
        </div>
       
          {/*  HERO SECTION MAIN IMAGE */}
          <div className={classes.hero_img_box}>
          <img
            src={hero}
            className={classes.hero_img}
            alt='woman enjoying food, meals in storage container and food bowls on a table'
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
