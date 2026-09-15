import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders the text Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
  });

  it('renders 3 NotificationItem elements', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it('first NotificationItem renders correct html', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).first().prop('value')).toBe('New course available');
    expect(wrapper.find(NotificationItem).first().prop('type')).toBe('default');
  });
});
