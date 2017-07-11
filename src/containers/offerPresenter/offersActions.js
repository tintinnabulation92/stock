export const OFFERS_RECEIVED= 'app/offerPresenter/OFFER_RECEIVED';
export const FETCH_OFFERS= 'app/offerPresenter/FETCH_OFFERS';

export const SHOW_OFFER= 'app/offerPresenter/SHOW_OFFER'; //added

export const fetchOffers = () => ({
    type: FETCH_OFFERS,
});

export const offersReceived = (offers) => ({
    type: OFFERS_RECEIVED,
    offers,
});

export const showOffer = () => ({
    type: SHOW_OFFER,

});

