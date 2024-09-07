import {
  createBrowserRouter,

} from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from "../Pages/Error/Error";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register/Register";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement: <Error />,
      children:[
        {
            index: true,
            element: <Home />
        },
        {
          path: "/productDetails",
          element: <ProductDetails />
        }
      ],
      
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
 
  ]);





export default router;