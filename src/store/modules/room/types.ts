export const RoomActionTypes = {
    closeRoundHunch: '@ROOM/CLOSE_ROUND_HUND',
    openRoundHunch: '@ROOM/OPEN_ROUND_HUND',
    setRoom: '@ROOM/SET_ROOM'
}

export interface IRoomRootState {
    id: string,
    owner: string,
    players: {
        name: string,
        avatar: number,
        ready: boolean,
        score: number
    }[]
}