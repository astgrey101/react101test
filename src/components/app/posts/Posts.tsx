import React, { memo, useEffect, useState } from 'react';
import { ListItemType, SORT } from '../../../types/types';
import getPosts from '../../../services/stackservice';
import { getPostsWithAppliedFilters, sortByCreationDate } from '../../../services/helpers';
import AppBar from './appBar';
import Spinner from '../../spinner';
import PostsList from './postsList';
import './posts.css';
import ErrorIndicator from '../../errorBoundary/ErrorBoundary';

const Posts = (): JSX.Element => {
  const [postsList, setPostsList] = useState<ListItemType[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [fetchedPosts, setFetchedPosts] = useState<ListItemType[] | null>(null);
  const [order, setOrder] = useState<SORT>(SORT.desc);

  useEffect(() => {
    getPosts()
      .then(({ items }) => { setFetchedPosts(items); })
      .catch((e) => setError(e));
  }, []);

  useEffect(() => {
    if (fetchedPosts) {
      const filteredPosts = getPostsWithAppliedFilters(fetchedPosts);
      const sortedPosts = sortByCreationDate(filteredPosts, order);
      setPostsList(sortedPosts);
    }
  }, [order, fetchedPosts]);

  return (
    <ErrorIndicator error={error}>
      <div className="posts">
        {fetchedPosts ? (
          <>
            <AppBar order={order} setOrder={setOrder} />
            <PostsList postsList={postsList} />
          </>
        ) : (<Spinner />)}
      </div>
    </ErrorIndicator>
  );
};

export default memo(Posts);
