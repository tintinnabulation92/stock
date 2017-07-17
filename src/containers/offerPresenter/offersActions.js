export const OFFERS_RECEIVED= 'app/offerPresenter/OFFERS_RECEIVED';
export const FETCH_OFFERS= 'app/offerPresenter/FETCH_OFFERS';
export const FETCH_OFFER= 'app/offerPresenter/FETCH_OFFER';
export const OFFER_RECEIVED= 'app/offerPresenter/OFFER_RECEIVED';

export const SHOW_MODAL= 'app/offerPresenter/SHOW_MODAL';


export const fetchOffers = () => ({
    type: FETCH_OFFERS,
});

export const offersReceived = (offers) => ({
    type: OFFERS_RECEIVED,
    offers,
});


export const offerReceived = (offerFetched) => ({
    type: OFFER_RECEIVED,
    offerFetched,  
});

export const fetchOffer = (id) => ({
    type: FETCH_OFFER,
    id,
});

export const showModalDetails = () => (
    {
        type: SHOW_MODAL,
    }
);

