import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import history from '../../history';

import { FormInput, FormButton, LongGrayButton } from '../formFields';

class AccountInformationForm extends Component {

    constructor() {
        super()

        this.state = {
            showPasswords: false
        }
    }

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
                <div className='account-information-form__line'></div>
                {
                    this.state.showPasswords ?
                        [
                            <Field key={0} className='account-information-form__current'
                            type='password'
                            title='Current Password'
                            placeholder='Current Password'
                            name='current'
                            component={FormInput}/>,
                            <Field key={1} className='account-information-form__new'
                            type='password'
                            title='New Password'
                            placeholder='New Password'
                            name='new'
                            component={FormInput}/>,
                            <Field key={2} className='account-information-form__confirm'
                            type='password'
                            title='Confirm Password'
                            placeholder='Confirm Password'
                            name='confirm'
                            component={FormInput}/>,
                            <Field key={3} className='account-information-form__update-information' 
                            onClick={() => this.setState({ showPasswords: false })}
                            type='submit' 
                            title='Update Information' 
                            name='update-information' 
                            component={FormButton} />,
                            <Field key={4} className='account-information-form__cancel'
                            onClick={() => this.setState({ showPasswords: false })}
                            type='button'
                            title='Cancel'
                            name='cancel'
                            short={true} //Add this line of code
                            component={FormButton}/>
                        ]
                    
                    :
                            <Field className='account-information-form__change-password' 
                            onClick={() => this.setState({ showPasswords: true })}
                            type='button'
                            labelTitle='Password'
                            title='Change Password' 
                            name='change-password' 
                            component={LongGrayButton} />
                
                    }

                
                
            </form>
        )
    }
}

AccountInformationForm = reduxForm({
    form: 'AccountInformationForm'
})(AccountInformationForm);

export default AccountInformationForm;