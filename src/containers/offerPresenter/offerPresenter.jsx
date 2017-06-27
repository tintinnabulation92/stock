import React, { PropTypes } from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import OfferPresenterComponent from '../../components/offerPresenterComponent/offerPresenterComponent'


import { fetchOffers } from './offersActions';
import { makeSelectHelloMessage } from './offersSelectors';
import cls from './offerPresenter.css';

const OffersPresenter = ({fetchOffers, offers})=>(
    <div className={cls.test}>
        <h2>Witaj na naszej giełdzie!</h2>
        <button onClick={fetchOffers}>Pokaż oferty!</button>
        <OfferPresenterComponent offers={offers} />
    </div>
);

OffersPresenter.propTypes = {
    fetchOffers: PropTypes.func.isRequired,
    offers: PropTypes.array,
};


const mapStateToProps = createStructuredSelector({
  offers: makeSelectHelloMessage(),
});

const mapDispatchToProps = {
  fetchOffers,
};

export default connect(mapStateToProps, mapDispatchToProps)(OffersPresenter);
