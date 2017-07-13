import {
  OFFERS_RECEIVED, OFFER_RECEIVED
} from './offersActions';

const initialState = {
  offers: null,
    offer:null,
};

function offersReducer(state = initialState, action) {
  switch (action.type) {
      case OFFERS_RECEIVED:
      return Object.assign({}, state, {
        offers: action.offers
      });

     case OFFER_RECEIVED:
      return Object.assign({}, state, {
        offer: action.offer
      });

    default:
      return state;
  }
}

export default offersReducer;

/*

 case SHOW_OFFER:
          return Object.assign({}, state, {
              offers: action.offers
          });

      case FETCH_SINGLE_OFFER_DETAILS:
          return Object.assign({}, state, {
              offer: action.offer
          });

*/