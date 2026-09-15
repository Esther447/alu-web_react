import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });
});
