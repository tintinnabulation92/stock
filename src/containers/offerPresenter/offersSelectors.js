import { createSelector } from 'reselect';

const selectExampleDomain = () => (state) => state.offersReducer;

const makeSelectOffer = () => createSelector(
  selectExampleDomain(),
  (substate) => {
    return substate.offers;
  }
);

const makeSelectDetailsOffer = () => createSelector(
    selectExampleDomain(),
    (substate) => {
        return substate.offerFetched;  
    }
);

const makeSelectShowModalDetails = () => createSelector(
  selectExampleDomain(),
  (substate) => {
    return substate.showModalDetails;
  }
);


export {

  makeSelectOffer,
  makeSelectDetailsOffer,
  makeSelectShowModalDetails,
   
};

