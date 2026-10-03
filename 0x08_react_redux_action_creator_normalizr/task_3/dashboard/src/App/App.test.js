import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { defaultUser } from './AppContext';

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    wrapper.unmount();
  });

  it('contains the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).length).toBe(1);
    wrapper.unmount();
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toBe(1);
    wrapper.unmount();
  });

  it('contains the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login).length).toBe(1);
    wrapper.unmount();
  });

  it('contains the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).length).toBe(1);
    wrapper.unmount();
  });

  it('CourseList is not displayed when isLoggedIn is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList).length).toBe(0);
    wrapper.unmount();
  });

  it('default state for displayDrawer is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance().state.displayDrawer).toBe(false);
    wrapper.unmount();
  });

  it('handleDisplayDrawer sets displayDrawer to true', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    wrapper.update();
    expect(wrapper.instance().state.displayDrawer).toBe(true);
    wrapper.unmount();
  });

  it('handleHideDrawer sets displayDrawer to false', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    wrapper.update();
    wrapper.instance().handleHideDrawer();
    wrapper.update();
    expect(wrapper.instance().state.displayDrawer).toBe(false);
    wrapper.unmount();
  });

  it('logIn updates the state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('test@test.com', 'password');
    wrapper.update();
    expect(wrapper.instance().state.value.user).toEqual({
      email: 'test@test.com',
      password: 'password',
      isLoggedIn: true,
    });
    wrapper.unmount();
  });

  it('logOut updates the state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('test@test.com', 'password');
    wrapper.update();
    wrapper.instance().logOut();
    wrapper.update();
    expect(wrapper.instance().state.value.user).toEqual(defaultUser);
    wrapper.unmount();
  });

  it('markNotificationAsRead removes the notification with the given id', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().setState({
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', value: 'Urgent requirement' },
      ],
    });
    wrapper.instance().markNotificationAsRead(2);
    wrapper.update();
    const notifications = wrapper.instance().state.listNotifications;
    expect(notifications.length).toBe(2);
    expect(notifications.find((n) => n.id === 2)).toBeUndefined();
    wrapper.unmount();
  });

  it('CourseList is displayed when isLoggedIn is true in state', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('test@test.com', 'password');
    wrapper.update();
    expect(wrapper.find(CourseList).length).toBe(1);
    wrapper.unmount();
  });

  it('Login is not displayed when isLoggedIn is true in state', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('test@test.com', 'password');
    wrapper.update();
    expect(wrapper.find(Login).length).toBe(0);
    wrapper.unmount();
  });
});
