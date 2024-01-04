import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import App from "../App";
import AllFoodItems from "../pages/AllFoodItems/AllFoodItems";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ShowDetails from "../pages/ShowDetails/ShowDetails";
import PrivateRoute from "./PrivateRoute";
import Orders from './../pages/Orders/Orders';
import MyConformOrders from "../pages/MyConformOrders/MyConformOrders";
import NotFound from "../pages/NotFound/NotFound"



export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement:<NotFound></NotFound>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            
        },
        {
            path:'/allFood',
            element:<AllFoodItems></AllFoodItems>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/details/:id',
            element:<ShowDetails></ShowDetails>,

        },
        {
            path:'/order/:id',
            element:<PrivateRoute><Orders></Orders></PrivateRoute>,
            
        },
        {
            path:'/order',
            element:<PrivateRoute><Orders></Orders></PrivateRoute>,
            
        },
        {
            path:'/conformOrder',
            element:<PrivateRoute><MyConformOrders></MyConformOrders></PrivateRoute>,
            
        },
        {
            path:'/signUp',
            element:<SignUp></SignUp>
        }
      ]
    },
    {
      path: "/notFound",
      element: <NotFound></NotFound>,
    },
    {
      path:"/login",
      element:<Login></Login>
    },
  ]);