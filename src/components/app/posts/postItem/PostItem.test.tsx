import React from 'react';
import '@testing-library/jest-dom';
import {
  render, waitFor, screen,
} from '@testing-library/react';
import PostItem from './PostItem';

describe('Display list item tests', () => {
  test('Display list item', async () => {
    const post = {
      question_id: 1,
      owner: {
        display_name: 'Test Name 1',
        profile_image: 'http://lorempixel.com/300/500/technics/5/',
        reputation: 50,
      },
      title: 'Post Title 1',
      link: 'https://stackoverflow.com/',
      is_answered: true,
      creation_date: 10,
    };
    render(<PostItem post={post} />);
    await waitFor(() => screen.getByTestId('1'));
    expect(screen.getByTestId('post_title_1')).toHaveTextContent('Post Title 1');
    expect(screen.getByTestId('post_image_1')).toHaveAttribute('src', 'http://lorempixel.com/300/500/technics/5/');
    expect(screen.getByTestId('post_link_1')).toHaveAttribute('href', 'https://stackoverflow.com/');
  });
});
