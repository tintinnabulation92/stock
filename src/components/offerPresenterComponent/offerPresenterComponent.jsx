import React, {PropTypes} from "react";
import Modal from 'react-modal';
import {Link} from 'react-router';


const OfferTable = ({offers,isOpen,showModalDetails,offerFetched,showOffer}) => {
    console.log('received offer', offerFetched && offerFetched.id);
    return (
        <div>
            <h3>Oto oferty znajdujące się w bazie: </h3>
            <table>
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
                    <th>Szczegóły Oferty</th>
                    <th> </th>

                </tr>
                </thead>
                <tbody>

                {offers && offers.map((offer) =>

                    <tr key={offer.id}>
                        <td>{offer.id} </td>
                        <td>{offer.name.toLowerCase()}</td>
                        <td>{offer.offerType.toLowerCase()}</td>
                        <td>{offer.productGroup.toLowerCase()}</td>
                        <td>{offer.quality}</td>
                        <td>{offer.price}</td>
                        <td>{offer.massUnit.toLowerCase()}</td>
                        <td>{new Date(offer.publishDate).toLocaleDateString()}</td>
                        <td> <button type="button" onClick={() => showOffer(offer.id)} className="details-offer-button"> Pokaż szczegóły oferty</button> </td>
                        <td><Link to="editOffer">edytuj</Link></td>

                    </tr>)}
                </tbody>
            </table>
            <Modal isOpen = {isOpen} contentLabel = "Modal">
                <button type="button" onClick = {showModalDetails}> Zamknij szczegóły oferty </button>
                {
                    offerFetched && <table>
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
                                <td>{offerFetched.id} </td>
                                <td>{offerFetched.name.toLowerCase()}</td>
                                <td>{offerFetched.offerType.toLowerCase()}</td>
                                <td>{offerFetched.productGroup.toLowerCase()}</td>
                                <td>{offerFetched.quality}</td>
                                <td>{offerFetched.price}</td>
                                <td>{offerFetched.massUnit.toLowerCase()}</td>
                                <td>{new Date(offerFetched.publishDate).toLocaleDateString()}</td>
                            </tr>
                        </tbody>
                    </table>
                }
            </Modal>
        </div>
       );
}


OfferTable.propTypes = {
    offers: PropTypes.array,
    offerFetched: PropTypes.object,
    showOffer: PropTypes.func,
    isOpen: PropTypes.bool,
    showModalDetails: PropTypes.func,



}

export default OfferTable