
import classes from './Footer2.module.css';

const Footer2 = () =>{

    return(
      <div className={classes.footer2}>
            <div className={classes.footer2_con}>
               <div className={classes.Footer2_content}>
                   <h2>ABOUT US</h2>
                   <ul>
                      <li><p>Our Vision</p></li>
                      <li><p>Our Mission</p></li>
                      <li><p>Our Team</p></li>
                      <li><p>What We Do?</p></li>
                   </ul>
               </div>
               <div className={classes.Footer2_content}>
                   <h2>IMPORTANT LINK</h2>
                   <ul>
                      <li><p>Sell Your Scarp</p></li>
                      <li><p>Join Our Team</p></li>
                      <li><p>Terms & Conditions</p></li>
                      <li><p>Privacy Policy</p></li>
                   </ul>
               </div>
               <div className={classes.Footer2_content}>
                   <h2>CONTACT US</h2>
                   <ul>
                      <li><p className={classes.footer2_connect_icon}>
                           <svg className={classes.footer2_connect_icons} focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
                          16, South Arjun Nagar Agra
                      </p></li>
                      <li><p className={classes.footer2_connect_icon}>
                          <svg className={classes.footer2_connect_icons} focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>
                          Info@kabaditechno.com
                      </p></li>
                      <li><p className={classes.footer2_connect_icon}>
                         <svg className={classes.footer2_connect_icons} focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg>
                        +91 7503386621 <br/>+91 9773857717
                      </p></li>

                   </ul>
               </div>
            </div>

            <div className={classes.footer2_icon}>
                <h2>CONTACT WITH US</h2>
                <ul className={classes.footer2_icon_con}>
                   <li><a herf="#"><svg className={classes.footer2_icons} focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path></svg></a></li>
                   <li><a herf="#"><svg className={classes.footer2_icons} focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg></a></li>
                   <li><a herf="#"><svg className={classes.footer2_icons} focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path></svg></a></li>
                </ul>
            </div>
        </div>
    );
};
export default Footer2;
