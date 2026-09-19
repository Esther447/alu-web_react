import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email" className={css(styles.margin)}>Email: </label>
      <input type="email" id="email" name="email" className={css(styles.margin)} />
      <label htmlFor="password" className={css(styles.margin)}>Password: </label>
      <input type="password" id="password" name="password" className={css(styles.margin)} />
      <button type="button">OK</button>
    </>
  );
}

const styles = StyleSheet.create({
  margin: { margin: '0 10px 0 0' },
});

export default Login;
