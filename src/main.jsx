import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserCompletion from './components/UserCompletion.jsx';
import Journey from './components/Journey.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404 Not Found The Page</div>,
  },
  {
    path: '/users',
    element: <UserCompletion />,
  },
  {
    path: '/journey',
    element: <Journey />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
