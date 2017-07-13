import React, {PropTypes} from "react";

const OfferTable = ({offers,showOffer}) =>
    (
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
                    <td>{offer.category.toLowerCase()}</td>
                    <td>{offer.quality}</td>
                    <td>{offer.price}</td>
                    <td>{offer.unit.toLowerCase()}</td>
                    <td>{new Date(offer.publishDate).toLocaleDateString()}</td>
                    <td> <button type="button" onClick={() => showOffer(offer.id)} className="details-offer-button"> Pokaż szczegóły oferty</button> </td>

                </tr>)}
            </tbody>
        </table>
    );

OfferTable.propTypes = {
    offers: PropTypes.array,
    showOffer: PropTypes.func,
}

export default OfferTable