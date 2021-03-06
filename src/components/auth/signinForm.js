import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import Details from '../details';

import history from '../../history';

import { FormInput, FormButton } from '../formFields';

class SignInForm extends Component {
    render() {
        const { className, handleSubmit} = this.props;
        const links = [
            {
                _id: 0,
                title: 'Not registered? Create account here',
                onClick: () => hostory.push('/signup')
            },
            {
                _id: 1,
                title: 'Forgot account email?',
                onClick: () => console.log('forgot email')
            },
            {
                _id: 2,
                title: 'Forgot password?',
                onClick: () => console.log('forgot password')
            }
        ]
        return (
            <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
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
                <div className='sign-in-form__line'></div>
                <Field className='sign-in-form__login' 
                type='submit' 
                title='Login' 
                name='login' 
                component={FormButton} />
                <Details className='sign-in-form__details' title='QuickLinks' links={links} />
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm;