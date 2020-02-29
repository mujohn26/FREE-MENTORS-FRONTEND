import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
  import LoginPage from '../containers/Login.jsx';

class Welcome extends Component {
    render() {
        return (
            <Router>
            <Switch>
            <Route exact path='/auth'>
							<Redirect to='/auth/login' />
						</Route>
              <Route path='/auth/login' component={LoginPage} /> 
            </Switch>

          </Router>
        );
    }
}
export default Welcome;