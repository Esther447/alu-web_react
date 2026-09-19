import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="First cell" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders one cell with colSpan 2 when isHeader is true and textSecondCell is null', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Header" textSecondCell={null} />
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

  it('applies header row background color style (#deb5b545) when isHeader is true', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Header" />
    );
    expect(wrapper.find('tr').prop('style')).toEqual({
      backgroundColor: '#deb5b545',
    });
  });

  it('applies default row background color style (#f5f5f5ab) when isHeader is false', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell="Data" />
    );
    expect(wrapper.find('tr').prop('style')).toEqual({
      backgroundColor: '#f5f5f5ab',
    });
  });
});
