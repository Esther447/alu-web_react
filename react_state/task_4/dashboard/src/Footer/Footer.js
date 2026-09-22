import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import AppContext from '../App/AppContext';
import './Footer.css';

function Footer() {
  return (
    <AppContext.Consumer>
      {({ user }) => (
        <div className="App-footer">
          <p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
          {user.isLoggedIn && (
            <p><a href="mailto:contact@school.com">Contact us</a></p>
          )}
        </div>
      )}
    </AppContext.Consumer>
  );
}

export default Footer;
