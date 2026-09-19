import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  margin: {
    margin: '10px 0',
  },
  label: {
    '@media (max-width: 900px)': {
      display: 'block',
    },
  },
  input: {
    '@media (max-width: 900px)': {
      display: 'block',
      width: '100%',
      marginBottom: '10px',
    },
  },
  button: {
    '@media (max-width: 900px)': {
      display: 'block',
      marginTop: '10px',
    },
  },
});

function Login() {
  return (
    <div className={css(styles.margin)}>
      <p>Login to access the full dashboard</p>
      <label className={css(styles.label)} htmlFor="email">Email: </label>
      <input className={css(styles.input)} type="email" id="email" name="email" />
      <label className={css(styles.label)} htmlFor="password">Password: </label>
      <input className={css(styles.input)} type="password" id="password" name="password" />
      <button className={css(styles.button)} type="button">OK</button>
    </div>
  );
}

export default Login;
