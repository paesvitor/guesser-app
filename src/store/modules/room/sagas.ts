import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import { RoomActionTypes } from './types';
import { roomActions } from './actions';
import axios from 'axios';
import wrapperAxios from '../../../utils/axiosClient';

function* create(action: ActionType<typeof roomActions.requestCreate>) {
    try {
        const data = yield wrapperAxios.post('https://run.mocky.io/v3/f1f1d44a-4613-48b5-8282-ae41bd8ca3db');
        
        yield put({
            type: RoomActionTypes.create.success,
        })

    } catch (error) {
        console.log(error)

        yield put({
            type: RoomActionTypes.create.failure,
        })
    }
}

export default function* root() {
    yield takeLatest(RoomActionTypes.create.request, create);
}
