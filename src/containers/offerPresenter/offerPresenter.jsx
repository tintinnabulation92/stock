import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import OfferPresenterComponent from "../../components/offerPresenterComponent/offerPresenterComponent";


import {makeSelectDetailsOffer,makeSelectShowModalDetails} from "./offersSelectors";
import {fetchOffers,fetchOffer,showModalDetails} from "./offersActions";


import SearchOffersComponent from "../../components/searchOffersComponent/searchOffersComponent";
import {showModal, addOffer,searchOffers} from './offersActions';
import {makeSelectOffer, makeSelectShowModal} from './offersSelectors';
import AddOfferComponent from '../../components/addOfferComponent/addOfferComponent'
import OfferDetailsComponent from '../../components/OfferDetailsComponent/OfferDetailsComponent'

class OffersPresenter extends React.PureComponent {

    componentWillMount() {
        this.props.fetchOffers();
    }

    render() {
        return (
            <div>
                <h2> Witaj w  Agro Stock </h2>
                <SearchOffersComponent onSubmit={this.props.searchOffers}/>
                <OfferPresenterComponent 
                    offers={this.props.offers} 
                    showOffer={this.props.fetchOffer} 
                    isOpen = {this.props.modalDetailsVisible} 
                    showDetailsModal = {this.props.showModalDetails} 
                    fetchedOffer = {this.props.offerFetched}/> 
                <button onClick={this.props.showModal}>Dodaj ofertę!</button>
                <button className="expand-offers-button" onClick={this.props.fetchOffers}>Pokaż wszystkie oferty</button>
                <AddOfferComponent isOpen={this.props.modalVisible} addOffer={this.props.addOffer} showModal={this.props.showModal}/>
                
            </div>
        );
    }
}

OffersPresenter.propTypes = {
    fetchOffers: PropTypes.func.isRequired,
    offers: PropTypes.array,
    fetchOffer:PropTypes.func,
    offerFetched:PropTypes.object,
    showModalDetails: PropTypes.func,
    modalDetailsVisible: PropTypes.bool,
    showModal: PropTypes.func,
    modalVisible: PropTypes.bool,
    searchOffers: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
    offers: makeSelectOffer(),
    offerFetched: makeSelectDetailsOffer(),
    modalDetailsVisible: makeSelectShowModalDetails(),
    modalVisible: makeSelectShowModal(),
  });

const mapDispatchToProps = {
    fetchOffers,
    fetchOffer,
    showModalDetails,
    showModal,
    addOffer,
    searchOffers,
};

export default connect(mapStateToProps, mapDispatchToProps)(OffersPresenter);
