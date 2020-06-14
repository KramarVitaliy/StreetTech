import React from 'react';
import styles from './Header.module.css';
import PageviewIcon from '@material-ui/icons/Pageview';
import {NavLink} from 'react-router-dom';


const Header = function (props) {
    const search = React.createRef();
    const findCourse = () => {
        let courses = props.coursesData[0].Courses.concat(props.coursesData[1].Courses,props.coursesData[2].Courses,props.coursesData[3].Courses);
        let filterCourses = courses.filter(cours => cours.technologie === search.current.value);
        props.setSearchData(filterCourses);
    };
    return (
        <header>
            <NavLink to="/main/">
                <div className={styles.logo}></div>
            </NavLink>
            <div className={styles.search}>
                <input ref={search} type="search" name="search" id="search" placeholder="Знайди свій курс..."/>
                <button onClick={findCourse}><NavLink to="/StreetTech/courses/search_courses"><PageviewIcon fontSize="large"></PageviewIcon></NavLink></button>
            </div>
        </header>
    );
}


export default Header;
