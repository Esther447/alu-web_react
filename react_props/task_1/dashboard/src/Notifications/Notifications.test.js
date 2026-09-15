import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders the text Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
  });
});
