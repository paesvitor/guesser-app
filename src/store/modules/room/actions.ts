import { action } from "typesafe-actions";
import { RoomActionTypes } from './types'

export const roomActions = {
    closeRoundHund: () => action(RoomActionTypes.closeRoundHunch),
    openRoundHund: () => action(RoomActionTypes.openRoundHunch),
    setRoom: (room: any) => action(RoomActionTypes.setRoom, { room }),
    requestCreate: () => action(RoomActionTypes.create.request)
}