import React from 'react';
import styles from './Header.module.css';
import PageviewIcon from '@material-ui/icons/Pageview';
import { NavLink } from 'react-router-dom';


const Header = function() {
  return(
    <header>
      <NavLink to="/main/"><div className={styles.logo}></div></NavLink>
      <div className={styles.search}>
        <input type="search" name="search" id="search" placeholder="Знайди свій курс..." />
        <button> <PageviewIcon fontSize="large"></PageviewIcon> </button>
      </div>
    </header>
  );
}


export default Header;
