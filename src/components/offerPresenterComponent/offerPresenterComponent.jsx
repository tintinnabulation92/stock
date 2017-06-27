import React, {PropTypes} from "react"
import cls from "./offerPresenterComponent.css"

const OfferPresenterComponent = ({offers}) =>
    <div className={cls.offersWrapper}>
        {offers && offers.map((offer) =>
            <ol key={offer.id}>
                <li>{offer.name} - cena: {offer.price}</li>
            </ol>)}
    </div>

OfferPresenterComponent.propTypes = {
    offers: PropTypes.array,
}

export default OfferPresenterComponent