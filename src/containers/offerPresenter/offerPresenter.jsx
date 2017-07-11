import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import OfferPresenterComponent from "../../components/offerPresenterComponent/offerPresenterComponent";
import {fetchOffers} from "./offersActions";
import {makeSelectOffer} from "./offersSelectors";
import cls from "./offerPresenter.css";
import OfferDetailsComponent from "../../components/offerDetailsComponent/offerDetailsComponent";


import {showOffer} from "./offersActions";
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
            </div>
        );
    }
}*/
//function-based component

const  OffersPresenter = ({fetchOffers, offers,showOffer,visible, popoutModalWindow}) => {
    return (
        <div className="cls.test">
        <h2> Witaj w  Agro Stock </h2>
            <OfferPresenterComponent offers={offers}/>
            <button className="expand-offers-button" onClick={fetchOffers}>Pokaż wszystkie oferty</button>
            <button className="expand-offers-button" onClick={showOffer}>TEST BUTTON</button>
            <OfferDetailsComponent/>
            /*visible i popout?*/

        </div>
    );
}


OffersPresenter.propTypes = {
    fetchOffers: PropTypes.func.isRequired,
    offers: PropTypes.array,
    showOffer: PropTypes.func.isRequired,
    visible:PropTypes.bool,
    //popoutModalWindow: PropTypes.func.isRequired ?
};

const mapStateToProps = createStructuredSelector({
    offers: makeSelectOffer(),
});

const mapDispatchToProps = {
    fetchOffers,showOffer
};

export default connect(mapStateToProps, mapDispatchToProps)(OffersPresenter);
