import {
    OFFERS_RECEIVED,
    SHOW_MODAL,
    ADD_OFFER,
    SEARCH_OFFERS,
} from './offersActions';

const initialState = {
    offers: null,
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
        default:
            return state;
    }
}

export default offersReducer;
