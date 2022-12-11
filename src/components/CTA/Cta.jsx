import React from 'react'
import classes from './cta.module.css'
import eating from '../../assets/eating.jpg'

const Cta = () => {
    const cta_img_box = {
        // backgroundImage: `url(${eating})`, 
        // working code ↑
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat",
        backgroundPosition: "center",
        // backgroundImage: `linear-gradient(rgba(235, 151, 78, 0.35), rgba(230, 125, 34, 0.35))`,
        backgroundImage: `linear-gradient(rgba(235, 151, 78, 0.35), rgba(230, 125, 34, 0.35)), url(${eating}`,
        // backgroundImage: "#fff",
    }
  return (
    <section className={classes.section_cta} id="cta">
            <div className="container">
                <div className={classes.cta}>

                    <div className={classes.cta_text_box}>
                        <h2 className="heading_secondary">Get your first meal for free!</h2>
                        <p className="cta_text">Healthy, tasty and hassle-free meals are waiting for you. Start eating well
                            today. You can cancel or pause anytime. And the first meal is on us!</p>

                        <form className={classes.cta_form} name={classes.sign_up} netlify>
                            <div>

                                <label htmlFor="fullname">Full Name</label>
                                <input id="fullname" type="text" placeholder="John Smith" name="fullname" required />

                            </div>

                            <div>

                                <label htmlFor="email">Email address</label>
                                <input id="email" type="email" placeholder="jsmith@example.com" name="email" required />

                            </div>

                            <div>
                                <label htmlFor='select-where'>Where did you hear from us?</label>
                                <select id="select-where" name="select-where" required>
                                    <option value="">Please choose one option:</option>
                                    <option value="friends">Friends and family</option>
                                    <option value="youtube">YouTube video</option>
                                    <option value="podcast">Podcast</option>
                                    <option value="ad">Facebook ad</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>

                            <button className="btn btn--form">Sign up now</button>
                        </form>

                    </div>

                    {/* <!-- SCREEN READERS WILL BE ABLE TO RECOGNISE THIS ELEMENT AS AN IMAGE --> */}
                    <div style={{...cta_img_box}} role="img" aria-label="Woman enjoying food">

                    </div>
                </div>

            </div>
        </section>
  )
}

export default Cta