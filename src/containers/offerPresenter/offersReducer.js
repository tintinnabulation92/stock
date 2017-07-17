import {
  OFFERS_RECEIVED, 
  OFFER_RECEIVED,
  SHOW_MODAL_DETAILS
} from './offersActions';

const initialState = {
    offers: null,
    offerFetched:null,   
    showModalDetails: false,
  
};

function offersReducer(state = initialState, action) {
  switch (action.type) {
      case OFFERS_RECEIVED:
      return Object.assign({}, state, {
        offers: action.offers
      });

     case OFFER_RECEIVED:
      return Object.assign({}, state, {
        offerFetched: action.offerFetched,   
        showModalDetails : !state.showModalDetails,
      });

      case SHOW_MODAL_DETAILS:
      return Object.assign({}, state, {
        showModalDetails: !state.showModalDetails,
      });

    default:
      return state;
  }
}

export default offersReducer;
