import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Redirect, Route, Switch } from 'react-router';
import Home from './Home';
import Courses from './Courses';
import Navbar from '../partials/Navbar';

const App = () => {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/courses" component={Courses} />
          <Redirect to="/" />
        </Switch>
        </>
    )
}

export default App;