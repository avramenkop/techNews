import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css'


import NavBar from "./components/navBar/NavBar";
import GlobalFeed from './pages/globalFeed/index';
import Article from './pages/article/index';

export default () => {
  return (
    <div className="App">
      <NavBar />
        <Switch>
          <Route exact path='/' component={GlobalFeed} />
          <Route path='/article' component={Article} />
        </Switch>
    </div>
  );
}
