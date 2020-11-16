import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import { roomActions } from './actions';
import { RoomActionTypes, IRoomRootState } from './types';

const INITIAL_STATE: IRoomRootState = {
      id: null,
      owner: null,
    //   round: {
    //       current: 2,
    //       max: 10,
    //       endsAt: Date.now() + 30000,
    //       question: {
    //           category: 'Nomes do Brasil',
    //           value: 'Quantas pessoas possuem o nome Flávio no Brasil?',
    //           answer: 34300
    //       }
    //   },

      players: []
};

const reducer: Reducer<
    typeof INITIAL_STATE
> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RoomActionTypes.openRoundHunch:
            return {
                ...state,
                avatar: action.payload.avatarId
            };

            case RoomActionTypes.setRoom:
                return {
                    ...action.payload.room
                };
        default:
            return state;
    }
};

export default reducer

