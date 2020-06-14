import React from 'react';
import styles from './ProfilePage.module.css';
import {NavLink} from "react-router-dom";


const ProfilePage = function (props) {
    const coursesListing = () => {
        if (props.userData.activeCourse !== []) {
            return props.userData.activeCourse.map(cours => {
                return " " + cours + ", "
            })
        }
    };
    const changeUserData = () => {
        if (props.userData !== {}) {
            props.setUserData({});
            props.setStateLogin("notLogin");
        }

    };
    return (
        <div className={styles.profilePage}>

            {props.stateLogin === "login" &&
            <div className={styles.profile}>
                <div className={styles.label}>Профіль користувача</div>
                <div className={styles.profileMain}>
                    <div className={styles.personalData}>
                        <div>Ім'я: {props.userData.name}</div>
                        <div>Прізвище: {props.userData.surname}</div>
                        <div>Nickname: {props.userData.login}</div>
                    </div>
                    <div className={styles.avatar}>
                        <img src={props.userData.avatar} alt="Avatar"/>
                    </div>
                </div>
                <div className={styles.aboutMe}>Про мене: {props.userData.aboutMe}</div>
                <div className={styles.aboutMe}>Підписаний(а) на курси: {coursesListing()}</div>
                <NavLink to="/StreetTech/entry">
                    <button className={styles.exitButton} onClick={changeUserData}>Exit</button>
                </NavLink>
            </div>
            }
            {props.stateLogin === "notLogin" &&
            <div className={styles.profile}>
                <div className={styles.wrongData}>Логін або пароль не вірні. Спробуйте ще раз.</div>
            </div>
            }

        </div>
    );
}


export default ProfilePage;
