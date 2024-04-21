import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'uno.css';

import { RouterProvider } from 'react-router-dom';
import { router } from './router/route.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
