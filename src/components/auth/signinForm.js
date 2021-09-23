import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput } from '../formFields';

class SignInForm extends Component {
    render() {
        const { className } = this.props;
        return (
            <form className='sign-in-form'>
                <Field className='sign-in-form__email' 
                type='email' 
                title='Email' 
                name='email' 
                placeholder='Email' 
                component={FormInput} />
                <Field className='sign-in-form__password' 
                type='password' 
                title='Password' 
                name='password' 
                placeholder='Password' 
                component={FormInput} />
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm;