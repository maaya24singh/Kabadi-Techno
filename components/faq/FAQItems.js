import classes from './FAQMain.module.css';
import FAQItemDisplay from './FAQItemDisplay';

const FAQItems = (props) =>{

   return(
     <div className={classes.faq_items}>
       <center>
       {
         props.data.map((data) =>(
            <FAQItemDisplay
                key = {data.id}
                id = {data.id}
                text = {data.text}
                description = {data.description}
            />
         ))}
         </center>
     </div>
   );
};
export default FAQItems;
