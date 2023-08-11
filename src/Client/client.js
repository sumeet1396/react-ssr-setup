// Startup point for the client side application
import React from 'react';
import ReactDOM from 'react-dom/client';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

ReactDOM.hydrateRoot(
    document.querySelector('#root'), 
    <BrowserRouter>
        <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
);