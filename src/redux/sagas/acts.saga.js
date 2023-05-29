import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';


function* fetchActs(){
    try {
        const acts = yield axios.get('/acts')
        yield put({ type: 'SET_ACTS', payload: acts.data })
    } catch (error) {
        console.log(`Error in fetchActs ${error}`);
        alert ('Something went wrong.')
    }
}

function* actsSaga(){
    yield takeLatest('GET_ACTS', fetchActs);
}
export default actsSaga;