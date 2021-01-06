import { Reducer } from "redux";
import { ActionType } from "typesafe-actions";
import { roomActions } from "./actions";
import { RoomActionTypes, IRoomRootState } from "./types";

const INITIAL_STATE: Partial<IRoomRootState> = {
  loading: false,
  error: false,
  data: null,
};

const reducer: Reducer<typeof INITIAL_STATE> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case RoomActionTypes.join.request:
    case RoomActionTypes.create.request:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case RoomActionTypes.join.success:
    case RoomActionTypes.create.success:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case RoomActionTypes.join.failure:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case RoomActionTypes.update:
      return {
        ...state,
        data: {
          ...action.payload.room,
        },
      };

    default:
      return state;
  }
};

export default reducer;
