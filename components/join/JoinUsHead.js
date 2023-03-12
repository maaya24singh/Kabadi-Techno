import classes from './JoinUsHead.module.css';
import Header from '../../headers_main/Header';

const JoinUsHead = () =>{
    return(
        <div className={classes.joinUs_head}>
          <Header/>
          <div className={classes.joinUs_head_desc}>
              <h1>JOIN OUR TEAM</h1>
               <h3>"Alone, we can do so little...</h3><h3>Together, we can do so much"</h3>
               <p>~ Helen Keller</p>
          </div>
        </div>
    );
};
export default JoinUsHead;
