import React, { Component } from 'react';
import AppNavBar from '../components/common/AppNavBar.jsx';
import Footer from '../components/common/Footer.jsx';

class Login extends Component {
    render() {
        return (
            <div className='index'>
            <AppNavBar/>
            <Footer/>
            </div>
        );
    }
}

export default Login;