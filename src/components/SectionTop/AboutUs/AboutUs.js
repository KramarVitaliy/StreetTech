import React from 'react';
import styles from './AboutUs.module.css';


const AboutUs = function (props) {
    return (
        <div className={styles.aboutUsPage}>
            <div className={styles.aboutUsItem}>
                <div className={styles.aboutUsTitle}>
                    <img src={props.state.partnerData[0].preview} alt="patner-logo" />
                    <div className={styles.aboutUsLabel}>StreetTech team</div>
                </div>
                <div className={styles.aboutUsDescription}>
                    <div>Ми команда з програмістів, дизайнерів та викладачів-початківців. Ця команда допоможе тобі навчатися безкоштовно та дізнаватися світ нових технологій. Ці люди хочуть прагнути до безкоштовной web-освіти в нашій країні. Переходьте на їхній Youtube канал та дізнайтесь докладніше про них. Вони чекають на вас.</div>
                    <a href={props.state.partnerData[0].contact}><button>Контакти</button></a>
                </div>
            </div>
        </div>
    );
}


export default AboutUs;
