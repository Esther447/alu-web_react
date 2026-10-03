import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';
import AppContext from '../App/AppContext';
import './Header.css';

const styles = StyleSheet.create({
  link: {
    cursor: 'pointer',
    color: '#e1003c',
  },
});

class Header extends React.Component {
  render() {
    const { user, logOut } = this.context;
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
        {user.isLoggedIn && (
          <p id="logoutSection">
            Welcome <strong>{user.email}</strong> (
            <a onClick={logOut} className={css(styles.link)}>Log out</a>)
          </p>
        )}
      </div>
    );
  }
}

Header.contextType = AppContext;

export default Header;
