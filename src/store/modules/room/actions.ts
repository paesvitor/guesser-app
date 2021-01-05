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
};
