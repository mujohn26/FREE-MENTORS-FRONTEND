import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import  Dashboad from './Dashboard.jsx' ;
import HomePage from './HomePage.jsx';
import {PrivateRoute } from './common/ProtectedRoute.jsx';

class App extends Component {
    render() {
        return (
            <Router>
            <Switch>
              <Route path='/auth' component={HomePage} />
              {/* <Route path='/auth/login' exact component={LoginPage} />  */}
              <PrivateRoute path='/' component={Dashboad} />
            </Switch>

          </Router>
        );
    }
}

export default App;