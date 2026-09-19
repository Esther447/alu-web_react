import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

beforeEach(() => StyleSheetTestUtils.suppressStyleInjection());
afterEach(() => StyleSheetTestUtils.clearBufferAndResumeStyleInjection());

describe('BodySectionWithMarginBottom', () => {
  it('renders without crashing', () => {
    shallow(<BodySectionWithMarginBottom title="test" />);
  });

  it('renders a BodySection with the correct props', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title="test title"><p>child</p></BodySectionWithMarginBottom>);
    const bodySection = wrapper.find(BodySection);
    expect(bodySection.length).toBe(1);
    expect(bodySection.prop('title')).toBe('test title');
  });
});
