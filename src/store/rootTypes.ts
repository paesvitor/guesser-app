import { IRoomRootState } from "./modules/room/types";
import { IUserRootState } from "./modules/user/types";
import { IUiRootState } from "./modules/ui/types";

export interface IAppRootState {
  room: IRoomRootState;
  user: IUserRootState;
  ui: IUiRootState;
  notifications: {
    notifications: [];
  };
}
