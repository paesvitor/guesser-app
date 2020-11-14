import { action } from "typesafe-actions";
import { RoomActionTypes } from './types'

export const roomActions = {
    closeRoundHund: () => action(RoomActionTypes.closeRoundHunch),
    openRoundHund: () => action(RoomActionTypes.openRoundHunch)
}