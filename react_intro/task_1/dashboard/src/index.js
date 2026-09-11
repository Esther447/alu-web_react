import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Notifications from './Notifications';

ReactDOM.createRoot(document.getElementById('root-notifications')).render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
