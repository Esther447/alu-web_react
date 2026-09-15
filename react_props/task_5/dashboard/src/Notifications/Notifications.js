import React from 'react';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';

function Notifications({ displayDrawer, listNotifications }) {
  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div className="Notifications">
          <button
            style={{ position: 'absolute', right: '15px', top: '15px', background: 'transparent', border: 'none', cursor: 'pointer' }}
            aria-label="Close"
            onClick={() => console.log('Close button has been clicked')}
          >
            <img src={closeIcon} alt="close icon" style={{ width: '10px', height: '10px' }} />
          </button>
          {listNotifications.length === 0
            ? <p>No new notification for now</p>
            : (
              <>
                <p>Here is the list of notifications</p>
                <ul>
                  {listNotifications.map((n) => (
                    <NotificationItem
                      key={n.id}
                      type={n.type}
                      value={n.value}
                      html={n.html}
                    />
                  ))}
                </ul>
              </>
            )
          }
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
