import JoinUsItemDisplay from './JoinUsItemDisplay';
import classes from './JoinUsComponent.module.css';

const JoinUsItems = (props) =>{
   return(
     <div className={classes.join_us_items}>
        {
          props.info.map((info) => (
          <JoinUsItemDisplay
               key={info.id}
               id={info.id}
               text={info.text}
               about={info.about}
               description={info.description}
               details={info.details}
          />
        ))}
     </div>
   );
 }
export default JoinUsItems;
