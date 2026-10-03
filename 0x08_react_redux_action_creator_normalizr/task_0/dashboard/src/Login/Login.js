import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
  }

  handleChangeEmail(e) {
    const email = e.target.value;
    this.setState({ email, enableSubmit: email !== '' && this.state.password !== '' });
  }

  handleChangePassword(e) {
    const password = e.target.value;
    this.setState({ password, enableSubmit: this.state.email !== '' && password !== '' });
  }

  render() {
    const { email, password, enableSubmit } = this.state;
    return (
      <>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChangeEmail}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleChangePassword}
          />
          <input type="submit" value="OK" disabled={!enableSubmit} />
        </form>
      </>
    );
  }
}

Login.propTypes = {
  logIn: PropTypes.func,
};

Login.defaultProps = {
  logIn: () => {},
};

export default Login;
