import React from 'react';
import styles from '../NavBar.module.css';
import { NavLink } from 'react-router-dom';




const NavItem = function (props) {
  return (
    <div className={styles.navItem}>

      <NavLink to={props.to} activeClassName={styles.active}>
        <div>
          {props.icon()}
          <span>{props.text}</span>
        </div></NavLink>
    </div>

  );
}


export default NavItem;
