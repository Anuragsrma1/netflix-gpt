import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom';
import Login from './login';

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login />
        }
    ]);

  return (
    <div>
     <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;
