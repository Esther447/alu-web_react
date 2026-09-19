import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import CourseListRow from './CourseListRow';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('CourseListRow Component', () => {
  it('renders one cell with colSpan 2 when isHeader is true and textSecondCell is null', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Header" />
    );
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').prop('colSpan')).toEqual('2');
    expect(wrapper.find('th').text()).toEqual('Header');
  });

  it('renders two cells when isHeader is true and textSecondCell is present', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2" />
    );
    expect(wrapper.find('th')).toHaveLength(2);
    expect(wrapper.find('th').at(0).text()).toEqual('Header 1');
    expect(wrapper.find('th').at(1).text()).toEqual('Header 2');
  });

  it('renders two td elements when isHeader is false', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell="Data 1" textSecondCell="Data 2" />
    );
    expect(wrapper.find('td')).toHaveLength(2);
    expect(wrapper.find('td').at(0).text()).toEqual('Data 1');
    expect(wrapper.find('td').at(1).text()).toEqual('Data 2');
  });
});
