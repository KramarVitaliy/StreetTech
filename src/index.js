import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import state, {coursesDisplay} from './store/store'

ReactDOM.render(
  <BrowserRouter>
    <App state={state} coursesDisplay={coursesDisplay}/>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

