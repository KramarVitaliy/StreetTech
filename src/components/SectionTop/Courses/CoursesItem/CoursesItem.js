import React from "react";
import styles from "../Courses.module.css";
import {NavLink} from "react-router-dom";


export const CoursesItem = function (props) {
    return (
        <div className={styles.coursesItem}>
            <div className={styles.coursePreview}>
                <img src={props.cours.preview} alt="preview"/>
            </div>
            <div className={styles.coursesDescription}>
                <div>{props.cours.label}</div>
                <div>{props.cours.description}</div>
                <NavLink to={props.cours.path} className={styles.startLink}>Почати навчання</NavLink>
            </div>
        </div>
    );
}