import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import history from '../../history';

import OrderSummary from './orderSummary';

import { FormInput, FormButton } from '../formFields';
import { UnderlinedTitle } from './infoHelp';

class PaymentForm extends Component {
    render() {
        const { className, handleSubmit} = this.props;
        
        return (
            <form onSubmit={handleSubmit} className={`${className} payment-form`}>
                <Field className='payment-form__name' 
                type='name' 
                title='Name on Credit Card' 
                name='Name' 
                placeholder='Name' 
                component={FormInput} />
                <Field className='payment-form__card' 
                type='card' 
                title='Credit Card Number' 
                name='card' 
                placeholder='____-____-____-____' 
                component={FormInput} />
                <Field className='payment-form__expiration' 
                type='expiration' 
                title='Expiration Date' 
                name='expiration' 
                placeholder='expiration' 
                component={FormInput} />
                <Field className='payment-form__ccv' 
                type='ccv' 
                title='CCV' 
                name='ccv' 
                placeholder='CCV' 
                component={FormInput} />

                <div className='payment-form__line'></div>
                <Field className='payment-form__pay-complete' 
                onClick={() => history.push('/information/payment')}
                type='submit' 
                title='Pay & Complete' 
                name='pay-complete' 
                component={FormButton} />
                <Field className='payment-form__back'
                onClick={() => history.push('/signin')}
                type='button'
                title='Back'
                name='back'
                short={true} //Add this line of code
                component={FormButton}/>
                <OrderSummary className='payment-form__order-summary'/>
                <div className='payment-form__shipping-info shipping-info'>
                    <UnderlinedTitle className='shipping-info__title' title='Shipping To'/>
                    <div className='shipping-info__name small-text'>Jordan Hudgens</div>
                    <div className='shipping-info__address small-text'>1234 address goes here</div>
                </div>
                
                
            </form>
        )
    }
}

PaymentForm = reduxForm({
    form: 'PaymentForm'
})(PaymentForm);

export default PaymentForm;