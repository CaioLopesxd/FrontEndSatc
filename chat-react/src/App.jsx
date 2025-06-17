import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import You from './routes/you';
import Attendant from './routes/Attendant';


const router = createBrowserRouter([
  {
    path: '/',
    element: <You />,
  },
  {
    path: '/attendant',
    element: <Attendant />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

