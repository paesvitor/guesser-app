import { ActionType } from "typesafe-actions";
import { call, put, takeLatest, select } from "redux-saga/effects";
import { roomActions } from "./actions";
import { RoomActionTypes } from "./types";
import { api } from "../../../utils/api";
import { userSelectors } from "../user/selectors";
import {
  notificationsActions,
  NotificationsTypes,
} from "../notifications/actions";

function* join(action: ActionType<typeof roomActions.join.request>) {
  try {
    const player = yield select(userSelectors.getUser);

    const response = yield api.post(`/rooms/${action.payload.code}`, {
      player: {
        name: player.name,
        avatar: player.avatar,
      },
    });

    yield put({
      type: RoomActionTypes.join.success,
      payload: response.data,
    });
  } catch (error) {
    yield put(
      notificationsActions.enqueue({
        message: error.response.data.error,
        options: {
          variant: "error",
        },
      })
    );

    yield put({
      type: RoomActionTypes.join.failure,
      payload: "",
    });
  }
}

function* create(action: ActionType<typeof roomActions.join.request>) {
  try {
    const player = yield select(userSelectors.getUser);

    const response = yield api.post(`/rooms`, {
      player: {
        name: player.name,
        avatar: player.avatar,
      },
    });

    yield put({
      type: RoomActionTypes.create.success,
      payload: response.data.room,
    });
  } catch (error) {
    yield put(
      notificationsActions.enqueue({
        message: error.response.data.error || "Erro ao criar sala",
        options: {
          variant: "error",
        },
      })
    );

    yield put({
      type: RoomActionTypes.join.failure,
      payload: "",
    });
  }
}

export default function* root() {
  yield takeLatest(RoomActionTypes.join.request, join);
  yield takeLatest(RoomActionTypes.create.request, create);
}
