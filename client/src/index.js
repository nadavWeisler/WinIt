import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './appRouter';
import registerServiceWorker from './registerServiceWorker';

// Reanders the app- the app router

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
