import React from 'react';
import './errorIndicator.css';

interface IErrorIndicatorProps {
    error: Error,
}

const ErrorIndicator = ({ error }:IErrorIndicatorProps): JSX.Element => (<div className="error">{ error.message }</div>);

export default ErrorIndicator;
