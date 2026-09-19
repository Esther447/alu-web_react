import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
});

function NotificationItem({ type, html, value, markAsRead, id }) {
  const style = type === 'urgent' ? styles.urgent : styles.default;
  if (html) {
    return <li className={css(style)} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)} />;
  }
  return <li className={css(style)} data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>;
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

export default React.memo(NotificationItem);
