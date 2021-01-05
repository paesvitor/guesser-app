export const RoomActionTypes = {
  closeRoundHunch: "@ROOM/CLOSE_ROUND_HUND",
  openRoundHunch: "@ROOM/OPEN_ROUND_HUND",
  join: {
    request: "@ROOM/JOIN/REQUEST",
    success: "@ROOM/JOIN/SUCCESS",
    failure: "@ROOM/JOIN/FAILURE",
  },

  create: {
    request: "@ROOM/CREATE/REQUEST",
    success: "@ROOM/CREATE/SUCCESS",
    failure: "@ROOM/CREATE/FAILURE",
  },
};

export interface IPlayer {
  _id: string;
  score: number;
  hasSentHunch: boolean;
  name: string;
  avatar: number;
}

export interface IRoomData {
  code: string;
  round: {
    canSendAnswer: boolean;
    current: number;
    total: number;
    finishAt: string;
    ready: boolean;
    question: {
      category: string;
      text: string;
      answer: number;
    };
  };

  owner: IPlayer;
  players: IPlayer[];
}

export interface IRoomRootState {
  loading: boolean;
  data?: IRoomData;
  error: boolean;
}
