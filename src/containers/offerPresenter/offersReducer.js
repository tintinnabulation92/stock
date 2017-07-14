import {
  OFFERS_RECEIVED, 
  OFFER_RECEIVED,
  SHOW_MODAL
} from './offersActions';

const initialState = {
    offers: null,
    offer:null,
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
        offer: action.offer,
        showModal : !state.showModalDetails,
      });

      case SHOW_MODAL:
      return Object.assign({}, state, {
        showModal: !state.showModalDetals,
      });

    default:
      return state;
  }
}

export default offersReducer;
