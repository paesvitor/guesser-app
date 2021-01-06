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
import { roomSelectors } from "./selectors";

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
        message: "Erro ao entrar na sala",
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

function* create(action: ActionType<typeof roomActions.create.request>) {
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

function* answer(action: ActionType<typeof roomActions.answer>) {
  try {
    const player = yield select(userSelectors.getUser);
    const code = yield select(roomSelectors.getRoomCode);

    const response = yield api.post(`/rooms/${code}/answer`, {
      player: {
        name: player.name,
        hunch: action.payload.answer,
      },
    });
  } catch (error) {
    yield put(
      notificationsActions.enqueue({
        message: "Erro ao criar sala",
        options: {
          variant: "error",
        },
      })
    );
  }
}

function* startNextRound(
  action: ActionType<typeof roomActions.startNextRound>
) {
  try {
    const player = yield select(userSelectors.getUser);
    const code = yield select(roomSelectors.getRoomCode);
    const x = yield select((state) => state);

    console.log(code);
    console.log(x);

    yield api.post(`/rooms/${code}/next-round`, {
      player: {
        name: player.name,
      },
    });
  } catch (error) {
    yield put(
      notificationsActions.enqueue({
        message: "Erro ao comecar o round",
        options: {
          variant: "error",
        },
      })
    );
  }
}

function* finishRound(action: ActionType<typeof roomActions.finishRound>) {
  try {
    const player = yield select(userSelectors.getUser);
    const code = yield select(roomSelectors.getRoomCode);

    yield api.post(`/rooms/${code}/finish-round`, {
      player: {
        name: player.name,
      },
    });
  } catch (error) {
    yield put(
      notificationsActions.enqueue({
        message: "Erro ao comecar o round",
        options: {
          variant: "error",
        },
      })
    );
  }
}

function* restart(action: ActionType<typeof roomActions.restart>) {
  try {
    const player = yield select(userSelectors.getUser);
    const code = yield select(roomSelectors.getRoomCode);

    yield api.post(`/rooms/${code}/restart`, {
      player: {
        name: player.name,
      },
    });
  } catch (error) {
    yield put(
      notificationsActions.enqueue({
        message: "Erro ao reiniciar a partida",
        options: {
          variant: "error",
        },
      })
    );
  }
}

export default function* root() {
  yield takeLatest(RoomActionTypes.join.request, join);
  yield takeLatest(RoomActionTypes.create.request, create);
  yield takeLatest(RoomActionTypes.startNextRound, startNextRound);
  yield takeLatest(RoomActionTypes.answer, answer);
  yield takeLatest(RoomActionTypes.finishRound, finishRound);
  yield takeLatest(RoomActionTypes.restart, restart);
}
