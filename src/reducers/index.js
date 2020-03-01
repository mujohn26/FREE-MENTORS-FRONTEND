import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import SignupReducer from './SignupReducer';
import GetMentorsReducer from './GetMentorsReducer';

export default combineReducers({
    LoginReducer,
    SignupReducer,
    GetMentorsReducer
});
