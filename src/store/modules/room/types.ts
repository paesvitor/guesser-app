export const RoomActionTypes = {
  closeRoundHunch: "@ROOM/CLOSE_ROUND_HUND",
  openRoundHunch: "@ROOM/OPEN_ROUND_HUND",
  join: {
    request: "@ROOM/JOIN/REQUEST",
    success: "@ROOM/JOIN/SUCCESS",
    failure: "@ROOM/JOIN/FAILURE",
  },

  update: "@ROOM/UPDATE",

  create: {
    request: "@ROOM/CREATE/REQUEST",
    success: "@ROOM/CREATE/SUCCESS",
    failure: "@ROOM/CREATE/FAILURE",
  },

  startNextRound: "@ROOM/START_NEXT_ROUND",
  finishRound: "@ROOM/FINISH_ROUND",
  answer: "@ROOM/ANSWER",
  restart: "@ROOM/RESTART",
  disconnect: {
    request: "@ROOM/DISCONNECT/REQUEST",
    success: "@ROOM/DISCONNECT/SUCCESS",
  },
};

export interface IPlayer {
  _id: string;
  score: number;
  hasSentHunch: boolean;
  name: string;
  avatar: number;
  roundScore: number;
  hunch: number;
}

export interface IRoomData {
  code: string;
  status:
    | "WAITING_TO_START_GAME"
    | "READY_TO_ANSWER"
    | "WAITING_FOR_ROUND"
    | "GAME_OVER";
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
