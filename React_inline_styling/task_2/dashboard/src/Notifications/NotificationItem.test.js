import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import NotificationItem from './NotificationItem';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('NotificationItem Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct HTML with type and value', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find('li').text()).toEqual('test');
    expect(wrapper.find('li').prop('data-notification-type')).toEqual('default');
  });

  it('renders correct HTML with html prop', () => {
    const wrapper = shallow(
      <NotificationItem html={{ __html: '<u>test</u>' }} />
    );
    expect(wrapper.find('li').prop('dangerouslySetInnerHTML')).toEqual({
      __html: '<u>test</u>',
    });
  });

  it('calls markAsRead with correct id on click', () => {
    const markAsReadSpy = jest.fn();
    const wrapper = shallow(
      <NotificationItem id={1} markAsRead={markAsReadSpy} />
    );
    wrapper.find('li').simulate('click');
    expect(markAsReadSpy).toHaveBeenCalledWith(1);
  });
});
