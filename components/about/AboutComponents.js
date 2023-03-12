import classes from './AboutComponents.module.css';
import {NavLink} from 'react-router-dom';
import AboutSubComponent1 from './AboutSubComponent1';
import AboutSubComponent2 from './AboutSubComponent2';

const AboutComponents = () =>{
    return(
       <section>
          <AboutSubComponent1/>
          <AboutSubComponent2/>

          <div className={classes.about_comp3}>
              <div className={classes.about_comp3_text}>
                  <h2>Join Our Team</h2>
              </div>
              <div className={classes.about_comp3_desc}>
                  <center> <p>Join us on our mission to revolutionise the waste management industry</p>
                      <button><NavLink to = '/joinus'>More Info</NavLink></button></center>
              </div>
         </div>
      </section>
    );
};
export default AboutComponents;
