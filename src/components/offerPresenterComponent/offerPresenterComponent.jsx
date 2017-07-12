import React, {PropTypes} from "react";

const OfferTable = ({offers}) =>
    (
        <table>
            <thead>
            <tr>
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
            {offers && offers.map((offer) =>
                <tr key={offer.id}>
                    <td>{offer.name.toLowerCase()}</td>
                    <td>{offer.offerType.toLowerCase()}</td>
                    <td>{offer.productGroup.toLowerCase()}</td>
                    <td>{offer.quality}</td>
                    <td>{offer.price}</td>
                    <td>{offer.massUnit.toLowerCase()}</td>
                    <td>{new Date(offer.publishDate).toLocaleDateString()}</td>
                </tr>)}
            </tbody>
        </table>
    );

OfferTable.propTypes = {
    offers: PropTypes.array,
}

export default OfferTable