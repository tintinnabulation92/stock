import React, {PropTypes} from "react";
import {Field, reduxForm} from 'redux-form'
import cls from "./searchOffersComponent.css"


const SearchOffersFormComponent = ({handleSubmit}) =>
    <form onSubmit={handleSubmit} className={cls.formAttribute}>
        <h3>Szukaj ofert:</h3>
        <div>
            <label htmlFor="name">Nazwa oferty </label>
            <Field name="name" component="input" type="text" placeholder="Nazwa oferty"/>
        </div>
        <div>
            <label htmlFor="offerType">Typ oferty </label>
            <Field name="offerType" component="select">
                <option></option>
                <option value="BUY">Buy</option>
                <option value="SELL">Sell</option>
                <option value="EXCHANGE">Exchange</option>
            </Field>
        </div>
        <div>
            <label htmlFor="productGroup">Kategoria </label>
            <label><Field name="productGroup" component="input" type="radio" value="VEGETABLES" /> Vegetables</label>
            <label><Field name="productGroup" component="input" type="radio" value="FRUITS"/> Fruits</label>
        </div>

        <button type="submit" >Szukaj</button>
    </form>


SearchOffersFormComponent.propTypes = {
    handleSubmit: PropTypes.func,
}

const SearchOffersComponent = reduxForm({
    form: 'searchOffers'
})(SearchOffersFormComponent)

export default SearchOffersComponent;