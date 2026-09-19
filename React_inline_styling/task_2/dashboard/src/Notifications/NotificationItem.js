import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;
    const styleClass = type === 'urgent' ? styles.urgent : styles.default;
    if (html) {
      return (
        <li
          data-notification-type={type}
          dangerouslySetInnerHTML={html}
          onClick={() => markAsRead(id)}
          className={css(styleClass)}
        />
      );
    }
    return (
      <li
        data-notification-type={type}
        onClick={() => markAsRead(id)}
        className={css(styleClass)}
      >
        {value}
      </li>
    );
  }
}

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
});

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: undefined,
  markAsRead: () => {},
  id: 0,
};

export default NotificationItem;
