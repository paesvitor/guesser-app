import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import { UserActionTypes } from './types';
import { userActions } from './actions';
import { firebaseApp } from '../../../utils/firebase/config';

function* auth(action: ActionType<typeof userActions.auth>) {
    try {
        yield firebaseApp.auth().signInAnonymously();
    } catch (error) {
       yield console.log(error)
    }
}

export default function* root() {
    yield takeLatest(UserActionTypes.auth, auth);
}
