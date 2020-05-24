import React from 'react';
import styles from '../Courses.module.css';
import {NavLink} from "react-router-dom";


const CategoryItem = function (props) {
    return (
                    <div className={styles.categoryItem}>
                        <NavLink to={props.to} activeClassName={styles.active}>{props.text}</NavLink>
                    </div>
    );
}


export default CategoryItem;
