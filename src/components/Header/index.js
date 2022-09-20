import './index.scss'
import React from 'react'
import { ReactComponent as Glowbo } from '../../assets/images/Glowbo.svg'
import { NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faFile, faHammer } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  return ( 
    <div className="m-header">
      <div className="l-logo">
        <Glowbo />
      </div>
      <ul className="l-nav-bar">
        <NavLink exact="true" activeclassname="active" to="/">
          <li className="o-nav-bar__home o-nav-bar__item">
            <FontAwesomeIcon icon={faHome} color="#ffffff" />
            <span>Home</span>
          </li>
        </NavLink>
        <NavLink to="/About" activeclassname="active" className="c-nav-bar__link c-nav-bar__about">
          <li className="o-nav-bar__about o-nav-bar__item">
            <FontAwesomeIcon icon={faUser} color="#ffffff" />
            <span>About</span>
          </li>
        </NavLink>
        <NavLink to="/Resume" activeclassname="active" className="c-nav-bar__link c-nav-bar__resume">
          <li className="o-nav-bar__resume o-nav-bar__item">
            <FontAwesomeIcon icon={faFile} color="#ffffff" />
            <span>Resume</span>
          </li>  
        </NavLink>
        <NavLink to="/Works" activeclassname="active" className="c-nav-bar__link c-nav-bar__works">
          <li className="o-nav-bar__works o-nav-bar__item">
            <FontAwesomeIcon icon={faHammer} color="#ffffff" />
            <span>Works</span>
          </li>
        </NavLink>                    
      </ul>
    </div>  
  );
}
 
export default Header;