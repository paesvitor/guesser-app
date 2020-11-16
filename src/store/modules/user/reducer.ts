import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import { userActions } from './actions';
import { UserActionTypes, IUserRootState } from './types';

const INITIAL_STATE: IUserRootState = {
    avatar: 1,
    name: '',
    FCM_USER_TOKEN: null
};

const reducer: Reducer<
    typeof INITIAL_STATE
> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.setAvatar:
            return {
                ...state,
                avatar: action.payload.avatarId
            };

            case UserActionTypes.setUsername:
                return {
                    ...state,
                    name: action.payload.username
                };

        default:
            return state;
    }
};

export default reducer;
