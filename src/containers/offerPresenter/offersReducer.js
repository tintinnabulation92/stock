import {
    OFFERS_RECEIVED,
    SHOW_MODAL,
    ADD_OFFER
} from './offersActions';

const initialState = {
    offers: null,
    showModal: false,
    form: null,
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
        default:
            return state;
    }
}

export default offersReducer;
