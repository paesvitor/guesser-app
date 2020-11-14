export const RoomActionTypes = {
    closeRoundHunch: '@ROOM/CLOSE_ROUND_HUND',
    openRoundHunch: '@ROOM/OPEN_ROUND_HUND'
}

export interface IRoomRootState {
    code: number,
    canSendHunch: boolean,
    round: {
        current: number,
        max: number,
        endsAt: number,
        question: {
            category: string,
            value: string,
            answer: number
        }
    },

    players: {
        name: string,
        avatar: number,
        ready: boolean,
        score: number
    }[]
}