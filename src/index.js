import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import state, {coursesData, usersData, usersLogin} from './store/store'

ReactDOM.render(
    <BrowserRouter>
        <App
            state={state}
            usersLogin={usersLogin}
            usersData={usersData}
            coursesData={coursesData}
        />

    </BrowserRouter>,
    document.getElementById('root')
);

