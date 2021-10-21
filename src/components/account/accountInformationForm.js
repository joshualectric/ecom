import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import history from '../../history';

import { FormInput, FormButton, LongGrayButton } from '../formFields';

class AccountInformationForm extends Component {
    render() {
        const { className, handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit} className={`${className} account-information-form`}>
                <Field className='account-information-form__name' 
                type='name' 
                title='Name' 
                name='name' 
                placeholder='Name' 
                component={FormInput} />
                <Field className='account-information-form__email' 
                type='email' 
                title='Email' 
                name='email' 
                placeholder='Email' 
                component={FormInput} />

                <Field className='account-information-form__street-address' 
                type='address' 
                title='Street Address' 
                name='address' 
                placeholder='Street Address' 
                component={FormInput} />
                <Field className='account-information-form__city' 
                type='city' 
                title='City' 
                name='city' 
                placeholder='City' 
                component={FormInput} />

                <Field className='account-information-form__state' 
                type='state' 
                title='State' 
                name='state' 
                placeholder='State' 
                component={FormInput} />
                <Field className='account-information-form__zipcode' 
                type='zipcode' 
                title='Zipcode' 
                name='zipcode' 
                placeholder='Zipcode' 
                component={FormInput} />
       
                <Field className='account-information-form__change-password' 
                onClick={() => console.log('tryna show passwords')}
                type='button'
                labelTitle='Password'
                title='Change Password' 
                name='change-password' 
                component={LongGrayButton} />
                
            </form>
        )
    }
}

AccountInformationForm = reduxForm({
    form: 'AccountInformationForm'
})(AccountInformationForm);

export default AccountInformationForm;