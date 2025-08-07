import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './assets/pages/Home';
import Subscription from './assets/pages/Subscription';
import Order from './assets/pages/Order';
import Marketplace from './assets/pages/FarmerDashboard'
import { AppLayout } from './assets/Components/AppLayout';
import Login from './assets/Components/Login';
import Register from './assets/Components/Registration';
import FarmerDashboard from './assets/pages/Farmer';


export const App = ()=>{
 
  // const router = createBrowserRouter([
  //     {
    
  //     path:"/",
  //     element:<AppLayout/>,
  //     errorElement:<ErrorPage/>,
  //     children  : [{

  //     path : "/",
  //     element:<Home/>
  //   },
  //   {
  //     path:"/farmerdashboard",
  //     element:<FarmerDashboard/>
  //   },
  //   {
  //     path:"/subscription",
  //     element:<Subscription/>
  //   },
  //   {
  //     path:"/order",
  //     element:<Order/>
  //   } 
  // ]);
   const router = createBrowserRouter([
    {
    
      path:"/",
      element:<AppLayout/>,
      children  : [
      {
        path:"/",
        element:<Home />,
      },
      {
       path:"/marketplace",
       element:<Marketplace/>
      },
      {
       path:"/subscription",
       element:<Subscription/>
      },
      {
       path:"/order",
       element:<Order/>
      },
      

    ]},
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/register",
      element:<Register/>
    },
    {
      path:"/farmerdashboard",
      element:<FarmerDashboard/>
    }
  ]);

  return <RouterProvider router={router}/>
}