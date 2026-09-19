import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import BodySection from './BodySection';

beforeEach(() => StyleSheetTestUtils.suppressStyleInjection());
afterEach(() => StyleSheetTestUtils.clearBufferAndResumeStyleInjection());

describe('BodySection', () => {
  it('renders without crashing', () => {
    shallow(<BodySection title="test" />);
  });

  it('renders an h2 with the title prop', () => {
    const wrapper = shallow(<BodySection title="test title" />);
    expect(wrapper.find('h2').text()).toBe('test title');
  });

  it('renders children correctly', () => {
    const wrapper = shallow(<BodySection title="test"><p>test child</p></BodySection>);
    expect(wrapper.find('p').text()).toBe('test child');
  });
});
