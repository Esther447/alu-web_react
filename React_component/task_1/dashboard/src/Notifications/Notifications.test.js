import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Notifications from './Notifications';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.exists()).toBe(true);
  });
});
