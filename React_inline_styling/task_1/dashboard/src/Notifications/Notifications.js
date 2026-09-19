import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItemShape from './NotificationItemShape';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';

const styles = StyleSheet.create({
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
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <>
        <div className="menuItem">Your notifications</div>
        {displayDrawer && (
          <div className={css(styles.Notifications)}>
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
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
