import React, {PropTypes} from "react";
import Modal from 'react-modal';
import {Link} from 'react-router';
import OfferDetailsComponent from '../offerDetailsComponent/offerDetailsComponent'
import cls from "./offerPresenterComponent.css"


const OfferTable = ({offers,isModalOfferDetailsVisible,showDetailsModal,fetchedOffer,showOffer}) => {
    
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
                        <td> <button type="button" onClick={() => showOffer(offer.id)} className={cls.buttonDetails}> Pokaż szczegóły oferty</button> </td>
                        <td><Link to="editOffer">edytuj</Link></td>

                    </tr>)}
                </tbody>
            </table>

            <OfferDetailsComponent isModalOfferDetailsVisible = {isModalOfferDetailsVisible} showDetailsModal = {showDetailsModal} offer = {fetchedOffer}/>
           
        </div>
       );
}


OfferTable.propTypes = {
    offers: PropTypes.array,
    fetchedOffer: PropTypes.object,
    showOffer: PropTypes.func,
    isModalOfferDetailsVisible: PropTypes.bool,
    showDetailsModal: PropTypes.func,



}

export default OfferTable