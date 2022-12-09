import React from 'react'
import logo1 from '../../assets/logos/techcrunch.png'
import logo2 from '../../assets/logos/business-insider.png'
import logo3 from '../../assets/logos/the-new-york-times.png'
import logo4 from '../../assets/logos/forbes.png'
import logo5 from '../../assets/logos/usa-today.png'
import classes from './featured.module.css'

export const Featured = () => {
  return (
    <section className={classes.section_featured}>
    <div className="container">
        <h2 className={classes.heading_featured_in}>As featured in</h2>
        <div className={classes.logos}>
            <img src={logo1} alt="Techcrunch logo" />
            <img src={logo2} alt="Business Insider logo" />
            <img src={logo3} alt="The Newyork Times logo" />
            <img src={logo4} alt="Forbes" />
            <img src={logo5} alt="USA Today logo" />
        </div>
    </div>
</section>
  )
}
