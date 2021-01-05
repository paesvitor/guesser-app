import { combineReducers } from "redux";
import room from "./modules/room/reducer";
import user from "./modules/user/reducer";
import ui from "./modules/ui/reducer";
import notifications from "./modules/notifications/reducer";

export default combineReducers({
  room,
  user,
  ui,
  notifications,
});
