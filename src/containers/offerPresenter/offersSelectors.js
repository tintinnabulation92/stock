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
        return substate.offer;
    }
);

const makeSelectDetailsVisible = () => createSelector(
    selectExampleDomain(),
    (substate) => {
        return substate.detailsModalVisible;
    }
);

export {
  makeSelectOffer,
    makeSelectDetailsOffer,
    makeSelectDetailsVisible

};

