import React, {PropTypes} from "react";
import Modal from 'react-modal';


const OfferDetailsComponent = ({visible, popoutModalWindow}) => {
    return (
        <div>
            <Modal id="showDetails" visible ={visible} contentLabel = "Modal">
                <h1> Modal View - Offer Details Component</h1>
                <button onClick={popoutModalWindow}> Modal.Acton </button>
            </Modal>

        </div>
    );
}

OfferDetailsComponent.PropTypes = {
    visible:PropTypes.bool,
    popoutModalWindow: PropTypes.func,
}


export default OfferDetailsComponent