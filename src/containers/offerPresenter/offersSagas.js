import {take, takeLatest, call, cancel, put, select} from 'redux-saga/effects';
import {getContext} from '../../utils/context';

import request from '../../utils/request'

import {
    FETCH_OFFERS,
    ADD_OFFER,
    offersReceived,
    addOfferSuccess
} from './offersActions';

export function* fetchOffersSaga(action) {
    const endpoint = 'offers';
    const contextPath = getContext();
    const url = `${contextPath}/api/${endpoint}`
    console.log(url)
    const options = {
        method: 'GET',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
    }

    try {
        const res = yield call(request, url, options);
        console.log(res);
        yield put(offersReceived(res.json));
    } catch (err) {
        yield put(offersReceived('ERROR WHILE FETCHING OFFERS'));
    }
}

export function* addOfferSaga(action) {
    const endpoint = 'offer/create';
    const contextPath = getContext();
    const url = `${contextPath}/api/${endpoint}`
    console.log(url)
    const options = {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(action.form)
    }

    try {
        const res = yield call(request, url, options);
        console.log(res);
        yield put(addOfferSuccess());
    } catch (err) {
        yield put(addOfferSuccess('ERROR WHILE SENDING OFFER'));
    }
}

export function* rootSaga() {
    const watchSendFiles = yield takeLatest(FETCH_OFFERS, fetchOffersSaga);
    const sendOffer= yield takeLatest(ADD_OFFER,addOfferSaga)
}

export default rootSaga;
