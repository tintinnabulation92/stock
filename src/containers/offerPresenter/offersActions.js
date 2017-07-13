export const OFFERS_RECEIVED= 'app/offerPresenter/OFFER_RECEIVED';
export const FETCH_OFFERS= 'app/offerPresenter/FETCH_OFFERS';

export const SHOW_OFFER= 'app/offerPresenter/SHOW_OFFER'; //added
export const FETCH_SINGLE_OFFER_DETAILS = 'app/offerPresenter/FETCH_SINGLE_OFFER_DETAILS'; //added

export const fetchOffers = () => ({
    type: FETCH_OFFERS,
});

export const offersReceived = (offers) => ({
    type: OFFERS_RECEIVED,
    offers,
});

/* get a single offer*/
export const offerReceived = (offer) => ({
    type: OFFER_RECEIVED,
    offer,
});

export const fetchOffer = () => ({
    type: FETCH_OFFER,
});


/*
export const showOffer = (offerID) => ({
    type: SHOW_OFFER,
    offerID,

});

export const fetchSingleOfferDetails = () => ({
    type: FETCH_SINGLE_OFFER_DETAILS,

});

//offer received
//offer - nowy -> w reducerze //do dokonczenia

export const offerReceived = (offer) => ({
    type: OFFERS_RECEIVED,
    offer,
});

*/