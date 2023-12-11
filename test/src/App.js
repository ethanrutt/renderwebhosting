import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import RootLayout from './Navigation/RootLayout';

// a small change

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      { path: "/", element: <Home/> },
      { path: "/about", element: <About/> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
