import React, {PropTypes} from 'react'
import {Field, reduxForm} from 'redux-form'

const OfferForm = ({handleSubmit}) =>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Nazwa oferty </label>
            <Field name="name" component="input" type="text" placeholder="Nazwa oferty" required/>
        </div>
        <br/>
        <div>
            <label htmlFor="offerType">Typ oferty </label>
            <Field name="offerType" component="select" required>
                <option></option>
                <option value="BUY">Buy</option>
                <option value="SELL">Sell</option>
                <option value="EXCHANGE">Exchange</option>
            </Field>
        </div>
        <br/>
        <div>
            <label htmlFor="category">Kategoria </label>
            <label><Field name="category" component="input" type="radio" value="VEGETABLES"/> Vegetables</label>
            <label><Field name="category" component="input" type="radio" value="FRUITS"/> Fruits</label>
        </div>
        <br/>
        <div>
            <label htmlFor="quality">Klasa jakości </label>
            <Field name="quality" component="select">
                <option></option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
            </Field>
        </div>
        <br/>
        <div>
            <label htmlFor="price">Cena jednostkowa </label>
            <Field name="price" component="input" type="number" placeholder="Cena za jednostkę" required/>
        </div>
        <br/>
        <div>
            <label htmlFor="unit">Jednostka </label>
            <Field name="unit" component="select" required>
                <option></option>
                <option value="KG">kg</option>
                <option value="T">t</option>
            </Field>
        </div>
        <br/>
        <div>
            <label htmlFor="description">Opis oferty </label>
            <Field name="description" component="textarea" type="text" placeholder="Podaj dodatkowe informacje" />
        </div>
        <br/>
        <div>
            <label htmlFor="transport">Zapewniam transport </label>
            <Field name="transport" component="input" type="checkbox" />
        </div>
        <br/>

        <button type="submit">Zapisz</button>
    </form>


OfferForm.propTypes = {
    handleSubmit: PropTypes.func,

}

const AddOfferForm = reduxForm({
    form: 'newOffer'
})(OfferForm)

export default AddOfferForm;