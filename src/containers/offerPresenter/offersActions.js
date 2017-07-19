export const OFFERS_RECEIVED= 'app/offerPresenter/OFFERS_RECEIVED';
export const FETCH_OFFERS= 'app/offerPresenter/FETCH_OFFERS';
export const FETCH_OFFER= 'app/offerPresenter/FETCH_OFFER';
export const OFFER_RECEIVED= 'app/offerPresenter/OFFER_RECEIVED';

export const SHOW_MODAL_DETAILS= 'app/offerPresenter/SHOW_MODAL_DETAILS';

export const SHOW_MODAL= 'app/offerPresenter/SHOW_MODAL';
export const ADD_OFFER= 'app/offerPresenter/ADD_OFFER';
export const ADD_OFFER_SUCCESS= 'app/offerPresenter/ADD_OFFER_SUCCESS';
export const FETCH_OFFERS_ERROR= 'app/offerPresenter/FETCH_OFFERS_ERROR';
export const ADD_OFFER_ERROR= 'app/offerPresenter/ADD_OFFER_ERROR';
export const SEARCH_OFFERS= 'app/offerPresenter/SEARCH_OFFERS';
export const SEARCH_OFFERS_ERROR= 'app/offerPresenter/SEARCH_OFFERS_ERROR';


export const fetchOffers = () => ({
    type: FETCH_OFFERS,
});

export const offersReceived = (offers) => ({
    type: OFFERS_RECEIVED,
    offers,
});


export const offerReceived = (fetchedOffer) => ({
    type: OFFER_RECEIVED,
    fetchedOffer,
});

export const fetchOffer = (id) => ({
    type: FETCH_OFFER,
    id,
});

export const showModalDetails = () => (
    {
        type: SHOW_MODAL_DETAILS,
    }
);


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

export const searchOffers = (searchForm) => ({
    type: SEARCH_OFFERS,
    searchForm,
});

export const searchOffersError = () => ({
    type: SEARCH_OFFERS_ERROR,
});
