import paper from '../../asserts/sell_comp/paper.jpeg';
import plastic from '../../asserts/sell_comp/plastic.jpeg';
import glass from '../../asserts/sell_comp/glass.jpeg';
import metal from '../../asserts/sell_comp/metal.jpeg';
import others from '../../asserts/sell_comp/others.jpeg';
import e_waste from '../../asserts/sell_comp/e_waste.jpeg';
import {useState, Fragment} from 'react';
import {Link} from 'react-router-dom';
import SellPinCode from './SellPinCode';
import classes from './SellComponents.module.css';

const SellComponents = () =>{
    const [isSelect, setIsSelect] = useState(false);
    const [selectValue, setSelectValue] = useState('Select');
    const onClickHandler = () =>{
      setIsSelect(!isSelect);
    };
    const onSetPinCodeHandler = (props) =>{
        setSelectValue(props);
    }

    return(
      <Fragment>
            {isSelect && <SellPinCode onSetPinCode={onSetPinCodeHandler}/>}
            <main className={classes.sell_comp_main}>
                <p>Change your pincode <span onClick={onClickHandler}>{selectValue}</span></p>
                <div className={classes.sell_comp_con}>
                    <button className={classes.sell_comp_btn}>
                       <Link to = '/sell/sellitems'>
                           <img src={paper} alt='paper'/>
                           <center><p>Paper</p></center>
                       </Link>
                    </button>
                    <button className={classes.sell_comp_btn}>
                      <Link to = '/sell/sellitems'>
                         <img src={glass} alt='glass'/>
                         <center><p>Glass</p></center>
                      </Link>
                    </button>
                    <button className={classes.sell_comp_btn}>
                      <Link to = '/sell/sellitems'>
                         <img src={plastic} alt='plastic' />
                         <center><p>Plastic</p></center>
                       </Link>
                    </button>
                    <button className={classes.sell_comp_btn}>
                      <Link to = '/sell/sellitems'>
                         <img src={metal} alt='metals'/>
                         <center><p>Metals</p></center>
                       </Link>
                    </button>
                    <button className={classes.sell_comp_btn}>
                      <Link to = '/sell/sellitems'>
                         <img src={e_waste} alt='e_waste'/>
                         <center><p>E-waste</p></center>
                      </Link>
                    </button>
                    <button className={classes.sell_comp_btn}>
                      <Link to = '/sell/sellitems'>
                         <img src={others} alt='others'/>
                         <center><p>Others</p></center>
                      </Link>
                    </button>
                </div>
            </main>
      </Fragment>
    );
};
export default SellComponents;
