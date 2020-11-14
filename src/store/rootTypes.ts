import { IRoomRootState } from "./modules/room/types";
import { IUserRootState } from "./modules/user/types";

export interface IAppRootState {
    room: IRoomRootState,
    user: IUserRootState
}