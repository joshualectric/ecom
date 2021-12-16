import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import history from '../../history';

import { FormInput, FormButton } from '../formFields';

class ShippingForm extends Component {
    render() {
        const { className, handleSubmit} = this.props;
        
        return (
            <form onSubmit={handleSubmit} className={`${className} shipping-form`}>
                <Field className='shipping-form__name' 
                type='name' 
                title='name' 
                name='Name' 
                placeholder='Name' 
                component={FormInput} />
                <Field className='shipping-form__address' 
                type='address' 
                title='Street Address' 
                name='address' 
                placeholder='Street Address' 
                component={FormInput} />
                <Field className='shipping-form__city' 
                type='city' 
                title='City' 
                name='city' 
                placeholder='City' 
                component={FormInput} />
                <Field className='shipping-form__state' 
                type='state' 
                title='State' 
                name='state' 
                placeholder='State' 
                component={FormInput} />
                <Field className='shipping-form__zipcode' 
                type='zipcode' 
                title='Zipcode' 
                name='zipcode' 
                placeholder='Zipcode' 
                component={FormInput} />
                
                <div className='shipping-form__line'></div>
                <Field className='shipping-form__use-this-address' 
                onClick={() => history.push('/information/payment')}
                type='submit' 
                title='Use This Address' 
                name='use-this-address' 
                component={FormButton} />
                <Field className='shipping-form__back'
                onClick={() => history.push('/signin')}
                type='button'
                title='Back'
                name='back'
                short={true} //Add this line of code
                component={FormButton}/>
                
            </form>
        )
    }
}

ShippingForm = reduxForm({
    form: 'ShippingForm'
})(ShippingForm);

export default ShippingForm;