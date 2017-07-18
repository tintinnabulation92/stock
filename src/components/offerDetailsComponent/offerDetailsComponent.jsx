import React, {PropTypes} from "react";
import Modal from 'react-modal';
import {Link} from 'react-router';

const OfferDetailsComponent = ({offer,visible, popoutModalWindow}) => {
    return (
        <div>
            <button type="button" onClick={() => showOffer(offer.id)} className="details-offer-button"> Pokaż szczegóły oferty</button>
        </div>
    );
}

OfferDetailsComponent.propTypes = {
    visible:PropTypes.bool,
    popoutModalWindow: PropTypes.func,
   
}


export default OfferDetailsComponent