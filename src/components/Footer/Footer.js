import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/img/logo.png'
import TelegramIcon from '@material-ui/icons/Telegram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


const Footer = function (props) {
    return (
        <div className={styles.footer}>
            <div className={styles.topLine}>
                <div className={styles.logo}>
                    <img src={logo} alt="footer-logo"/>
                </div>
                <div className={styles.contacts}>
                    <div className={styles.contactsLink}>
                        <a href="https://t.me/streetitteam" className={styles.linkItem}>
                            <TelegramIcon fontSize="large"></TelegramIcon>
                            <span>Telegram</span>
                        </a>
                        <a href="https://www.youtube.com/channel/UCiu40RhGJk7SUDm03FVUH0w" className={styles.linkItem}>
                            <YouTubeIcon></YouTubeIcon>
                            <span>YouTube</span>
                        </a>
                        <a href="mailto:streetitteam@gmail.com" className={styles.linkItem}>
                            <MailOutlineIcon></MailOutlineIcon>
                            <span>Mail</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.bottomLine}>
                <div className={styles.copyright}>© 2020 Copyright StreetTech, Inc. All rights reserved.</div>
            </div>
        </div>
    );
}


export default Footer;
