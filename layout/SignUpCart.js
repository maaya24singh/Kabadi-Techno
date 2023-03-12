import classes from './SignUpCart.module.css';
import Header from '../headers_main/Header';
import TypeWriter from '../components/signup/TypeWriter';
import {Link} from 'react-router-dom';

const SignUpCart = (props) =>{
   return(
     <div className={classes.signupBack_type}>
         <Header/>
          <div className={classes.sign_up_type}>
              <div className={classes.sign_up_section}>
                 <h1>Sign Up</h1>
                    {props.children}
                 <p>Already have an account?<Link to = '/signin' className={classes.sign_up_section_link}>Sign In </Link></p>
              </div>
            <div className={classes.sign_up_type_animate}>
              <center><TypeWriter/></center>
            </div>
         </div>
     </div>
   );
};
export default SignUpCart;
