import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Login from './Login';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Login Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });
});
