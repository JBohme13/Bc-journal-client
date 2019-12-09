import React, { Component } from 'react';
import Context from '../Context';

export default class LandingPage extends Component {
    static contextType = Context;
    handleLandingNext = () => {
        this.context.history.push('/login');
    }
    render () {
        return(
            <section id='landing-container'>
                <h2>Welcome to backcountry Journal</h2>
                <p>An app for logging your backcountry experiences, reading others trip reports, and sharing your passion for the outdoors with other enthusists!</p>
                <button 
                    id='landing-next-button'
                    onClick={e => this.handleLandingNext(e)}
                >
                    Continue
                </button>
            </section>
        )
    }
}