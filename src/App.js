import React, { Component } from 'react';
import Main from './Main/Main';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import LandingPage from './LandingPage/LandingPage';
import Login from './Login/Login';
import Register from './Register/Register';
import Banner from './Banner/Banner';
import Home from './Home/Home';
import NewLog from './NewLog/NewLog';
import EditLog from './EditLog/EditLog';
import Social from './Social/Social';
import Context from './Context';
import { withRouter } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const routes = [
      {
        path: '/',
        exact: true,
        main: LandingPage,
        header: Banner,
      },
      {
        path: '/login',
        exact: false,
        main: Login,
        header: Banner,
      },
      {
        path: '/register',
        exact: false,
        main: Register,
        header: Banner,
      },
      {
        path: '/home',
        exact: false,
        main: Home,
        header: Nav,
      },
      {
        path: '/new-log',
        exact: false,
        main: NewLog,
        header: Nav,
      },
      {
        path: '/edit-log',
        exact: false,
        main: EditLog,
        header: Nav,
      },
      {
        path: '/social',
        exact: false,
        main: Social,
        header: Nav,
      }
    ];

    const contextValue = {
      history: this.props.history,
    }
    return(
      <Context.Provider
        value={contextValue}
      >
        <Header routes={routes} />
        <Main routes={routes} />
      </Context.Provider>
    )
  }
}

export default withRouter(App);
