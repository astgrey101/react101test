import React, { memo } from 'react';
import Posts from './posts';

const App = (): JSX.Element => (
  <div>
    <Posts />
  </div>
);

export default memo(App);
