import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import OfferPresenterComponent from "../../components/offerPresenterComponent/offerPresenterComponent";
import {fetchOffers} from "./offersActions";
import {makeSelectOffer} from "./offersSelectors";

class OffersPresenter extends React.PureComponent {

    componentWillMount() {
        this.props.fetchOffers();
    }

    render() {
        return (
            <div>
                <h2>Witaj na naszej giełdzie!</h2>
                <OfferPresenterComponent offers={this.props.offers}/>
            </div>
        );
    }
}

OffersPresenter.propTypes = {
    fetchOffers: PropTypes.func.isRequired,
    offers: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
    offers: makeSelectOffer(),
});

const mapDispatchToProps = {
    fetchOffers,
};

export default connect(mapStateToProps, mapDispatchToProps)(OffersPresenter);
