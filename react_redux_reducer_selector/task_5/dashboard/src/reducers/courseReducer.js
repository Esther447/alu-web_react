import { Map, fromJS } from 'immutable';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

const initialState = Map();

const courseReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS: {
      const { entities, result } = coursesNormalizer(action.data);
      const courses = result.reduce((acc, id) => {
        acc[id] = { ...entities.courses[id], isSelected: false };
        return acc;
      }, {});
      return state.merge(fromJS(courses));
    }
    case SELECT_COURSE:
      return state.setIn([String(action.index), 'isSelected'], true);
    case UNSELECT_COURSE:
      return state.setIn([String(action.index), 'isSelected'], false);
    default:
      return state;
  }
};

export default courseReducer;
