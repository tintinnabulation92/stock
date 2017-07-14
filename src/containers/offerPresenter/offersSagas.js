import {take, takeLatest, call, cancel, put, select} from 'redux-saga/effects';
import {getContext} from '../../utils/context';

import request from '../../utils/request'

import {
    FETCH_OFFERS,
    ADD_OFFER,
    SEARCH_OFFERS,
    fetchOffers,
    offersReceived,
    addOfferSuccess,
    fetchOffersError,
    addOfferError,
    searchOffersError
} from './offersActions';

export function* fetchOffersSaga(action) {
    const endpoint = 'offers';
    const contextPath = getContext();
    const url = `${contextPath}/${endpoint}`
    const options = {
        method: 'GET',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
    }
    try {
        const res = yield call(request, url, options);
        yield put(offersReceived(res.json));
    } catch (err) {
        yield put(fetchOffersError('ERROR WHILE FETCHING OFFERS'));
    }
}

export function* addOfferSaga(action) {

    const endpoint = 'offer/create';
    const contextPath = getContext();
    const url = `${contextPath}/${endpoint}`
    const options = {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(action.form)
    }
    try {
        const res = yield call(request, url, options);
        yield put(addOfferSuccess());
        yield put(fetchOffers());
    } catch (err) {
        yield put(addOfferError('ERROR WHILE SENDING OFFER'));
    }
}

export function* searchOffersSaga(action) {
    const endpoint = 'offers/search';
    const contextPath = getContext();
    const name = action.searchForm.name ? `name=${action.searchForm.name}` : null;
    const productGroup = action.searchForm.productGroup ? `productGroup=${action.searchForm.productGroup}` : null;
    const offerType = action.searchForm.offerType ? `offerType=${action.searchForm.offerType}` : null;
    const paramsArray = [];
    if(name) {
        paramsArray.push(name);
    }
    if(productGroup) {
        paramsArray.push(productGroup);
    }
    if(offerType) {
        paramsArray.push(offerType);
    }
    const params = `?${paramsArray.join('&')}`;
    const url = `${contextPath}/${endpoint}${params}`
    const options = {
        method: 'GET',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
    }
    try {
        const res = yield call(request, url, options);
        yield put(offersReceived(res.json));
    } catch (err) {
        if(err.status === 404){
            yield put(offersReceived([]));
        }else{
            yield put(searchOffersError('ERROR WHILE SEARCHING OFFERS'));
        }
    }
}

export function* rootSaga() {
    const watchSendFiles = yield takeLatest(FETCH_OFFERS, fetchOffersSaga);
    const sendOffer= yield takeLatest(ADD_OFFER,addOfferSaga)
    const filterOffers= yield takeLatest(SEARCH_OFFERS,searchOffersSaga)
}

export default rootSaga;
