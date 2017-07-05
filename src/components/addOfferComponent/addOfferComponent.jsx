import React, {PropTypes} from "react";
import Modal from 'react-modal';
import AddOfferForm from '../addOfferForm/addOfferForm'
import {createStructuredSelector} from 'reselect';
import cls from "./addOfferComponent.css"

const AddOfferComponent = ({isOpen, showModal, addOffer}) => {

    return (
        <div className={cls.modalDialog}>
            <Modal id="addOffer" isOpen={isOpen} contentLabel="Modal">
                <button onClick={showModal}>Cancel</button>
                <h2>Dodaj ofertę:</h2>
                <AddOfferForm onSubmit={addOffer}/>

            </Modal>
        </div>
    );
}


AddOfferComponent.propTypes = {
    isOpen: PropTypes.bool,
    showModal: PropTypes.func,
    addOffer: PropTypes.func,
}


export default AddOfferComponent