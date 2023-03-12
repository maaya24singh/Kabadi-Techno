import classes from './JoinUsAnimate.module.css';
import image1 from '../../asserts/images/image_s1.jpeg';
import image2 from '../../asserts/images/image_s2.jpeg';
import image3 from '../../asserts/images/image_s3.jpeg';

const JoinUsAnimate = () =>{
   return(
     <div className={classes.customer_frame}>
         <h1>Our Happy Members</h1>

         <div className={classes.customer_frame_con}>
              <div className={classes.customer_frame_wrapper}>
                    <div className={classes.customer_frame_wrapper_con}>
                       <div className={classes.customer_frame_animate}>
                           <img src={image1} className={classes.customer_frame_img}/>
                           <div className={classes.customer_frame_img_desc}>
                              <h3>Kabadi Techno has given me an opportunity to grow in the field of innovation and taught me how to learn everyday by researching and studying existing methods so that one can come up with new and innovative methods. In the end somebody has to innovate to keep this world running.</h3>
                              <p>Saquib Nawaz</p>
                           </div>
                       </div>

                       <div className={classes.customer_frame_animate}>
                           <img src={image2} className={classes.customer_frame_img}/>
                           <div className={classes.customer_frame_img_desc}>
                              <h3>I have been associated with Kabadi Techno since 2019. You people are doing a fantastic job providing a software-based platform for smart waste management. Your work is really towards mankind and to support economic development and superior quality of life.</h3>
                              <p>Pushpa Singh</p>
                           </div>
                       </div>

                       <div className={classes.customer_frame_animate}>
                           <img src={image3} className={classes.customer_frame_img}/>
                           <div className={classes.customer_frame_img_desc}>
                              <h3>This company gave me a nudge to sustainable engineering and shaped my career. They made me realize that sustainability is the future and the only solution to the environmental crisis. I'm glad to be a part of this inspiring team.</h3>
                              <p>P. Shruthi</p>
                           </div>
                       </div>

                  </div>
              </div>
         </div>
     </div>
   );
};
export default JoinUsAnimate;
