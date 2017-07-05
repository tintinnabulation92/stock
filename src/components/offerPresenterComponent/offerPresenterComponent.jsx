import React, {PropTypes} from "react"
import cls from "./offerPresenterComponent.css"

const OfferPresenterComponent = ({offers}) =>
    <div className={cls.offersWrapper}>
        {offers && offers.map((offer) =>
            <ul key={offer.id}>
                <li>{offer.name} - cena: {offer.price}</li>
            </ul>)}
    </div>

OfferPresenterComponent.propTypes = {
    offers: PropTypes.array,
}

export default OfferPresenterComponent

