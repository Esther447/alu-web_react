import notificationReducer from '../reducers/notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ } from '../actions/notificationActionTypes';
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from './notificationSelector';

const notifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', value: 'New data available' },
];

const state = notificationReducer(undefined, {
  type: FETCH_NOTIFICATIONS_SUCCESS,
  data: notifications,
});

describe('notificationSelector', () => {
  it('filterTypeSelected returns the value of the filter', () => {
    expect(filterTypeSelected(state)).toBe('DEFAULT');
  });

  it('getNotifications returns the list of notifications as a Map', () => {
    expect(getNotifications(state).toJS()).toEqual({
      1: { id: 1, type: 'default', value: 'New course available', isRead: false },
      2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
      3: { id: 3, type: 'urgent', value: 'New data available', isRead: false },
    });
  });

  it('getUnreadNotifications returns only unread notifications as a Map', () => {
    const stateWithRead = notificationReducer(state, { type: MARK_AS_READ, index: 1 });
    expect(getUnreadNotifications(stateWithRead).toJS()).toEqual({
      2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
      3: { id: 3, type: 'urgent', value: 'New data available', isRead: false },
    });
  });
});
