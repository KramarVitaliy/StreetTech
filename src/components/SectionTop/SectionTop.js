import React, {useState} from 'react';
import s from './SectionTop.module.css';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar'
import Main from './Main/Main';
import {Route} from "react-router-dom";
import Courses from "./Courses/Courses";
import Partners from "./Partner/Partners";
import Entry from "./Entry/Entry";
import ProfilePage from "./ProfilePage/ProfilePage";
import Registration from "./Registration/Registration";
import AboutUs from "./AboutUs/AboutUs";


const SectionTop = function (props) {
    let [stateLogin, setStateLogin] = useState("notLogin");
    let [searchData, setSearchData] = useState([])
    let [userData, setUserData] = useState({})

    let userLog = (name, userData) => {
        setStateLogin("login");
        setUserData(userData);
    };


    return (
        <div className={s.sectionTop}>
            <Header coursesData={props.coursesData} setSearchData={setSearchData}/>
            <NavBar stateLogin={stateLogin} userName={userData.login}/>
            <Route exact path="/StreetTech" render={() => <Main state={props.state}/>}/>
            <Route path="/main" render={() => <Main state={props.state}/>}/>
            <Route path="/courses" render={() => <Courses state={props.state} searchData={searchData} coursesData={props.coursesData} userData={userData} stateLogin={stateLogin}/>}/>
            <Route path="/partners" render={() => <Partners state={props.state}/>}/>
            <Route path="/about_us" render={() => <AboutUs state={props.state}/>}/>
            <Route path="/entry" render={() => <Entry stateLogin={stateLogin} usersData={props.usersData} userLog={userLog} usersLogin={props.usersLogin}/>}/>
            <Route path="/registration" render={() => <Registration usersData={props.usersData} userLog={userLog} usersLogin={props.usersLogin}/>}/>
            <Route path="/cabinet" render={() => <ProfilePage userData={userData} setUserData={setUserData} stateLogin={stateLogin} setStateLogin={setStateLogin}/>}/>

        </div>
    );
}


export default SectionTop;
