import React from 'react';
import styles from './App.module.css';
import SectionTop from './components/SectionTop/SectionTop'
import Footer from "./components/Footer/Footer";




const App = function(props) {
  return (
    <div className={styles.app}>
      <SectionTop
          state={props.state}
          coursesDisplay={props.coursesDisplay}
          usersLogin={props.usersLogin}
          usersData={props.usersData}
          coursesData={props.coursesData}
      />
      <Footer/>
    </div>
  );
}

export default App;
