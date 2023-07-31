// Startup point for the client side application
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Page/Home';

ReactDOM.hydrateRoot(document.querySelector('#root'), <Home />);