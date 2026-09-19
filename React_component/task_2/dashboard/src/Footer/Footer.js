import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <div className={css(styles.footer)}>
      <p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
    </div>
  );
}

const styles = StyleSheet.create({
  footer: { borderTop: '3px solid #e0354b', textAlign: 'center', fontStyle: 'italic' },
});

export default Footer;
