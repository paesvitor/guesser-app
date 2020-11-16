import { all } from 'redux-saga/effects';

import userSagas from './modules/user/sagas'
import roomSagas from './modules/room/sagas'

export default function* rootSaga() {
    yield all([userSagas(), roomSagas()]);
}
