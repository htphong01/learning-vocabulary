import React from 'react'
import App from '../App';

export const routeList = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/collections/:slug',
    element: <App />,
  },
];
