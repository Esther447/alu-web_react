import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

beforeEach(() => StyleSheetTestUtils.suppressStyleInjection());
afterEach(() => StyleSheetTestUtils.clearBufferAndResumeStyleInjection());

const mockList = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: '<strong>Urgent</strong>' } },
];

describe('Notifications', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders correctly with empty listNotifications', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find(NotificationItem).length).toBe(0);
  });

  it('renders correctly without listNotifications prop', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem).length).toBe(0);
  });

  it('renders correct number of NotificationItems when list is passed', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={mockList} />);
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it('menu item div is rendered', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div').length).toBeGreaterThanOrEqual(1);
  });

  it('clicking menu item calls handleDisplayDrawer', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);
    wrapper.find('div').first().simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it('clicking close button calls handleHideDrawer', () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />);
    wrapper.find('button').simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();
  });

  it('markNotificationAsRead is called with correct id when NotificationItem is clicked', () => {
    const markNotificationAsRead = jest.fn();
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={mockList} markNotificationAsRead={markNotificationAsRead} />
    );
    wrapper.find(NotificationItem).first().prop('markAsRead')(1);
    expect(markNotificationAsRead).toHaveBeenCalledWith(1);
  });
});
