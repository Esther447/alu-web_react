import courseReducer from './courseReducer';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

const courses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

describe('courseReducer', () => {
  it('returns an empty Map by default', () => {
    expect(courseReducer(undefined, {}).toJS()).toEqual({});
  });

  it('returns the data with isSelected false when FETCH_COURSE_SUCCESS is passed', () => {
    expect(
      courseReducer(undefined, { type: FETCH_COURSE_SUCCESS, data: courses }).toJS()
    ).toEqual({
      1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
      2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      3: { id: 3, name: 'React', credit: 40, isSelected: false },
    });
  });

  it('sets isSelected to true for the right item when SELECT_COURSE is passed', () => {
    const loaded = courseReducer(undefined, { type: FETCH_COURSE_SUCCESS, data: courses });
    expect(courseReducer(loaded, { type: SELECT_COURSE, index: 2 }).toJS()).toEqual({
      1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
      2: { id: 2, name: 'Webpack', credit: 20, isSelected: true },
      3: { id: 3, name: 'React', credit: 40, isSelected: false },
    });
  });

  it('sets isSelected to false for the right item when UNSELECT_COURSE is passed', () => {
    const loaded = courseReducer(undefined, { type: FETCH_COURSE_SUCCESS, data: courses });
    const selected = courseReducer(loaded, { type: SELECT_COURSE, index: 2 });
    expect(courseReducer(selected, { type: UNSELECT_COURSE, index: 2 }).toJS()).toEqual({
      1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
      2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      3: { id: 3, name: 'React', credit: 40, isSelected: false },
    });
  });
});
