
import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import BookNow from "../Components/BookNow/BookNow";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Order from "../Components/Order/Order";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Register from "../Components/Register/Register";
import Main from "../Layout/Main";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/home",
        loader: () => fetch("fakeData.json"),
        element: <Home></Home>,
        
      },
      {
        path: "/",
        loader: () => fetch("fakeData.json"),
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/orders",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/bookNow/:id",
        element: <PrivateRoute><BookNow></BookNow></PrivateRoute>,
      },
    ],
  },
]);

export default router;
