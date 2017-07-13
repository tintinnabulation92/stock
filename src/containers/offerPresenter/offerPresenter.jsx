import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import OfferPresenterComponent from "../../components/offerPresenterComponent/offerPresenterComponent";
import {fetchOffers} from "./offersActions";
import cls from "./offerPresenter.css";
import OfferDetailsComponent from "../../components/offerDetailsComponent/offerDetailsComponent";
import {makeSelectOffer} from "./offersSelectors";
import {makeSelectDetailsOffer} from "./offersSelectors";
import {fetchOffer} from "./offersActions";

import {makeSelectDetailsVisible} from "./offersSelectors";
import {showDetailsModal} from "./offersActions";

//import {showOffer} from "./offersActions";
//import {fetchSingleOfferDetails} from "./offersActions";


//import OfferDetailsComponent from "../../components/offerPresenterComponent/offerDetailsComponent";

/*class OffersPresenter extends React.PureComponent {

    componentWillMount() {
        this.props.fetchOffers();

    }

    render() {
        return (
            <div className={cls.test}>
                <h2>Witaj na naszej giełdzie!</h2>

                <OfferPresenterComponent offers={this.props.offers}/>
        );
    }
}*/
//function-based component

const  OffersPresenter = ({fetchOffers, offers,fetchOffer,offer,detailsVisible, showDetails, showDetailsModal}) => {
    return (
        <div className="cls.test">
        <h2> Witaj w  Agro Stock </h2>                                        {/*detailsVisible = {detailsVisible} */}
            <OfferPresenterComponent offers={offers} showOffer={fetchOffer} detailsVisible= {showDetails} showDetailsModal = {showDetailsModal}/>
            <button className="expand-offers-button" onClick={fetchOffers}>Pokaż wszystkie oferty</button>
           {/* <button className="expand-offers-button" onClick={showOffer}>TEST BUTTON</button> */}
           { /*<button className="expand-offers-button" onClick={fetchSingleOfferDetails}>Pobierz pojedyncza oferte - test</button>*/}
            <OfferDetailsComponent/>
            

        </div>
    );
}


OffersPresenter.propTypes = {
    fetchOffers: PropTypes.func.isRequired,
    offers: PropTypes.array,
    fetchOffer:PropTypes.func,
    offer:PropTypes.object,
    showDetails: PropTypes.bool,
    showDetailsModal: PropTypes.func,
   // detailsVisible:PropTypes.bool,
    
    //showOffer: PropTypes.func.isRequired,
   // visible:PropTypes.bool,
   // fetchSingleOfferDetails:PropTypes.func,
   // offer: PropTypes.func,

};

const mapStateToProps = createStructuredSelector({
    offers: makeSelectOffer(),
    offer: makeSelectDetailsOffer(),
    showDetails: makeSelectDetailsVisible(),
});

const mapDispatchToProps = {
    fetchOffers,
    fetchOffer,
    showDetailsModal,
    //showOffer
};

export default connect(mapStateToProps, mapDispatchToProps)(OffersPresenter);
