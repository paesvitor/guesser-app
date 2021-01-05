import { Reducer } from "redux";
import { ActionType } from "typesafe-actions";
import { roomActions } from "./actions";
import { RoomActionTypes, IRoomRootState } from "./types";

const INITIAL_STATE: Partial<IRoomRootState> = {
  loading: true,
  error: false,
  data: null,
};

const reducer: Reducer<typeof INITIAL_STATE> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case RoomActionTypes.join.request:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case RoomActionTypes.join.success:
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

    default:
      return state;
  }
};

export default reducer;
