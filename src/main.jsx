import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import Products from './Pages/Products/Products.jsx';
import Blog from './Pages/Blog/Blog.jsx';
import Contacts from './Pages/Contacts/Contacts.jsx';
import ProductDetails from './Pages/Products/ProductDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
      path:'/products',
      element:<Products></Products>
  },
  {
    path:'/blog',
    element:<Blog></Blog>
  },
  {
    path:'/contact',
    element:<Contacts></Contacts>
  },
  {
    path:'/product-details/:id/:name',
    element:<ProductDetails></ProductDetails>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
