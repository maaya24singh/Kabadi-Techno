import classes from './AboutComponents.module.css';
import certificate from '../../asserts/certificate.png';

const AboutSubComponent1 = () =>{
    return(
      <div className={classes.about_comp1}>
         <div className={classes.about_comp1_con}>
            <div className={classes.about_comp1_head}><h1>Our Vision</h1></div>
            <div className={classes.about_comp1_desc}>
                <p>Our vision is a world of sustainable consumption and a circular economy. We envision becoming a global one-stop shop for the recycling and upcycling industry.</p>
            </div>
         </div>
         <div className={classes.about_comp1_con_2}>
            <div className={classes.about_comp1_desc}>
                <p>Our mission is to establish a sustainable recyclable waste management system and a clean and pollution-free country by creating a hyperlocal platform connecting waste producers and waste collectors.</p>
            </div>
            <div className={classes.about_comp1_head}><h1>Our Mission</h1></div>
         </div>
         <div className={classes.about_comp_certificate}>
            <h2>Startup India Certificate</h2>
            <img src={certificate} className={classes.about_comp1_certificate}/>
         </div>
      </div>
    );
};
export default AboutSubComponent1;
