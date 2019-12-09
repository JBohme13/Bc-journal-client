import React, { Component } from 'react'
import Context from '../Context'
import users from '../DummyStoe'
import TextInput from '../basicComponents/TextInput'
import Button from '../basicComponents/Button'
import SectionBanner from '../basicComponents/SectionBanner'
import './Login.css'

export default class Login extends Component {
    static contextType = Context

    handleLoginClick = (e, userName, userPassword) => {
        e.preventDefault();
        this.context.history.push('/home')
    }

    handleRegisterClick = e => {
        e.preventDefault();
        this.context.history.push('/register')
    }
    render() {
        return(
            <section className='main-container'>
                <SectionBanner name='Welcome to Backcountry Lines' />
                <SubBanner name='Please Login below' />
                <form id='login-form'>
                    <TextInput 
                        name='User Name'
                        id='user-name'
                        required='true'
                        placeholder='Your user name here'
                        //onChange={to be added}
                    />
                    <TextInput
                        name='Password'
                        id='password'
                        required='true'
                        placeholder='Your password here'
                        //onChange={to be added}
                    />
                    <Button
                        name='Login'
                        onClick={e => this.handleLoginClick(e)}
                    />
                </form>
                <SubBanner name='New to Backcounrty Journal? Click Register below to Sign up!' />
                <Button
                    name='Register' 
                    onClick={e => this.handleRegisterClick(e)}
                />
            </section>
        )
    }
}
