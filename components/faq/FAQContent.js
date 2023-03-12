import Header from '../../headers_main/Header';
import classes from './FAQMain.module.css';
const FAQContent = () =>{
   return(
     <div className={classes.faq_main}>
         <Header/>
         <div className={classes.faq_main_heading}>
           <h1>Frequently asked Questions</h1>
         </div>
     </div>
   );
};
export default FAQContent;
