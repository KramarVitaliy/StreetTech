import React from 'react';
import styles from './Registration.module.css';
import {NavLink} from "react-router-dom";


const Registration = function (props) {
    return (
        <div className={styles.registrationForm}>
            <form className={styles.box}>
                <h1>Реєстрація</h1>
                <div className={styles.userInfo}>
                    <div className={styles.infoItem}><label>Username<input type="text"/></label></div>
                    <div className={styles.infoItem}><label>Password<input type="password"/></label></div>
                    <div className={styles.infoItem}><label>Ім'я<input type="text"/></label></div>
                    <div className={styles.infoItem}><label>Прізвище<input type="text"/></label></div>
                    <div className={styles.aboutMe + " " + styles.infoItem}><label >Про себе</label><textarea name="aboutMe"></textarea></div>

                </div>
                <button className={styles.regButton} onClick={(e) => e.preventDefault()}>
                    Зареєструватися
                </button>
                <div className={styles.entry}>
                    <NavLink to="/entry">Ввійти</NavLink>
                </div>
            </form>
        </div>
    );
}


export default Registration;
