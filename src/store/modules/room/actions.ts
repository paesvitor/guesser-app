import { action } from "typesafe-actions";
import { RoomActionTypes, IPlayer, IRoomData } from "./types";

export const roomActions = {
  closeRoundHund: () => action(RoomActionTypes.closeRoundHunch),
  openRoundHund: () => action(RoomActionTypes.openRoundHunch),
  join: {
    request: (code: string) => action(RoomActionTypes.join.request, { code }),
    failure: () => action(RoomActionTypes.join.failure),
    success: (room: IRoomData) =>
      action(RoomActionTypes.join.success, { room }),
  },

  update: (room: IRoomData) => action(RoomActionTypes.update, { room }),

  create: {
    request: () => action(RoomActionTypes.create.request),
    failure: () => action(RoomActionTypes.create.request),
    success: (room: IRoomData) =>
      action(RoomActionTypes.create.request, { room }),
  },

  startNextRound: () => action(RoomActionTypes.startNextRound),
  finishRound: () => action(RoomActionTypes.finishRound),
  answer: (answer: any) => action(RoomActionTypes.answer, { answer }),
};
