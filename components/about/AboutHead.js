import classes from './AboutHead.module.css';
import Header from '../../headers_main/Header';

const AboutHead = () =>{
    return(
        <div className={classes.about_head}>
           <Header/>
           <div className={classes.about_head_desc}>
              <h1>ABOUT US</h1>
              <p>We are a hyperlocal platform to connect the waste producers to the waste collectors. Individuals, households, organisations, and dealers like Kabadiwalas, collectors, and recyclers all come together on a unified online platform. Here, a customer can easily find their nearest Kabadiwala and place an order for doorstep waste pickup.</p>
              <p>By leveraging AI, IoT, and IT in the waste management sector, We aim to help small local Kabadiwalas grow their businesses with the help of technology. By offering a modern solution to treat & manage waste, we enable our partners to collect waste efficiently with fewer resources.</p>
           </div>
        </div>
    );
};
export default AboutHead;
