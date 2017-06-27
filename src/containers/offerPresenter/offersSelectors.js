import { createSelector } from 'reselect';

const selectExampleDomain = () => (state) => state.offersReducer;

const makeSelectHelloMessage = () => createSelector(
  selectExampleDomain(),
  (substate) => {
    return substate.offers;
  }
);

export {
  makeSelectHelloMessage,
};
