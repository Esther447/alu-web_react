import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import CourseListRow from './CourseListRow';

beforeEach(() => StyleSheetTestUtils.suppressStyleInjection());
afterEach(() => StyleSheetTestUtils.clearBufferAndResumeStyleInjection());

describe('CourseListRow', () => {
  describe('when isHeader is true', () => {
    it('renders one cell with colspan=2 when textSecondCell does not exist', () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Available courses" />);
      expect(wrapper.find('th').length).toBe(1);
      expect(wrapper.find('th').prop('colSpan')).toBe('2');
    });

    it('renders two cells when textSecondCell is present', () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />);
      expect(wrapper.find('th').length).toBe(2);
    });
  });

  describe('when isHeader is false', () => {
    it('renders two td elements within a tr element', () => {
      const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60" />);
      expect(wrapper.find('td').length).toBe(2);
    });
  });
});
