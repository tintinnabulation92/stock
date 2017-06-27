import {take, takeLatest, call, cancel, put, select} from 'redux-saga/effects';

import request from '../../utils/request'

import {
  FETCH_OFFERS,
  offersReceived,
} from './offersActions';

export function* fetchOffersSaga(action) {
  const endpoint = 'offers';
  const contextPath = 'http://localhost:9090';
  const url = `${contextPath}/api/${endpoint}`
    const options = {
    method: 'GET',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  }

  try {
    const res = yield call(request, url, options);
    console.log(res);
    yield put(offersReceived(res.json));
  } catch (err) {
    yield put(offersReceived('ERROR WHILE FETCHING OFFERS'));
  }
}

export function* rootSaga() {
  const watchSendFiles = yield takeLatest(FETCH_OFFERS, fetchOffersSaga);
}

export default rootSaga;
