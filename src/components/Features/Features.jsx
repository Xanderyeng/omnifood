import React from "react";
import {IonIcon} from "@ionic/react";
import { infiniteOutline, nutritionOutline, pauseOutline, leafOutline} from 'ionicons/icons'
import classes from "../Pricing/pricing.module.css"

const Features = () => {
  return (
    // {/* <!-- SECTION :: FEATURES --> */}
    <section>
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

export default Features;
