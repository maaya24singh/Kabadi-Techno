import classes from './CustomerBlock.module.css';
import image1 from '../../asserts/images/image_t1.jpeg';
import image2 from '../../asserts/images/image_t2.jpeg';

const CustomerBlock = () =>{
   return(
     <div className={classes.customer_frame}>
         <h1>Our Happy Customers</h1>

         <div className={classes.customer_frame_con}>
              <div className={classes.customer_frame_wrapper}>
                    <div className={classes.customer_frame_wrapper_con}>
                       <div className={classes.customer_frame_animate}>
                           <img src={image1} className={classes.customer_frame_img}/>
                           <div className={classes.customer_frame_img_desc}>
                              <h3>The company is targeting one of the significant issues of our country that is "Waste Management".  The company is moving forward to achieving excellence through unique and innovative ideas, by taking the help of technology. Creating a bridge for people to dump their waste in the most efficient way.</h3>
                              <p>Mayank Chaurasia</p>
                           </div>
                       </div>

                       <div className={classes.customer_frame_animate}>
                           <img src={image2} className={classes.customer_frame_img}/>
                           <div className={classes.customer_frame_img_desc}>
                              <h3>According to me, company has started achieving endeavours by successfully transforming the waste management sector through digitalization and various ongoing research ongoing in the company.</h3>
                              <p>Saksham Singh</p>
                           </div>
                       </div>
                  </div>
              </div>
         </div>
     </div>
   );
};

export default CustomerBlock;
