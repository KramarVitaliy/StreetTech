import React from 'react';
import s from './SectionTop.module.css';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar'
import Main from './Main/Main';
import {Route} from "react-router-dom";
import Courses from "./Courses/Courses";
import Partners from "./Partner/Partners";



const SectionTop = function(props) {
  return (
    <div className={s.sectionTop}>
        <Header />
        <NavBar />
        <Route exact path="/" render={() => <Main state={props.state} />}/>
        <Route path="/main" render={() => <Main state={props.state} />}/>
        <Route path="/courses" render={() => <Courses state={props.state} coursesDisplay={props.coursesDisplay}/>}/>
        <Route path="/partners" render={() => <Partners state={props.state}  />} />
      </div>
  );
}


export default SectionTop;
