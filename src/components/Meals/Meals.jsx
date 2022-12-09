import React from "react";
import { decodeEntity } from "html-entities";
import { IonIcon } from "@ionic/react";
import { flameOutline } from "ionicons/icons";
import { restaurantOutline } from "ionicons/icons";
import { starOutline } from "ionicons/icons";
import { checkmarkOutline } from "ionicons/icons";
import classes from "./meals.module.css";
import meal_1 from "../../assets/meals/meal-1.jpg";
import meal_2 from "../../assets/meals/meal-2.jpg";

const Meals = () => {
  return (
    // <!-- SECTION :: MEALS -->

    <section className={classes.section_meals} id='meals'>
      <div className='container center-text'>
        <span className='sub-heading'>Meals</span>
        <h2 className='heading-secondary'>
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>

      <div className='container grid grid--3-cols margin-bottom-md'>
        <div className={classes.meal}>
          <img
            src={meal_1}
            className={classes.meal_img}
            alt='Japanese Gyozas'
          />
          <div className={classes.meal_content}>
            <div className={classes.meal_tags}>
              <span className={`${classes.tag} ${classes.tag__vegetarian}`}>
                Vegetarian
              </span>
            </div>
            <p className={classes.meal_title}>Japanese Gyozas</p>
            <ul className={classes.meal_attributes}>
              <li className={classes.meal_attribute}>
                <IonIcon
                  icon={flameOutline}
                  className={classes.meal_icon}
                ></IonIcon>
                <span>
                  calories
                  <strong> 650</strong>
                </span>
              </li>
              <li className={classes.meal_attribute}>
                <IonIcon
                  icon={restaurantOutline}
                  className={classes.meal_icon}
                ></IonIcon>
                <span>
                  NutriScore &reg;
                  <strong> 74</strong>
                </span>
              </li>
              <li className={classes.meal_attribute}>
                <IonIcon
                  icon={starOutline}
                  className={classes.meal_icon}
                ></IonIcon>
                <span>
                  <strong>4.9 </strong>
                  rating (537)
                </span>
              </li>
              {/* <!-- <li className="meal-attribute">650 calories</li> --> */}
            </ul>
          </div>
        </div>
        <div className={classes.meal}>
          <img src={meal_2} className={classes.meal_img} alt='Avocado Salad' />
          <div className={classes.meal_content}>
            <div className={classes.meal_tags}>
              <span className={`${classes.tag} ${classes.tag__vegan}`}>
                Vegan{" "}
              </span>
              <span className={`${classes.tag} ${classes.tag__paleo}`}>
                Paleo
              </span>
            </div>
            <p className={classes.meal_title}>Avocado Salad</p>
            <ul className={classes.meal_attributes}>
              <li className={classes.meal_attribute}>
                <IonIcon
                  icon={flameOutline}
                  className={classes.meal_icon}
                ></IonIcon>
                <span>
                  calories<strong> 400</strong>
                </span>
              </li>
              <li className={classes.meal_attribute}>
                <IonIcon
                  icon={restaurantOutline}
                  className={classes.meal_icon}
                ></IonIcon>

                <span>
                  NutriScore &reg;<strong> 92</strong>
                </span>
              </li>
              <li className={classes.meal_attribute}>
                <IonIcon
                  icon={starOutline}
                  className={classes.meal_icon}
                ></IonIcon>
                <span>
                  <strong>4.8 </strong>
                  rating (441)
                </span>
              </li>
              {/* <!-- <li className="meal-attribute">650 calories</li> --> */}
            </ul>
          </div>
        </div>
        <div className='diets'>
          <h3 className='heading-tertiary'>Works with any diet:</h3>
          <div className='list'>
            <ul className='list'>
              <li className='list-item'>
                <IonIcon
                  icon={checkmarkOutline}
                  className='list-icon'
                ></IonIcon>

                <span>Vegetarian</span>
              </li>
              <li className='list-item'>
                <IonIcon
                  icon={checkmarkOutline}
                  className='list-icon'
                ></IonIcon>
                <span>Vegan</span>
              </li>
              <li className='list-item'>
                <IonIcon
                  icon={checkmarkOutline}
                  className='list-icon'
                ></IonIcon>
                <span>Pescatarian</span>
              </li>
              <li className='list-item'>
                <IonIcon
                  icon={checkmarkOutline}
                  className='list-icon'
                ></IonIcon>
                <span>Gluten-free</span>
              </li>
              <li className='list-item'>
                <IonIcon
                  icon={checkmarkOutline}
                  className='list-icon'
                ></IonIcon>
                <span>Lactose-free</span>
              </li>
              <li className='list-item'>
                <IonIcon
                  icon={checkmarkOutline}
                  className='list-icon'
                ></IonIcon>
                <span>Keto</span>
              </li>
              <li className='list-item'>
                <IonIcon
                  icon={checkmarkOutline}
                  className='list-icon'
                ></IonIcon>
                <span>Paleo</span>
              </li>
              <li className='list-item'>
                <IonIcon
                  icon={checkmarkOutline}
                  className='list-icon'
                ></IonIcon>
                <span>Low CARBS</span>
              </li>
              <li className='list-item'>
                <IonIcon
                  icon={checkmarkOutline}
                  className='list-icon'
                ></IonIcon>
                <span>Kid-friendly</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`${classes.container} ${classes.all_recipes}`}>
        <a href='#' className='link'>
          See all recipes &rarr;
        </a>
      </div>
    </section>
  );
};

export default Meals;
