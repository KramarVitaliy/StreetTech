import React from 'react';
import styles from './Main.module.css';




const Main = function (props) {
  return (
    <div className={styles.main}>
        <div className={styles.newsList}>
            <div className={styles.newsItem}>
                <div className={styles.newsPreview}><img src={props.state.newsData[0].preview} alt="News Preview"/></div>
                <div className={styles.newsDescription}>
                    <div className={styles.label}>{props.state.newsData[0].label}</div>
                    <div className={styles.description}>{props.state.newsData[0].description}</div>
                </div>
            </div>
            <div className={styles.newsItem}>
                <div className={styles.newsPreview}><img src={props.state.newsData[0].preview} alt="News Preview"/></div>
                <div className={styles.newsDescription}>
                    <div className={styles.label}>{props.state.newsData[0].label}</div>
                    <div className={styles.description}>{props.state.newsData[0].description}</div>
                </div>
            </div>
        </div>
    </div>
  );
}


export default Main;
