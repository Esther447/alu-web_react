import React from 'react';
import { mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Header from './Header';
import AppContext, { defaultUser, defaultLogOut } from '../App/AppContext';

beforeEach(() => StyleSheetTestUtils.suppressStyleInjection());
afterEach(() => StyleSheetTestUtils.clearBufferAndResumeStyleInjection());

describe('Header', () => {
  it('renders without crashing', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser, logOut: defaultLogOut }}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.unmount();
  });

  it('renders img and h1 tags', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser, logOut: defaultLogOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
    wrapper.unmount();
  });

  it('logoutSection is not created with default context', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser, logOut: defaultLogOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').length).toBe(0);
    wrapper.unmount();
  });

  it('logoutSection is created when user isLoggedIn is true', () => {
    const user = { email: 'test@test.com', password: 'password', isLoggedIn: true };
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut: defaultLogOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').length).toBe(1);
    wrapper.unmount();
  });

  it('clicking logout link calls logOut spy', () => {
    const logOut = jest.fn();
    const user = { email: 'test@test.com', password: 'password', isLoggedIn: true };
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find('#logoutSection a').simulate('click');
    expect(logOut).toHaveBeenCalled();
    wrapper.unmount();
  });
});
