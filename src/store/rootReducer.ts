import { combineReducers } from 'redux';
import room from './modules/room/reducer';
import user from './modules/user/reducer';
import ui from './modules/ui/reducer';

// To useReduxAction hook

const initialState = {
    type: null,
    payload: null,
    meta: null,
    error: false
  };
  
const actionReducer = (state = initialState, action) => {
    return {
      ...state,
      ...action
    };
  };

export default combineReducers({
    room,
    user,
    ui,
    action: actionReducer
})