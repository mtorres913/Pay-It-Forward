import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAct(){
    try {
        const act = yield axios.get('/act/random')
        yield put({ type: 'SET_ACT', payload: act.data })
    } catch (error) {
        console.log(`Error in fetchAct ${error}`);
        alert ('Something went wrong.')
    }
}

function* fetchCompletion() {
    try {
        const completion = yield axios.get('/act/')
        yield put({ type: 'SET_COMPLETION', payload: completion.data })
    } catch (error) {
        console.log(`Error in fetchCompletion ${error}`);
        alert ('Act may not be completed.')
    }
}

function* actSaga(){
    yield takeLatest('GET_ACT', fetchAct);
    yield takeLatest('GET_COMPLETION', fetchCompletion);
}
export default actSaga;