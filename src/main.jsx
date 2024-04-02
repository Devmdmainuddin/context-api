import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home.jsx'
import Products from './Pages/Products.jsx'
import Contact from './Pages/Contact.jsx'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import ContextComponent from './Contaxt/ContextComponent.jsx'
import Login from './components/User/Login.jsx'
import Signup from './components/User/Signup.jsx'
import Carts from './components/Carts/Carts.jsx'
import AuthProvider from './Contaxt/AuthProvider.jsx'
import ProductsDetails from './Pages/ProductsDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/products/:id",
        element: <ProductsDetails></ProductsDetails>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/cart",
        element: <Carts></Carts>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ContextComponent>
        <RouterProvider router={router} />
      </ContextComponent>
    </AuthProvider>
  </React.StrictMode>,
)
