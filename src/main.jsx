import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import Teacher from './faculty-compo/Teachers.jsx';
import Error from './layouts/Error.jsx';
import Routine from './routine-compo/Routine.jsx';
import Subjects from './subjects-compo/Subjects.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './layouts/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/routine",
        element: <Routine></Routine>
      },
      {
        path: "/teachers",
        element: <Teacher></Teacher>
      },
      {
        path: "/subjects",
        element: <Subjects></Subjects>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
