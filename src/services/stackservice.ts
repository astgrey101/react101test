import { TPostsResponse } from '../types/types';

const API_BASE = 'https://api.stackexchange.com/2.2';

/* Request function to fetch list of posts */
const getPosts = async (): Promise<TPostsResponse> => {
  const res = await fetch(`${API_BASE}/search?intitle=react&site=stackoverflow`);
  if (!res.ok) {
    throw new Error('Oops! Something went wrong');
  } else return res.json();
};

export default getPosts;
