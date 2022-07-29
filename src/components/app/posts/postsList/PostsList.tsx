import React, { memo } from 'react';
import { ListItemType } from '../../../../types/types';
import PostItem from '../postItem';
import './postsList.css';

interface IPostsListProps {
    postsList: ListItemType[];
}

const PostsList = ({ postsList }: IPostsListProps): JSX.Element => (
  <ul className="list">
    {
        postsList.map(
          (post) => (
            <PostItem key={post.question_id} post={post} />
          ),
        )
    }
  </ul>
);

export default memo(PostsList);
