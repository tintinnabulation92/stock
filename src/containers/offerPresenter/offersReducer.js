import {
    OFFERS_RECEIVED,
    OFFER_RECEIVED,
    SHOW_MODAL_DETAILS,
    SHOW_MODAL,
    ADD_OFFER,
    SEARCH_OFFERS,
    ADD_OFFER_SUCCESS,
} from './offersActions';

const initialState = {
    offers: null,
    offerFetched:null,
    showModalDetails: false,
    showModal: false,
    form: null,
    searchForm: null,
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

      case SHOW_MODAL:
          return Object.assign({}, state, {
              showModal: !state.showModal,
          });
      case ADD_OFFER:
          return Object.assign({}, state, {
              form: action.form,
          });
      case SEARCH_OFFERS:
          return Object.assign({}, state, {
              searchForm: action.searchForm,
          });
      case ADD_OFFER_SUCCESS:
          return Object.assign({}, state, {
              showModal: false,
          });
      default:
          return state;

      }

}

export default offersReducer;
