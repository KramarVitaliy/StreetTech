import React from "react";
import styles from "../Courses.module.css";
import {NavLink} from "react-router-dom";


export const CoursesItem = function (props) {
    const addCourse = () => {
        if (props.userData !== {}){
            if(!props.userData.activeCourse.includes(props.cours.label)){
                return props.userData.activeCourse.push(props.cours.label)
            }
        }

    };
    return (
        <div className={styles.coursesItem}>
            <div className={styles.coursePreview}>
                <img src={props.cours.preview} alt="preview"/>
            </div>
            <div className={styles.coursesDescription}>
                <div>{props.cours.label}</div>
                <div>{props.cours.description}</div>
                {props.stateLogin === "login" &&
                <button
                    className={styles.startCourse}
                    onClick={addCourse}
                >
                    <NavLink to={props.cours.path}>Почати навчання</NavLink>
                </button>
                }
                {props.stateLogin === "notLogin" &&
                <button className={styles.startCourse}>
                    <NavLink to="/StreetTech/entry/">Реєстрація/Вхід</NavLink>
                </button>
                }

            </div>
        </div>
    );
}