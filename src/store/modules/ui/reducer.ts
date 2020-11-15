import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import { uiActions } from './actions';
import { UiActionTypes, IUiRootState } from './types';

const INITIAL_STATE: IUiRootState = {
    backgroundColor: 'rgb(255, 234, 167)',
    backgroundImage: 'food'
};

const reducer: Reducer<
    typeof INITIAL_STATE
> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UiActionTypes.setAppBackgroundColor:
            return {
                ...state,
                backgroundColor: action.payload.backgroundColor
            };
            case UiActionTypes.setAppBackgroundImage:
                return {
                    ...state,
                    backgroundImage: action.payload.backgroundImage
                };
          
        default:
            return state;
    }
};

export default reducer;
