import { fromJS } from 'immutable';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = fromJS({
  notifications: {},
  filter: 'DEFAULT',
});

const notificationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const { entities, result } = notificationsNormalizer(action.data);
      const notifications = result.reduce((acc, id) => {
        acc[id] = { ...entities.notifications[id], isRead: false };
        return acc;
      }, {});
      return state.merge({ notifications: fromJS(notifications) });
    }
    case MARK_AS_READ:
      return state.setIn(['notifications', String(action.index), 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    default:
      return state;
  }
};

export default notificationReducer;
