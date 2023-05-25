import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAct(){
    try {
        const act = yield axios.get('/act')
        yield put({ type: 'SET_ACT', payload: act.data })
    } catch (error) {
        console.log(`Error in fetchAct ${error}`);
        alert ('Something went wrong.')
    }
}

fuction* fetchActs(){
    try {
        const acts = yield axios.get
    }
}

function* actSaga(){
    yield takeLatest('GET_ACT', fetchAct);

}