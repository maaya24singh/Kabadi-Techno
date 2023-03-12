import {Fragment} from 'react';
import Footer from './Footer.js';
const LayoutMain = (props) =>{

  return(
    <Fragment>
        {props.children}
        <Footer/>
    </Fragment>
  );
};

export default LayoutMain;
