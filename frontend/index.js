import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundary from './ErrorBoundary';

import './styles/main.scss';

ReactDOM.render(<ErrorBoundary><App /></ErrorBoundary>, document.getElementById('app'));
