import React, { memo } from 'react';
import { ListItemType } from '../../../../types/types';
import './postItem.css';

interface IPostItemProps {
    post: ListItemType;
}

const PostItem = ({ post }: IPostItemProps): JSX.Element => (
  <li data-testid={post.question_id}>
    <a href={post.link} data-testid={`post_link_${post.question_id}`}>
      <div className="item">
        <img
          className="image"
          data-testid={`post_image_${post.question_id}`}
          src={post.owner.profile_image}
          alt={post.owner.display_name}
        />
        <div className="title" data-testid={`post_title_${post.question_id}`}>{ post.title }</div>
      </div>
    </a>
  </li>
);

export default memo(PostItem);
