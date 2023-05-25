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

function* fetchActs(){
    try {
        const acts = yield axios.get('/acts')
        yield put({ type: 'SET_ACTS', payload: acts.data })
    } catch (error) {
        console.log(`Error in fetchActs ${error}`);
        alert ('Something went wrong.')
    }
}

function* actSaga(){
    yield takeLatest('GET_ACT', fetchAct);
    yield takeLatest('GET_ACTS', fetchActs);
}
export default actSaga;