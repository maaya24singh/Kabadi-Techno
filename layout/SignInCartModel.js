import classes from './SignInCartModel.module.css';
import TypeWriter from '../components/signup/TypeWriter';
import Header from '../headers_main/Header';
import {Link} from 'react-router-dom';

const SignInCartModel = (props) =>{
  return(
    <div className={classes.sign_in_Back}>

        <Header/>
         <div className={classes.sign_in_content}>
             <div className={classes.sign_in_cart_animate}>
                <center><TypeWriter/></center>
                <Link to = '/signup'><button className={classes.sign_up_btn}>Sign Up</button></Link>
             </div>
             <div className={classes.sign_in_cart}>
                {props.children}
            </div>
        </div>
    </div>
  );
};
export default SignInCartModel;
