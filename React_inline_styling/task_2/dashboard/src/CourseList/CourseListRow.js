import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  row: {
    backgroundColor: '#f5f5f5ab',
  },
  th: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  },
});

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  if (isHeader) {
    return (
      <tr className={css(styles.headerRow)}>
        {textSecondCell === null
          ? <th className={css(styles.th)} colSpan="2">{textFirstCell}</th>
          : <><th className={css(styles.th)}>{textFirstCell}</th><th className={css(styles.th)}>{textSecondCell}</th></>
        }
      </tr>
    );
  }
  return (
    <tr className={css(styles.row)}>
      <td className={css(styles.td)}>{textFirstCell}</td>
      <td className={css(styles.td)}>{textSecondCell}</td>
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
