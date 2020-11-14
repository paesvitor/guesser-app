import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import { roomActions } from './actions';
import { RoomActionTypes, IRoomRootState } from './types';

const INITIAL_STATE: IRoomRootState = {
      code: 3903,
      canSendHunch: true,
      round: {
          current: 2,
          max: 10,
          endsAt: Date.now() + 30000,
          question: {
              category: 'Nomes do Brasil',
              value: 'Quantas pessoas possuem o nome Flávio no Brasil?',
              answer: 34300
          }
      },

      players: [
          {
              name: 'Cezinha',
              avatar: 2,
              ready: false,
              score: 3545
          },

          {
              name: 'Cezinha 2',
              avatar: 3,
              ready: false,
              score: 3432
          },

          {
              name: 'Cezinha 3',
              avatar: 5,
              ready: false,
              score: 304903
          },

          {
              name: 'Cezinha 3',
              avatar: 12,
              ready: false,
              score: 1231245
          }
      ]
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

          
        default:
            return state;
    }
};

export default reducer

