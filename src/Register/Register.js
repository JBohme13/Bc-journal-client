import React, { Component } from 'react';
import Context from '../Context';

export default class Register extends Component {
    static contextType = Context;

    handleRegisterNext = e => {
        e.preventDefault();
        this.context.history.push('./home')
    }
    render() {
        return(
            <section className='main-container'>
                <form id='login-form'>
                    <label htmlFor='user-name'>Select your user Name</label>
                    <input 
                        type='text'
                        id='user-name'
                        className='login-input'
                        name='user-name'
                        required={true}
                        aria-required='true'
                        placeholder='Your user name here'
                    />
                    <label htmlFor='password'>Enter your password</label>
                    <input
                        type='text'
                        id='password'
                        className='login-input'
                        name='password'
                        required={true}
                        aria-required='true'
                        placeholder='Your password here'
                    />
                    <button
                        type='submit'
                        id='login-button'
                        onClick={e => this.handleRegisterNext(e)}
                    >
                        Login
                    </button>
                </form>
            </section>
        )
    }
}