import React, { Component } from 'react'
import Context from '../Context'
import './Nav.css'

export default class Nav extends Component {
    static contextType = Context;
    render() {
        const value = this.context;

        const handleNavHome = () => {
            value.history.push('/home')
        };

        const handleNavService = () => {
            value.history.push('/social')
        };

        const handleNavEditInfo = () => {
            value.history.push('/edit-log')
        };

        const handleNavLogOut = () => {
            value.history.push('/login')
        }
        return(
            <section id='Nav'>
                <button 
                    className='nav-button'
                    onClick={handleNavHome}
                    >
                    Home
                </button>
                <button
                    className='nav-button'
                    onClick={handleNavEditInfo}
                >
                    New Log
                </button>
                <button
                    className='nav-button'
                    onClick={handleNavService}
                >
                    Social Log
                </button>
                <button
                    className='nav-button'
                    onClick={handleNavLogOut}
                >
                    Log Out
                </button>
            </section>
        )
    }
}