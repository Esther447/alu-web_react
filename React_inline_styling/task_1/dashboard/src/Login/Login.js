import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  margin: {
    margin: '10px 0',
  },
});

function Login() {
  return (
    <div className={css(styles.margin)}>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email: </label>
      <input type="email" id="email" name="email" />
      <label htmlFor="password">Password: </label>
      <input type="password" id="password" name="password" />
      <button type="button">OK</button>
    </div>
  );
}

export default Login;
