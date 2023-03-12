import classes from './AboutAnimate.module.css';
import image2 from '../../asserts/images/image_m2.jpeg';
import image3 from '../../asserts/images/image_m3.jpeg';
import image4 from '../../asserts/images/image_m4.jpeg';
import image5 from '../../asserts/images/image_m5.jpeg';
import image6 from '../../asserts/images/image_m6.jpeg';
import image7 from '../../asserts/images/image_m7.jpeg';

const AboutAnimate = () =>{
    return(
      <div className={classes.about_animate}>
         <h1>Our Team Members</h1>

         <div className={classes.about_animate_con}>
              <div className={classes.about_animate_wrapper}>
                  <ul>
                      <li className={classes.about_animate_comps}>
                          <img src={image2}/>
                          <div className={classes.about_animate_comps_desc}>
                             <h2>Pritam Singh</h2>
                             <p>(Co-Founder)</p>
                          </div>
                      </li>
                      <li className={classes.about_animate_comps}>
                          <img src={image3}/>
                          <div className={classes.about_animate_comps_desc}>
                             <h2>Kuldeep</h2>
                             <p>(Founder)</p>
                          </div>
                      </li>
                      <li className={classes.about_animate_comps}>
                          <img src={image4}/>
                          <div className={classes.about_animate_comps_desc}>
                             <h2>Tejassvi Pakki</h2>
                             <p>(Process Director in Chemical R&D)</p>
                          </div>
                      </li>
                      <li className={classes.about_animate_comps}>
                          <img src={image6}/>
                          <div className={classes.about_animate_comps_desc}>
                             <h2>Akshay Chudasama</h2>
                             <p>(Director legal & Compliances)</p>
                          </div>
                      </li>
                      <li className={classes.about_animate_comps}>
                          <img src={image5}/>
                          <div className={classes.about_animate_comps_desc}>
                             <h2>Pavittar Singh</h2>
                             <p>(H.O.D in Mechnical Department)</p>
                          </div>
                      </li>
                      <li className={classes.about_animate_comps}>
                          <img src={image7}/>
                          <div className={classes.about_animate_comps_desc}>
                             <h2>Vishwaijt Walde</h2>
                             <p>(H.O.D in Electronics Department)</p>
                          </div>
                      </li>
                  </ul>
              </div>
         </div>
      </div>
    );
};
export default AboutAnimate;
