import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

beforeEach(() => StyleSheetTestUtils.suppressStyleInjection());
afterEach(() => StyleSheetTestUtils.clearBufferAndResumeStyleInjection());

describe('CourseList', () => {
  describe('With CourseList Empty', () => {
    it('renders without crashing with empty listCourses', () => {
      const wrapper = shallow(<CourseList listCourses={[]} />);
      expect(wrapper).toBeDefined();
    });

    it('renders without crashing without listCourses prop', () => {
      const wrapper = shallow(<CourseList />);
      expect(wrapper).toBeDefined();
    });
  });

  describe('With CourseList containing elements', () => {
    const courses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    it('renders correctly with a list of courses', () => {
      const wrapper = shallow(<CourseList listCourses={courses} />);
      expect(wrapper.find(CourseListRow).length).toBe(5);
    });
  });
});
