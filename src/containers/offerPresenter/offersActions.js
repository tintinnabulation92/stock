export const OFFERS_RECEIVED= 'app/offerPresenter/OFFER_RECEIVED';
export const FETCH_OFFERS= 'app/offerPresenter/FETCH_OFFERS';

export const fetchOffers = () => ({
    type: FETCH_OFFERS,
});

export const offersReceived = (offers) => ({
    type: OFFERS_RECEIVED,
    offers,
});
