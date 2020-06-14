import React from 'react';
import styles from './NavBar.module.css';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import LibraryBooksTwoToneIcon from '@material-ui/icons/LibraryBooksTwoTone';
import CardTravelTwoToneIcon from '@material-ui/icons/CardTravelTwoTone';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import HowToRegTwoToneIcon from '@material-ui/icons/HowToRegTwoTone';
import NavItem from './NavItem/NavItem';



const NavBar = function (props) {



    let pgFirstIcon = () => <HomeTwoToneIcon fontSize="large"></HomeTwoToneIcon>;
    let pgTwoIcon = () => <LibraryBooksTwoToneIcon fontSize="large"></LibraryBooksTwoToneIcon>;
    let pgThreeIcon = () => <CardTravelTwoToneIcon fontSize="large"></CardTravelTwoToneIcon>;
    let pgFourIcon = () => <InfoTwoToneIcon fontSize="large"></InfoTwoToneIcon>;
    let pgFiveIcon = () => <HowToRegTwoToneIcon fontSize="large"></HowToRegTwoToneIcon>;

    return (
        <nav className={styles.pageNavigation}>
            <NavItem to="/main/" icon={pgFirstIcon} text="Головна"/>
            <NavItem to="/courses/" icon={pgTwoIcon} text="Курси"/>
            <NavItem to="/partners/" icon={pgThreeIcon} text="Партнери"/>
            <NavItem to="/about_us/" icon={pgFourIcon} text="Про нас"/>

            { props.stateLogin === "notLogin" &&
                <NavItem to="/entry/" icon={pgFiveIcon} text="Реєстрація/Вхід"/>
            }
            { props.stateLogin === "login" &&
            <NavItem to="/cabinet/" icon={pgFiveIcon} text={props.userName}/>
            }


        </nav>
    );
}


export default NavBar;
