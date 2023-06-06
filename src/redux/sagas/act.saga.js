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

function* actSaga(){
    yield takeLatest('GET_ACT', fetchAct);
  
}
export default actSaga;