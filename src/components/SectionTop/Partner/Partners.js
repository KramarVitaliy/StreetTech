import React from 'react';
import styles from './Partners.module.css';


const Partners = function (props) {
    return (
        <div className={styles.partnerPage}>
            <div className={styles.partnerItem}>
                <div className={styles.partnerTitle}>
                    <img src={props.state.partnerData[0].preview} alt="patner-logo" />
                    <div className={styles.partnerLabel}>{props.state.partnerData[0].label}</div>
                </div>
                <div className={styles.partnerDescription}>
                    <div>{props.state.partnerData[0].description}</div>
                    <a href={props.state.partnerData[0].contact}><button>Контакти</button></a>
                </div>
            </div>
            <div className={styles.partnerItem}>
                <div className={styles.partnerTitle}>
                    <img src={props.state.partnerData[0].preview} alt="patner-logo" />
                    <div className={styles.partnerLabel}>{props.state.partnerData[0].label}</div>
                </div>
                <div className={styles.partnerDescription}>
                    <div>{props.state.partnerData[0].description}</div>
                    <a href={props.state.partnerData[0].contact}><button>Контакти</button></a>
                </div>
            </div>
            <div className={styles.partnerItem}>
                <div className={styles.partnerTitle}>
                    <img src={props.state.partnerData[0].preview} alt="patner-logo" />
                    <div className={styles.partnerLabel}>{props.state.partnerData[0].label}</div>
                </div>
                <div className={styles.partnerDescription}>
                    <div>{props.state.partnerData[0].description}</div>
                    <a href={props.state.partnerData[0].contact}><button>Контакти</button></a>
                </div>
            </div>
        </div>
    );
}


export default Partners;
