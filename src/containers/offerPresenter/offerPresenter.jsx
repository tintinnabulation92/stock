import React, {PropTypes} from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import OfferPresenterComponent from '../../components/offerPresenterComponent/offerPresenterComponent'
import AddOfferComponent from '../../components/addOfferComponent/addOfferComponent'

import {fetchOffers, showModal, addOffer} from './offersActions';
import {makeSelectOffer, makeSelectShowModal} from './offersSelectors';
import cls from './offerPresenter.css';

const OffersPresenter = ({fetchOffers, offers, showModal, modalVisible, addOffer}) => {

    return (
        <div className={cls.main}>
            <h2>Witaj na naszej giełdzie!</h2>
            <button onClick={fetchOffers}>Pokaż oferty!</button>
            <button onClick={showModal}>Dodaj ofertę!</button>
            <OfferPresenterComponent offers={offers}/>
            <AddOfferComponent isOpen={modalVisible} addOffer={addOffer} showModal={showModal}/>

        </div>
    );
}

OffersPresenter.propTypes = {
    fetchOffers: PropTypes.func.isRequired,
    offers: PropTypes.array,
    showModal: PropTypes.func,
    modalVisible: PropTypes.bool,
};


const mapStateToProps = createStructuredSelector({
    offers: makeSelectOffer(),
    modalVisible: makeSelectShowModal(),
});

const mapDispatchToProps = {
    fetchOffers,
    showModal,
    addOffer
};

export default connect(mapStateToProps, mapDispatchToProps)(OffersPresenter);
