import { combineReducers } from 'redux';
import errorReducer from './ErrorReducer';
import authReducer from './AuthReducer';

export default combineReducers({
    error: errorReducer,
    auth: authReducer
});