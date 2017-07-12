import React, {PropTypes} from 'react'
import {Field, reduxForm} from 'redux-form'
import cls from './addOfferForm.css'

const OfferForm = ({handleSubmit, showModal}) =>
    <form onSubmit={handleSubmit} className={cls.formAttribute}>
        <div>
            <label htmlFor="name">Nazwa oferty </label>
            <Field name="name" component="input" type="text" placeholder="Nazwa oferty" required/>
        </div>
        <div>
            <label htmlFor="offerType">Typ oferty </label>
            <Field name="offerType" component="select" required>
                <option></option>
                <option value="BUY">Buy</option>
                <option value="SELL">Sell</option>
                <option value="EXCHANGE">Exchange</option>
            </Field>
        </div>
        <div>
            <label htmlFor="productGroup">Kategoria </label>
            <label><Field name="productGroup" component="input" type="radio" value="VEGETABLES"/> Vegetables</label>
            <label><Field name="productGroup" component="input" type="radio" value="FRUITS"/> Fruits</label>
        </div>
        <div>
            <label htmlFor="quality">Klasa jakości </label>
            <Field name="quality" component="select">
                <option></option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
            </Field>
        </div>
        <div>
            <label htmlFor="price">Cena jednostkowa </label>
            <Field name="price" component="input" type="number" placeholder="Cena za jednostkę" required/>
        </div>
        <div>
            <label htmlFor="massUnit">Jednostka </label>
            <Field name="massUnit" component="select" required>
                <option></option>
                <option value="KG">kg</option>
                <option value="T">t</option>
            </Field>
        </div>
        <div>
            <label htmlFor="description">Opis oferty </label>
            <Field name="description" component="textarea" type="text" placeholder="Podaj dodatkowe informacje" />
        </div>
        <div>
            <label htmlFor="transport">Zapewniam transport </label>
            <Field name="transport" component="input" type="checkbox" />
        </div>
        <br/>

        <button type="submit" onClick={showModal}>Zapisz</button>
    </form>


OfferForm.propTypes = {
    handleSubmit: PropTypes.func,
    showModal: PropTypes.func,

}

const AddOfferForm = reduxForm({
    form: 'newOffer'
})(OfferForm)

export default AddOfferForm;