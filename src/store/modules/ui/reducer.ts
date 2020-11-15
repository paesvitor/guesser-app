import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import { uiActions } from './actions';
import { UiActionTypes, IUiRootState } from './types';

const INITIAL_STATE: IUiRootState = {
    backgroundColor: '#FAFE4E',
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

          
        default:
            return state;
    }
};

export default reducer;
