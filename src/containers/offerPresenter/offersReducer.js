import {
  OFFERS_RECEIVED, 
  OFFER_RECEIVED,
  SHOW_MODAL
} from './offersActions';

const initialState = {
    offers: null,
    offerFetched:null,   
    showModal: false,
  
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
        showModal : !state.showModal,
      });

      case SHOW_MODAL:
      return Object.assign({}, state, {
        showModal: !state.showModal,
      });

    default:
      return state;
  }
}

export default offersReducer;
