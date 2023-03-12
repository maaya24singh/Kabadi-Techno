import classes from './ErrorModule.module.css';
import Header from '../../headers_main/Header';
import Footer2 from '../../layout/Footer2';
import {Fragment} from 'react'
const ErrorModule = () =>{

    return(
      <Fragment>
          <Header/>
          <div className={classes.error_module}>
             <h1>No Service</h1>
             <p className={classes.error_module_pin}>Change your pincode <span> pin</span></p>
             <div className={classes.error_module_location}><p>Selected area : <span>Area Location</span></p></div>
          </div>
          <p className={classes.error_module_p}>This service is not available in your area.<br/>
          <span>It will be coming soon.</span></p>
          <Footer2/>
      </Fragment>
    );
};
export default ErrorModule;
