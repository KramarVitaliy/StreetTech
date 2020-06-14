import React, {useState} from 'react';
import styles from './Entry.module.css';
import {NavLink} from "react-router-dom";


const Entry = function (props) {
    let [stateCorrectData, setStateCorrectData] = useState(true);
    const userLogin = React.createRef();
    const userPassword = React.createRef();
    let user = {};
    return (
        <div className={styles.entryForm}>
            <form className={styles.box}>
                {stateCorrectData === false &&
                    <div className={styles.wrongData}>Логін або пароль не вірний</div>
                }
                <input type="text" ref={userLogin} placeholder="Username"/>
                <input type="password" ref={userPassword} placeholder="Password"/>

                    <button className={styles.entryButton}
                           value="ВХІД"
                           onClick={(e) => {
                               user = props.usersLogin(userLogin, userPassword, props.usersData);
                               if (user !== false) {
                                   props.userLog(user.login, user);

                                   if (user === false) {
                                       setStateCorrectData(false);
                                       e.preventDefault();
                                   }
                               }

                           }}>
                        <NavLink to="/cabinet/">ВХІД</NavLink>
                    </button>
                <div><NavLink to="/registration/">Реєстрація</NavLink></div>
            </form>
        </div>
    );
}


export default Entry;
