import { createSelector } from 'reselect';

const selectExampleDomain = () => (state) => state.offersReducer;

const makeSelectOffers = () => createSelector(
  selectExampleDomain(),
  (substate) => {
    return substate.offers;
  }
);

const makeSelectFetchedOffer = () => createSelector(
    selectExampleDomain(),
    (substate) => {
        return substate.fetchedOffer;  
    }
);

const makeSelectShowModalDetails = () => createSelector(
  selectExampleDomain(),
  (substate) => {
    return substate.showModalDetails;
  }
);


const makeSelectShowModal = () => createSelector(
    selectExampleDomain(),
    (substate) => {
        return substate.showModal;
    }
);




export {

  makeSelectOffers,
  makeSelectFetchedOffer,
  makeSelectShowModalDetails,
  makeSelectShowModal,

};
