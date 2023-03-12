import {useState} from 'react';
import classes from './JoinUsComponent.module.css';
import JoinUsItemsForm from './JoinUsItemsForm';
import JoinUsItemsForm2 from './JoinUsItemsForm2';


const JoinUsItemDisplay = (props) => {
     const id = props.id;
     const [showInfo, setShowInfo] = useState(false);
     const onClickHandler = () =>{
        setShowInfo(!showInfo);
     };

     return(
      <div className={classes.join_us_items_con}>
        <div className={classes.join_us_items_wrapper}>
            <div className={classes.join_us_items_text}>
               <h2>{props.text}</h2>
            </div>
            <div className={classes.join_us_items_about}>
              <center>  <p>{props.about}</p>
                <button onClick={onClickHandler}>{showInfo? "Less Info": "More Info"}</button></center>
            </div>
        </div>
        { showInfo &&
          <div className={classes.join_us_description}>
              <p>{props.description}</p>
              <p className={classes.join_us_items_details}>{props.details}</p>
              {id === 'i3'? <JoinUsItemsForm2 />:<JoinUsItemsForm selectId = {id}/>}
          </div>
        }
      </div>
     );
};
export default JoinUsItemDisplay;
