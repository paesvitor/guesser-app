export const RoomActionTypes = {
    closeRoundHunch: '@ROOM/CLOSE_ROUND_HUND',
    openRoundHunch: '@ROOM/OPEN_ROUND_HUND',
    setRoom: '@ROOM/SET_ROOM',
    create: {
        request: '@ROOM/CREATE/REQUEST',
        success: '@ROOM/CREATE/SUCCESS',
        failure: '@ROOM/CREATE/FAILURE'
    }
}

export interface IRoomRootState {
    loading: boolean,
    error: boolean,
    data: {
        room: {
            code: string
        },
        scoreboard: {
            user: {
                name: string,
                state: 'READY' | 'NOT_READY',
                avatar: number
            },
            score: number
        }[]
    }
}