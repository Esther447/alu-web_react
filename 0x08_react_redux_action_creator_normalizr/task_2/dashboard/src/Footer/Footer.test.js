import React from 'react';
import { mount } from 'enzyme';
import Footer from './Footer';
import AppContext, { defaultUser, defaultLogOut } from '../App/AppContext';

describe('Footer', () => {
  it('renders without crashing', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser, logOut: defaultLogOut }}>
        <Footer />
      </AppContext.Provider>
    );
    wrapper.unmount();
  });

  it('renders the text Copyright', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser, logOut: defaultLogOut }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.text()).toContain('Copyright');
    wrapper.unmount();
  });

  it('Contact us link is not displayed when user is logged out', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser, logOut: defaultLogOut }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').length).toBe(0);
    wrapper.unmount();
  });

  it('Contact us link is displayed when user is logged in', () => {
    const user = { email: 'test@test.com', password: 'password', isLoggedIn: true };
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut: defaultLogOut }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').text()).toBe('Contact us');
    wrapper.unmount();
  });
});
