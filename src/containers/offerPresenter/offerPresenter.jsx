import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import OfferPresenterComponent from "../../components/offerPresenterComponent/offerPresenterComponent";
import {fetchOffers, showModal, addOffer} from './offersActions';
import {makeSelectOffer, makeSelectShowModal} from './offersSelectors';
import AddOfferComponent from '../../components/addOfferComponent/addOfferComponent'


class OffersPresenter extends React.PureComponent {

    componentWillMount() {
        this.props.fetchOffers();
    }

    render() {
        return (
            <div>
                <h2>Witaj na naszej giełdzie!</h2>
                <OfferPresenterComponent offers={this.props.offers}/>
                <button onClick={this.props.showModal}>Dodaj ofertę!</button>
                <AddOfferComponent isOpen={this.props.modalVisible} addOffer={this.props.addOffer} showModal={this.props.showModal}/>
            </div>
        );
    }
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
