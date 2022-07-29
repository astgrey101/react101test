import React, { memo } from 'react';
import ErrorIndicator from './errorIndicator';

type TErrorBoundaryProps = {
    error: Error | null,
    children: JSX.Element,
}

const ErrorBoundary: React.FC<TErrorBoundaryProps> = ({ error, children }) => (
  <div>
    {error ? (<ErrorIndicator error={error} />) : children}
  </div>
);

export default memo(ErrorBoundary);
