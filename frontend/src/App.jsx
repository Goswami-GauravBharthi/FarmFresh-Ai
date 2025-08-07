import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import Contact from './assets/pages/Contact';

export const App = ()=>{
 
  const router = createBrowserRouter([
    {
      path : "/",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path : "/contact",
      element:<Contact/>
    }
  ]);


  return <RouterProvider router={router}/>
}