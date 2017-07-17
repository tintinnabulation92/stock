import {take, takeLatest, call, cancel, put, select} from 'redux-saga/effects';
import {getContext} from '../../utils/context';

import request from '../../utils/request'

import {      
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
        yield put(offerReceived('ERROR WHILE FETCHING OFFER'));
    }
}


export function* rootSaga() {
    const watchSendFiles = yield takeLatest(FETCH_OFFERS, fetchOffersSaga);

    const watchFetchOffer = yield takeLatest(FETCH_OFFER, fetchDetailedOfferSaga);
   
}

export default rootSaga;
