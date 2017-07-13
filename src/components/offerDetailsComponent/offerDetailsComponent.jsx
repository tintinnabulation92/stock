import React, {PropTypes} from "react";
import Modal from 'react-modal';


const OfferDetailsComponent = ({offer,isOpen}) => {
    return (
        <div>
            <Modal id="showDetails" isOpen = {isOpen} contentLabel = "Modal">
                <h1> Modal View - Offer Details Component</h1>
                {/*<button onClick={popoutModalWindow}> Modal.Acton </button>*/}
            </Modal>

        </div>
    );
}

OfferDetailsComponent.propTypes = {
    visible:PropTypes.bool,
    //popoutModalWindow: PropTypes.func,
   offer: PropTypes.object,
}


export default OfferDetailsComponent