import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import SignUp from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import AdminDashboard from "./Components/Dashboard/AdminDashboard/AdminDashboard";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HeroSection from "./Components/Dashboard/AdminDashboard/Pages/HeroSection";
import UpdateHero from "./Components/Dashboard/AdminDashboard/Pages/UpdateHero";
import AddProduct from "./Components/Dashboard/AdminDashboard/Pages/AddProduct";
import ManageProducts from "./Components/Dashboard/AdminDashboard/Pages/ManageProducts";
import ProductDetails from "./Components/AllProducts/ProductDetails/ProductDetails";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AllProducts from "./Components/AllProducts/AllProducts";
import Cart from "./Components/Cart/Cart";
import AllShops from "./Components/Dashboard/AdminDashboard/Pages/AllShops";
import AllSellers from "./Components/Dashboard/AdminDashboard/Pages/AllSellers";
import AllUser from "./Components/Dashboard/AdminDashboard/Pages/AllUser";
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "dashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "productDetails/:id",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/allProducts/${params.id}`)
      },
      {
        path: "allProducts",
        element: <AllProducts></AllProducts>
      },
      {
        path: "cart",
        element: <Cart></Cart>
      },
    ],
  },

  // Dashboard layout
  {
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
    children: [
      {
        path: "heroSection",
        element: <HeroSection></HeroSection>
      },
      {
        path: "updateHero",
        element: <UpdateHero></UpdateHero>
      },
      {
        path: "addProduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "manageProducts",
        element: <ManageProducts></ManageProducts>
      },
      {
        path: "allSellers",
        element: <AllSellers></AllSellers>
      },
      {
        path: "manageShops",
        element: <AllShops></AllShops>
      },
      {
        path: "allUser",
        element: <AllUser></AllUser>
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
