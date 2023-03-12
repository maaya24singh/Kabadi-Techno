import classes from './FAQMain.module.css';
import {useState} from 'react';

const FAQItemDisplay = (props) =>{
  const desc = props.description;
  const newdesc = desc.split('\n').map( str => <p>{str}</p>);

   const[isShow, setIsShow] = useState(false);
   const showDescription = () =>{
      setIsShow(!isShow);
   }
   return(
      <div className={classes.faq_items_list}>
        <div className={classes.faq_items_list_con}>
            <h2>{props.text}</h2>
            <button className={isShow?classes.faq_items_list_btn_up: classes.faq_items_list_btn_down} onClick={showDescription}></button>
        </div>
         {isShow?<p>{newdesc}</p>:''}
      </div>
   );
};
export default FAQItemDisplay;
