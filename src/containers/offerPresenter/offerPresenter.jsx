import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import OfferPresenterComponent from "../../components/offerPresenterComponent/offerPresenterComponent";
import cls from "./offerPresenter.css";
import OfferDetailsComponent from "../../components/offerDetailsComponent/offerDetailsComponent";
import {makeSelectOffer,makeSelectDetailsOffer,makeSelectShowModalDetails} from "./offersSelectors";
import {fetchOffers,fetchOffer,showModalDetails} from "./offersActions";



class OffersPresenter extends React.PureComponent {

    componentWillMount() {
        this.props.fetchOffers();
    }

    render() {
        return (
            <div>
                <h2> Witaj w  Agro Stock </h2>                                        
                <OfferPresenterComponent offers={this.props.offers} showOffer={this.props.fetchOffer} isOpen = {this.props.modalDetailsVisible} showModalDetails = {this.props.showModalDetails} offerFetched = {this.props.offerFetched}/>
                <button className="expand-offers-button" onClick={this.props.fetchOffers}>Pokaż wszystkie oferty</button>
                <OfferDetailsComponent />
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
   };

const mapStateToProps = createStructuredSelector({
    offers: makeSelectOffer(),
    offerFetched: makeSelectDetailsOffer(), 
    modalDetailsVisible: makeSelectShowModalDetails(),
});

const mapDispatchToProps = { 
    fetchOffers,
    fetchOffer,
    showModalDetails, 
};

export default connect(mapStateToProps, mapDispatchToProps)(OffersPresenter);

