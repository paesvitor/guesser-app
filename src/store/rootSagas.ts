import { all } from "redux-saga/effects";
import room from "./modules/room/sagas";

export default function* rootSagas() {
  yield all([room()]);
}
