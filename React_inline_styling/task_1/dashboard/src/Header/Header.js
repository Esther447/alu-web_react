import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    borderBottom: '3px solid #e0354b',
  },
  logo: {
    width: '200px',
    height: '200px',
  },
  h1: {
    marginLeft: '20px',
    color: '#e0354b',
  },
});

function Header() {
  return (
    <div className={css(styles.header)}>
      <img src={logo} className={css(styles.logo)} alt="logo" />
      <h1 className={css(styles.h1)}>School dashboard</h1>
    </div>
  );
}

export default Header;
