import notificationReducer from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

const notifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', value: 'New data available' },
];

describe('notificationReducer', () => {
  it('returns the default state', () => {
    expect(notificationReducer(undefined, {})).toEqual({ notifications: [], filter: 'DEFAULT' });
  });

  it('returns notifications with isRead false when FETCH_NOTIFICATIONS_SUCCESS is passed', () => {
    expect(
      notificationReducer(undefined, { type: FETCH_NOTIFICATIONS_SUCCESS, data: notifications })
    ).toEqual({
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    });
  });

  it('sets isRead to true for the right item when MARK_AS_READ is passed', () => {
    const loaded = notificationReducer(undefined, {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: notifications,
    });
    expect(notificationReducer(loaded, { type: MARK_AS_READ, index: 2 })).toEqual({
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    });
  });

  it('updates the filter when SET_TYPE_FILTER is passed', () => {
    const loaded = notificationReducer(undefined, {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: notifications,
    });
    expect(notificationReducer(loaded, { type: SET_TYPE_FILTER, filter: 'URGENT' })).toEqual({
      filter: 'URGENT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    });
  });
});
