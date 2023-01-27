import React from "react";
import ben from "../../assets/customers/ben.jpg";
import dave from "../../assets/customers/dave.jpg";
import steve from "../../assets/customers/steve.jpg";
import hannah from "../../assets/customers/hannah.jpg";
import classes from "./testimonials.module.css";
import gallery_1 from "../../assets/gallery/gallery-1.jpg";
import gallery_17 from "../../assets/gallery/gallery-17.jpg";
import gallery_3 from "../../assets/gallery/gallery-3.jpg";
import gallery_4 from "../../assets/gallery/gallery-4.jpg";
import gallery_5 from "../../assets/gallery/gallery-5.jpg";
import gallery_6 from "../../assets/gallery/gallery-6.jpg";
import gallery_7 from "../../assets/gallery/gallery-7.jpg";
import gallery_8 from "../../assets/gallery/gallery-8.jpg";
import gallery_9 from "../../assets/gallery/gallery-9.jpg";
import gallery_10 from "../../assets/gallery/gallery-10.jpg";
import gallery_11 from "../../assets/gallery/gallery-11.jpg";
import gallery_12 from "../../assets/gallery/gallery-12.jpg";
import gallery_13 from "../../assets/gallery/gallery-013.jpg";
import gallery_14 from "../../assets/gallery/gallery-014.jpg";
import gallery_15 from "../../assets/gallery/gallery-15.jpg";

const Testimonials = () => {
  return (
    <section className={classes.section_testimonials} id='testimonials'>
      <div className={classes.testimonials_container}>
        <span className='sub-heading'>Testimonials</span>
        <h2 className='heading-secondary'>
          Once you try it, you can't go back
        </h2>
        
        <div className={classes.testimonials}>
          <figure className='testimonial'>
            <img src={dave} className='' alt='Photo of Customer Dave Bryson' />
            <blockquote className={classes.testimonial_text}>
              Inexpensive, healthy and great-tasting meals, without even having
              to order manually! It feels truly magical.
            </blockquote>
            <p className={classes.testimonial_name}>&mdash; Dave Bryson</p>
          </figure>

          <figure className='testimonial'>
            <img src={ben} className='' alt='Photo of Customer Dave Bryson' />
            <blockquote className={classes.testimonial_text}>
              The AI algorithm is crazy good, it chooses the right meals for me
              every time. It's amazing not to worry about food anymore!
            </blockquote>
            <p className={classes.testimonial_name}>&mdash; Ben Hadley</p>
          </figure>

          <figure className='testimonial'>
            <img src={steve} className='' alt='Photo of Customer Dave Bryson' />
            <blockquote className={classes.testimonial_text}>
              Omnifood is a life saver! I just started a company, so there's no
              time for cooking. I couldn't live without my daily meals now!
            </blockquote>
            <p className={classes.testimonial_name}>&mdash; Steve Miller</p>
          </figure>

          <figure className='testimonial'>
            <img
              src={hannah}
              className=''
              alt='Photo of Customer Dave Bryson'
            />
            <blockquote className={classes.testimonial_text}>
              I got Omnifood for the whole family, and it frees up so much time!
              Plus, everything is organic and vegan and without plastic.
            </blockquote>
            <p className={classes.testimonial_name}>&mdash; Hannah Smith</p>
          </figure>
        </div>
      </div>
      <div className={classes.gallery}>
        <figure className={classes.gallery_item}>
          <img src={gallery_1} alt='Photo of beautifully arranged food' />
        </figure>
        <figure className={classes.gallery_item}>
          <img src={gallery_17} alt='Photo of beautifully arranged food' />
        </figure>
        <figure className={classes.gallery_item}>
          <img src={gallery_3} alt='Photo of beautifully arranged food' />
        </figure>
        <figure className={classes.gallery_item}>
          <img src={gallery_4} alt='Photo of beautifully arranged food' />
        </figure>
        <figure className={classes.gallery_item}>
          <img src={gallery_5} alt='Photo of beautifully arranged food' />
        </figure>
        <figure className={classes.gallery_item}>
          <img src={gallery_6} alt='Photo of beautifully arranged food' />
        </figure>
        <figure className={classes.gallery_item}>
          <img src={gallery_7} alt='Photo of beautifully arranged food' />
        </figure>
        <figure className={classes.gallery_item}>
          <img src={gallery_8} alt='Photo of beautifully arranged food' />
        </figure>
        <figure className={classes.gallery_item}>
          <img src={gallery_13} alt='Photo of beautifully arranged food' className={classes.gallery_13} />
        </figure>
        <figure className={classes.gallery_item}>
          <img src={gallery_14} alt='Photo of beautifully arranged food' className={classes.gallery_14} />
        </figure>
        <figure className={classes.gallery_item}>
          <img src={gallery_11} alt='Photo of beautifully arranged food' />
        </figure>
        <figure className={classes.gallery_item}>
          <img src={gallery_12} alt='Photo of beautifully arranged food' />
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;
