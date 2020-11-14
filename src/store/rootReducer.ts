import { combineReducers } from 'redux';
import room from './modules/room/reducer';
import user from './modules/user/reducer';

export default combineReducers({
    room,
    user
})