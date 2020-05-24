import React from 'react';
import styles from './Courses.module.css';
import CategoryItem from "./categoryItem/CategoryItem";
import {Route} from "react-router-dom";


const Courses = function (props) {
    return (
        <div className={styles.coursesPage}>
            <div className={styles.coursesCategory}>
                <ul className={styles.categoryList}>Category:
                    <CategoryItem to="/courses/front_end" text="FrontEnd"/>
                    <CategoryItem to="/courses/back_end" text="BackEnd"/>
                    <CategoryItem to="/courses/oop" text="OOP"/>
                    <CategoryItem to="/courses/web_design" text="Web-design"/>
                    <CategoryItem to="/courses/all_courses" text="Всі курси"/>
                </ul>
            </div>
            <div className={styles.coursesList}>
                <Route exact path="/courses/" render={() => props.coursesDisplay.AllCoursesView} />
                <Route exact path="/courses/front_end" render={() => props.coursesDisplay.FrontEndView} />
                <Route exact path="/courses/back_end" render={() => props.coursesDisplay.BackEndView} />
                <Route exact path="/courses/oop" render={() => props.coursesDisplay.OOPView} />
                <Route exact path="/courses/web_design" render={() => props.coursesDisplay.WebDesignView} />
                <Route exact path="/courses/all_courses" render={() => props.coursesDisplay.AllCoursesView} />

                <Route exact path="/courses/front_end/html_css_coder" render={() => <div>Course under development</div>}/>

            </div>
        </div>
    );
}


export default Courses;
