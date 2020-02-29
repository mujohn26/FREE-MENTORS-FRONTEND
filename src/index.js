import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import store from './store/index'
import './styles/index.scss';

ReactDOM.render(		
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));