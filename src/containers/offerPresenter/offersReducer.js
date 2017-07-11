import {
  OFFERS_RECEIVED, SHOW_OFFER
} from './offersActions';

const initialState = {
  offers: null,
};

function offersReducer(state = initialState, action) {
  switch (action.type) {
      case OFFERS_RECEIVED:
      return Object.assign({}, state, {
        offers: action.offers
      });

      case SHOW_OFFER:
          return Object.assign({}, state, {
              offers: action.offers
          });

    default:
      return state;
  }
}

export default offersReducer;
