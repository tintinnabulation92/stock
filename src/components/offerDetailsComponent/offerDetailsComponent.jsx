import React, {PropTypes} from "react";
import Modal from 'react-modal';
import {Link} from 'react-router';
import cls from "./offerDetailsComponent.css"

const OfferDetailsComponent = ({isModalOfferDetailsVisible,showDetailsModal,offer}) => {
    return (
        <div>
           <Modal isOpen = {isModalOfferDetailsVisible} contentLabel = "Modal">
                <button type="button" onClick = {showDetailsModal}> Zamknij szczegóły oferty </button>
                {
                    offer && <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nazwa</th>
                                <th>Typ oferty</th>
                                <th>Kategoria</th>
                                <th>Klasa</th>
                                <th>Cena</th>
                                <th>Jednostka</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{offer.id} </td>
                                <td>{offer.name.toLowerCase()}</td>
                                <td>{offer.offerType.toLowerCase()}</td>
                                <td>{offer.productGroup.toLowerCase()}</td>
                                <td>{offer.quality}</td>
                                <td>{offer.price}</td>
                                <td>{offer.massUnit.toLowerCase()}</td>
                                <td>{new Date(offer.publishDate).toLocaleDateString()}</td>
                            </tr>
                        </tbody>
                    </table>
                }
            </Modal>
        </div>
    );
}

OfferDetailsComponent.propTypes = {
     offer: PropTypes.object,
     isModalOfferDetailsVisible: PropTypes.bool,
     showDetailsModal: PropTypes.func,
 }


export default OfferDetailsComponent