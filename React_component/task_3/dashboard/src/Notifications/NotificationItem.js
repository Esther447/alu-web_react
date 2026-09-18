import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.Component {
  render() {
    const { type, html, value, markAsRead, id } = this.props;
    if (html) {
      return <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)} />;
    }
    return <li data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>;
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number,
  html: PropTypes.shape({ __html: PropTypes.string }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  html: null,
  value: '',
  id: 0,
  markAsRead: () => {},
};

export default NotificationItem;
