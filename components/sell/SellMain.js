import classes from './SellMain.module.css';
import Header from '../../headers_main/Header';

const SellMain = () =>{
    return(
       <div className={classes.sell_main_back}>
        <Header/>
        <div className={classes.sell_main_title}><h1>Kabadi Techno Rates of Scrap</h1></div>
       </div>
    );

};
export default SellMain;
