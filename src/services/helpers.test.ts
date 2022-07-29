import { getPostsWithAppliedFilters, sortByCreationDate } from './helpers';
import { SORT } from '../types/types';

describe('Posts list data helpers tests', () => {
  const posts = [
    {
      question_id: 1,
      owner: {
        display_name: 'Test Name 1',
        profile_image: '',
        reputation: 50,
      },
      title: 'Post Title 1',
      link: '',
      is_answered: true,
      creation_date: 10,
    },
    {
      question_id: 2,
      owner: {
        display_name: 'Test Name 2',
        profile_image: '',
        reputation: 40,
      },
      title: 'Post Title 1',
      link: '',
      is_answered: true,
      creation_date: 5,
    },
    {
      question_id: 3,
      owner: {
        display_name: 'Test Name 2',
        profile_image: '',
        reputation: 60,
      },
      title: 'Post Title 1',
      link: '',
      is_answered: false,
      creation_date: 16,
    },
    {
      question_id: 4,
      owner: {
        display_name: 'Test Name 2',
        profile_image: '',
        reputation: 10,
      },
      title: 'Post Title 1',
      link: '',
      is_answered: false,
      creation_date: 23,
    },
  ];
  test('getPostsWithAppliedFilters', () => {
    const result = [
      {
        question_id: 1,
        owner: {
          display_name: 'Test Name 1',
          profile_image: '',
          reputation: 50,
        },
        title: 'Post Title 1',
        link: '',
        is_answered: true,
        creation_date: 10,
      },
    ];
    expect(getPostsWithAppliedFilters(posts)).toEqual(result);
  });

  test('sortByCreationDate order by desc', () => {
    const result = [
      {
        question_id: 4,
        creation_date: 23,
      },
      {
        question_id: 3,
        creation_date: 16,
      },
      {
        question_id: 1,
        creation_date: 10,
      },
      {
        question_id: 2,
        creation_date: 5,
      },
    ];
    expect(sortByCreationDate(posts, SORT.desc).map((post) => ({
      question_id: post.question_id,
      creation_date: post.creation_date,
    }))).toEqual(result);
  });

  test('sortByCreationDate order by asc', () => {
    const result = [
      {
        question_id: 2,
        creation_date: 5,
      },
      {
        question_id: 1,
        creation_date: 10,
      },
      {
        question_id: 3,
        creation_date: 16,
      },
      {
        question_id: 4,
        creation_date: 23,
      },
    ];
    expect(sortByCreationDate(posts, SORT.asc).map((post) => ({
      question_id: post.question_id,
      creation_date: post.creation_date,
    }))).toEqual(result);
  });
});
