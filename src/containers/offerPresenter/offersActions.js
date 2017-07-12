export const OFFERS_RECEIVED= 'app/offerPresenter/OFFER_RECEIVED';
export const FETCH_OFFERS= 'app/offerPresenter/FETCH_OFFERS';
export const SHOW_MODAL= 'app/offerPresenter/SHOW_MODAL';
export const ADD_OFFER= 'app/offerPresenter/ADD_OFFER';
export const ADD_OFFER_SUCCESS= 'app/offerPresenter/ADD_OFFER_SUCCESS';
export const FETCH_OFFERS_ERROR= 'app/offerPresenter/FETCH_OFFERS_ERROR';
export const ADD_OFFER_ERROR= 'app/offerPresenter/ADD_OFFER_ERROR';


export const fetchOffers = () => ({
    type: FETCH_OFFERS,
});

export const offersReceived = (offers) => ({
    type: OFFERS_RECEIVED,
    offers,
});

export const fetchOffersError= () => ({
    type: FETCH_OFFERS_ERROR,
});


export const showModal = () => ({
    type: SHOW_MODAL,
});

export const addOffer = (form) => ({
    type: ADD_OFFER,
    form,
});

export const addOfferSuccess = () => ({
    type: ADD_OFFER_SUCCESS,
});

export const addOfferError = () => ({
    type: ADD_OFFER_ERROR,
});