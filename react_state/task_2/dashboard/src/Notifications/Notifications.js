import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItemShape from './NotificationItemShape';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';

const opacityKeyframes = {
  from: { opacity: 0.5 },
  to: { opacity: 1 },
};

const bounceKeyframes = {
  '0%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(5px)' },
};

const styles = StyleSheet.create({
  menuItem: {
    float: 'right',
    position: 'relative',
    zIndex: 100,
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    ':hover': {
      animationName: [opacityKeyframes, bounceKeyframes],
      animationDuration: '1s, 0.5s',
      animationIterationCount: 3,
    },
  },
  menuItemHidden: {
    display: 'none',
  },
  Notifications: {
    border: '2px dashed #e1003c',
    padding: '10px 20px',
    position: 'relative',
    margin: '10px',
  },
});

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer } = this.props;
    return (
      <>
        <div
          className={css(styles.menuItem, displayDrawer && styles.menuItemHidden)}
          onClick={handleDisplayDrawer}
        >
          Your notifications
        </div>
        {displayDrawer && (
          <div className={css(styles.Notifications)}>
            <button
              style={{ position: 'absolute', right: '15px', top: '15px', background: 'transparent', border: 'none', cursor: 'pointer' }}
              aria-label="Close"
              onClick={handleHideDrawer}
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
                        id={n.id}
                        type={n.type}
                        value={n.value}
                        html={n.html}
                        markAsRead={this.markAsRead}
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
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;
