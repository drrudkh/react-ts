import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { REQUEST_DATA} from '../actions/types';
import { fetchData, requestDataFailed } from '../actions/creators';

export default function* watcherSaga() {
    yield takeEvery(REQUEST_DATA, workerSaga);
}

function* workerSaga() {
    yield delay(2000);
    try {
        const response = yield call(makeApiRequest);
        yield put(fetchData(response.data))
    } catch(error) {
        yield put(requestDataFailed(error))
    }
}

function makeApiRequest() {
    return axios.get('http://localhost:8080/src/books.json');
}