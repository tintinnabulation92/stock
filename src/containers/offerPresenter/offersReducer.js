import {
  OFFERS_RECEIVED
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

    //inny case

    default:
      return state;
  }
}

export default offersReducer;
