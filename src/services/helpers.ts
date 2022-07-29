import * as _ from 'lodash';
import { ListItemType, SORT } from '../types/types';

/* Return posts list filtered by is_answered = true and owner.reputation >= 50 */
export const getPostsWithAppliedFilters = (posts: ListItemType[]) => {
  const filteredPostsByAnswered = _.filter(posts, (post) => post.is_answered);
  return _.filter(filteredPostsByAnswered, (post) => post.owner.reputation >= 50);
};

/* Return posts list ordered by creation_date (asc or desc) */
export const sortByCreationDate = (posts: ListItemType[], order: SORT) => _.orderBy(posts, ['creation_date'], [order]);
