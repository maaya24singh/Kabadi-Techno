import classes from './AboutComponents.module.css';
const AboutSubComponent2 = () =>{
    return(
      <div className={classes.about_comp2}>
          <h1>What We Do?</h1>
           <div className={classes.about_comp2_con}>
               <div className={classes.about_comp2_polygon}>
                    <h3>Hyperlocal platform</h3>
                    <p>A hyperlocal, technology-enabled, one-stop platform for the recycling industry</p>
               </div>
               <div className={classes.about_comp2_polygon}>
                    <h3>Doorstep pickup</h3>
                    <p>Schedule pickup at your convenience with zero hassles, with instant cash transfer to your account</p>
               </div>
               <div className={classes.about_comp2_polygon}>
                    <h3>Trust & commitment</h3>
                    <p>Electronic scales, competitive pre-determined prices, police verified vendors, hygiene & security</p>
               </div>
               <div className={classes.about_comp2_polygon}>
                    <h3>Kabadiwala Support</h3>
                    <p>Providing back-end business processes support to local kabadiwalas</p>
               </div>
               <div className={classes.about_comp2_polygon}>
                    <h3>Enhance Kabadiwala income</h3>
                    <p>creating growth in local businesses to increase their income, rather than take their jobs</p>
               </div>
               <div className={classes.about_comp2_polygon}>
                    <h3>Innovation</h3>
                    <p>Heavy focus on research and development for constant innovation, with patented technologies</p>
               </div>
           </div>
      </div>
    );
};
export default AboutSubComponent2;
