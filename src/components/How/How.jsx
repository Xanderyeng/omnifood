import React from "react";
import classes from "./how.module.css";
import screen1 from "../../assets/app/app-screen-1.png";
import screen2 from "../../assets/app/app-screen-2.png";
import screen3 from "../../assets/app/app-screen-3.png";

const How = () => {
  return (
    //  SECTION :: HOW IT WORKS

    <section className={classes.section_how} id='how'>
      <div className='container'>
        <span className='sub-heading'>How it works</span>
        <h2 className='heading-secondary'>
          Your daily dose of health in 3 simple steps
        </h2>
      </div>
      <div className='container grid grid--2-cols grid--center-v'>
        {/* <!-- STEP 01 --> */}

        <div className='step-text-box'>
          <p className={classes.step__number}>01</p>
          <h3 className='heading-tertiary'>
            Tell us what you like (and what not)
          </h3>
          <p className={classes.step_description}>
            Never again waste time thinking about what to eat! Omnifood AI will
            create a 100% personalized weekly meal plan just for you. It makes
            sure you get all the nutrients and vitamins you need, no matter what
            diet you follow!
          </p>
        </div>
        <div className={classes.step_img_box}>
          <img
            src={screen1}
            alt='iPhone app delivery screen'
            className={classes.step_img}
          />
        </div>

        {/* <!-- STEP 02 --> */}

        <div className={classes.step_img_box}>
          <img
            src={screen2}
            alt='iPhone app meal approving screen'
            className={classes.step_img}
          />
        </div>
        <div className='step-text-box'>
          <p className={classes.step__number}>02</p>
          <h3 className='heading-tertiary'>Receive meals at convenient time</h3>
          <p className={classes.step_description}>
            Best chefs in town will cook your selected meal every day, and we
            will deliver it to your door whenever works best for you. You can
            change delivery schedule and address daily!
          </p>
        </div>

        {/* <!-- STEP 03 --> */}

        <div className='step-text-box'>
          <p className={classes.step__number}>03</p>
          <h3 className='heading-tertiary'>Approve your weekly meal plan</h3>
          <p className={classes.step_description}>
            Once per week, approve the meal plan generated for you by Omnifood
            AI. You can change ingredients, swap entire meals, or even add your
            own recipes.
          </p>
        </div>
        <div className={classes.step_img_box}>
          <img
            src={screen3}
            alt='iPhone references selection screen'
            className={classes.step_img}
          />
        </div>
      </div>
    </section>
  );
};

export default How;
