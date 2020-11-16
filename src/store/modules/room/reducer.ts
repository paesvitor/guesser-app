import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import { roomActions } from './actions';
import { RoomActionTypes, IRoomRootState } from './types';

const INITIAL_STATE: IRoomRootState = {
    loading: false,
    error: false,
    data: {
        "room": {
            "code": "TJKLAL"
          },
          "scoreboard": [
            {
              "user": {
                "name": "RenataFan",
                "state": "READY",
                avatar: 1
              },
              "score": 0
            },
            {
              "user": {
                "name": "CraqueNeto",
                "state": "READY",
                avatar: 10
              },
              "score": 0
            }
          ]
    }
};

const reducer: Reducer<
    typeof INITIAL_STATE
> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case RoomActionTypes.create.request:
            return {
                ...state,
                loading: true
            };
        case RoomActionTypes.create.success:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer

