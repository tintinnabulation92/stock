import {take, takeLatest, call, cancel, put, select} from 'redux-saga/effects';
import {getContext} from '../../utils/context';

import request from '../../utils/request'

import {
    //SHOW_OFFER,
    FETCH_OFFERS,
    FETCH_OFFER,
    offersReceived,
    offerReceived,
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

export function* fetchDetailedOfferSaga(action) {
    const endpoint = `/offer/${action.id}`;
    /* const endpoint = `/offer/${action.offerID}`;*/
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
        yield put(offerReceived(res.json)); 
    } catch (err) {
        yield put(offerReceived('ERROR WHILE FETCHING OFFERS'));
    }
}


export function* rootSaga() {
    const watchSendFiles = yield takeLatest(FETCH_OFFERS, fetchOffersSaga);

    const watchFetchOffer = yield takeLatest(FETCH_OFFER, fetchDetailedOfferSaga);
   // const watchClickedButton = yield takeLatest(SHOW_OFFER,fetchOffersSaga);

   // const watchDetailedOffer = yield  takeLatest(FETCH_SINGLE_OFFER_DETAILS, getDetailedOfferSaga);
}

export default rootSaga;
