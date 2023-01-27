import React from "react";
import { IonIcon } from "@ionic/react";
import {
  checkmarkOutline,
  closeOutline,
  infiniteOutline,
  nutritionOutline,
  pauseOutline,
  leafOutline,
} from "ionicons/icons";
import classes from "./pricing.module.css";

const Pricing = () => {
  return (
    <section className={classes.section_pricing} id='pricing'>
      <div className={classes.container}>
        <span className='subheading'></span>
        <h2 className={classes.heading_secondary}></h2>
      </div>

      <div className={`container grid grid--2-cols margin-bottom-md`}>
        <div
          className={`${classes.pricing_plan} ${classes.pricing_plan__starter}`}
        >
          <header className={classes.plan_header}>
            <p className={classes.plan_name}>Starter</p>
            <p className={classes.plan_price}>
              <span>$</span>399
            </p>
            <p className={classes.plan_text}>
              per month. That's just $13 per meal!
            </p>
          </header>
          <ul className='list'>
            <li className='list-item'>
              <IonIcon icon={checkmarkOutline} className='list-icon' />
              <span>1 meal per day</span>
            </li>
            <li className='list-item'>
              <IonIcon icon={checkmarkOutline} className='list-icon' />
              <span>Order from 11am to 9pm</span>
            </li>
            <li className='list-item'>
              <IonIcon icon={checkmarkOutline} className='list-icon' />
              <span>Delivery is free</span>
            </li>
            <li className='list-item'>
              <IonIcon icon={closeOutline} className='list-icon' />
              <span></span>
            </li>
          </ul>
          <div className={classes.plan_sign_up}>
            <a href='#' className='btn btn--full'>
              Start eating well
            </a>
          </div>
        </div>

        <div
          className={`${classes.pricing_plan} ${classes.pricing_plan__complete}`}
        >
          <header className={classes.plan_header}>
            <p className={classes.plan_name}>Complete</p>
            <p className={classes.plan_price}>
              <span>$</span>649
            </p>
            <p className={classes.plan_text}>
              per month. That's just $11 per meal!
            </p>
          </header>

          <ul className='list'>
            <li className='list-item'>
              <IonIcon icon={checkmarkOutline} className='list-icon' />
              <span>
                <strong>2 meals</strong> per day
              </span>
            </li>
            <li className='list-item'>
              <IonIcon icon={checkmarkOutline} className='list-icon' />
              <span>
                Order
                <strong> 24/7</strong>
              </span>
            </li>
            <li className='list-item'>
              <IonIcon icon={checkmarkOutline} className='list-icon' />
              <span>Delivery is free</span>
            </li>
            <li className='list-item'>
              <IonIcon icon={checkmarkOutline} className='list-icon' />
              <span>Get access to the latest recipes</span>
            </li>
          </ul>
          <div className={classes.plan_sign_up}>
            <a href='#' className='btn btn--full'>
              Start eating well
            </a>
          </div>
        </div>
      </div>

      {/* <!-- SECTION :: FEATURES --> */}

      <div className='container grid'>
        <aside className={classes.plan_details}>
          Prices include all applicable taxes. You can cancel at any time. Both
          plans inlcude the following:
        </aside>
      </div>

      <div className='container grid grid--4-cols'>
        <div className='feature'>
          <IonIcon icon={infiniteOutline} className={classes.feature_icon} />

          <p className={classes.feature_title}>Never cook again!</p>
          <p className={classes.feature_text}>
            Our subscriptions cover 365 days per year, even including major
            holidays.
          </p>
        </div>
        <div className='feature'>
          <IonIcon icon={nutritionOutline} className={classes.feature_icon} />

          <p className={classes.feature_title}>Local and organic</p>
          <p className={classes.feature_text}>
            Our cooks only use local, fresh, and organic products to prepare
            your meals.
          </p>
        </div>
        <div className='feature'>
          <IonIcon icon={leafOutline} className={classes.feature_icon} />

          <p className={classes.feature_title}>No waste</p>
          <p className={classes.feature_text}>
            All our partners only use reusable containers to package all your
            meals.
          </p>
        </div>
        <div className='feature'>
          <IonIcon icon={pauseOutline} className={classes.feature_icon} />

          <p className={classes.feature_title}>Pause anytime</p>
          <p className={classes.feature_text}>
            Going on vacation? Just pause your subscription, and we refund
            unused days..
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
