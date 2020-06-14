import React from 'react';
import styles from './Courses.module.css';
import CategoryItem from "./categoryItem/CategoryItem";
import {Route} from "react-router-dom";
import {CoursesItem} from "./CoursesItem/CoursesItem";


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
                <Route
                    exact path="/courses/front_end"
                    render={() => props.coursesData[0].Courses.map(cours => {
                        return <CoursesItem key={cours.id} cours={cours} userData={props.userData} stateLogin={props.stateLogin}/>
                    })}
                />
                <Route
                    exact path="/courses/back_end"
                    render={() => props.coursesData[1].Courses.map(cours => {
                        return <CoursesItem key={cours.id} cours={cours} userData={props.userData} stateLogin={props.stateLogin}/>
                    })}
                />
                <Route
                    exact path="/courses/oop"
                    render={() => props.coursesData[2].Courses.map(cours => {
                        return <CoursesItem key={cours.id} cours={cours} userData={props.userData} stateLogin={props.stateLogin}/>
                    })}
                />
                <Route
                    exact path="/courses/web_design"
                    render={() => props.coursesData[3].Courses.map(cours => {
                        return <CoursesItem key={cours.id} cours={cours} userData={props.userData} stateLogin={props.stateLogin}/>
                    })}
                />
                <Route
                    exact path="/courses/all_courses"
                    render={() => {
                        let courses = props.coursesData[0].Courses.concat(props.coursesData[1].Courses,props.coursesData[2].Courses,props.coursesData[3].Courses);
                        console.log(courses);
                        return courses.map(cours => {
                            return <CoursesItem key={cours.id} cours={cours} userData={props.userData}  stateLogin={props.stateLogin}/>
                        })
                    }}
                />
                <Route
                    exact path="/courses/"
                    render={() => {
                        let courses = props.coursesData[0].Courses.concat(props.coursesData[1].Courses,props.coursesData[2].Courses,props.coursesData[3].Courses);
                        console.log(courses);
                        return courses.map(cours => {
                            return <CoursesItem key={cours.id} cours={cours} userData={props.userData} stateLogin={props.stateLogin}/>
                        })
                    }}
                />
                <Route
                    exact path="/courses/search_courses"
                    render={() => {
                        // console.log(props.searchData)
                        return props.searchData.map(cours => {
                            return <CoursesItem key={cours.id} cours={cours} userData={props.userData} stateLogin={props.stateLogin}/>
                        })
                    }}
                />


                <Route exact path="/courses/front_end/html_css_coder"
                       render={() => <div>Course under development</div>}/>
                <Route exact path="/courses/front_end/java_script"
                       render={() => <div>Course under development</div>}/>
                <Route exact path="/courses/back_end/python"
                       render={() => <div>Course under development</div>}/>
                <Route exact path="/courses/oop/java_oop"
                       render={() => <div>Course under development</div>}/>
                <Route exact path="/courses/web_design/figma_essential"
                       render={() => <div>Course under development</div>}/>

            </div>
        </div>
    );
}


export default Courses;
