import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders correctly with empty listNotifications', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find(NotificationItem).length).toBe(0);
    expect(wrapper.find('.Notifications').length).toBe(1);
  });

  it('renders correctly without listNotifications prop', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem).length).toBe(0);
  });

  it('renders correct number of NotificationItems when list is passed', () => {
    const list = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent</strong>' } },
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={list} />);
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it('displays No new notification for now when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find('.Notifications').text()).toContain('No new notification for now');
  });

  it('menu item is displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.menuItem').length).toBe(1);
  });

  it('div.Notifications is not displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.Notifications').length).toBe(0);
  });

  it('menu item is displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem').length).toBe(1);
  });

  it('div.Notifications is displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications').length).toBe(1);
  });
});
