import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('BodySectionWithMarginBottom Component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title="test" />);
    expect(wrapper.exists()).toBe(true);
  });
});
