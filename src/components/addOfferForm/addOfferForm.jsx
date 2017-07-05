import React, {PropTypes} from 'react'
import { Field, reduxForm } from 'redux-form'

const OfferForm = ({handleSubmit}) =>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" component="input" type="text" />
            </div>
            <br/>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" component="input" type="text" />
            </div>
            <br/>
            <div>
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email" />
            </div>
            <button type="submit" >Submit</button>
        </form>


OfferForm.propTypes = {
    handleSubmit: PropTypes.func,

}

const AddOfferForm = reduxForm({
    form: 'newOffer'
})(OfferForm)

export default AddOfferForm;