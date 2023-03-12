import ContactUsForm from './ContactUsForm';
import ContactUsDetails from './ContactUsDetails';
import Header from '../../headers_main/Header';
import classes from './ContactUs.module.css';

const ContactUs = () =>{
   return(
     <div className={classes.contact_us}>
        <Header/>
        <div className={classes.contact_us_container}>
            <ContactUsDetails/>
            <ContactUsForm/>
        </div>
     </div>
   );
};
export default ContactUs;
