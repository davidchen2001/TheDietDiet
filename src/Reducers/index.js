import { combineReducers } from 'redux';
import errorReducer from './ErrorReducer';
import authReducer from './AuthReducer';
import imageReducer from './ImageReducer';

export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    image: imageReducer
});