import './Header.css';
import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../asserts/logo.png';

const Header = () =>{
  const [showMenu, setShowMenu] = useState(false);
  const onClickHandler = () =>{
      setShowMenu(!showMenu);
  }
   return(
     <header className={showMenu?"no-scroll":""}>
        <div className="navbar text">
            <div className="logo">
              <img src={logo} alt="LOGO"/>
            </div>
            <div className="nav-content"><center>
                <NavLink to = '/home' activeClassName = 'nav-btn text'>about</NavLink>
               <NavLink to = '/joinus' activeClassName = 'nav-btn text'>join us </NavLink>
               <NavLink to = '/sell' activeClassName = 'nav-btn text'>sell</NavLink>
               <NavLink to = '/faq' activeClassName = 'nav-btn text'>faq</NavLink>
               <NavLink to = '/contact' activeClassName = 'nav-btn text'>contact</NavLink>
               <NavLink to = '/signin' activeClassName = 'nav-btn text'>sign in</NavLink></center>
             </div>
             <button type="button" name="button" className="menu-button" onClick={onClickHandler}>
                 <span className={showMenu?"button-top open-top" :"button-top"}></span>
                 <span className={showMenu?"button-mid open-mid" :"button-mid"}></span>
                 <span className={showMenu?"button-last open-last" :"button-last"}></span>
             </button>
        </div>
        {showMenu &&
          <div className={showMenu?"mobile-menu" :"mobile-menu hidden"}>
              <div className="mobile-menu-content">
                 <NavLink to = '/home' activeClassName = 'nav-btn text'>about</NavLink>
                 <NavLink to = '/joinus' activeClassName = 'nav-btn text'>join us </NavLink>
                 <NavLink to = '/sell' activeClassName = 'nav-btn text'>sell</NavLink>
                 <NavLink to = '/faq' activeClassName = 'nav-btn text'>faq</NavLink>
                 <NavLink to = '/contact' activeClassName = 'nav-btn text'>contact</NavLink>
                 <NavLink to = '/signin' activeClassName = 'nav-btn text'>sign in</NavLink>
               </div>
           </div>
        }
      </header>
   );
};

export default Header;
