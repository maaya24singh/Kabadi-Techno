import './MenuBar.css';
import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';

const Menu = (props) =>{
   return(
     <div class="mobile-menu hidden" id="menu">

       </div>
   );
};
const portalElement = document.getElementById('menu');
const MenuBar = () =>{
  return(
    <Fragment>
          {ReactDOM.createPortal(<Menu/>, portalElement)}
    </Fragment>
  )
};

export default MenuBar;
