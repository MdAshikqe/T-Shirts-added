import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './LeyOut/Main/Main.jsx';
import Home from './componets/Home/Home.jsx';
import Abouts from './componets/Abouts/Abouts.jsx';
import Contact from './componets/Contact/Contact.jsx';
import Order from './componets/Order/Order.jsx';
import Grandpa from './componets/Grandpa/Grandpa.jsx';

const router= createBrowserRouter([
  {
    path:"/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
        loader: ()=> fetch('tshirts.json')
        
      },
      {
        path:"/order",
        element: <Order></Order>
      },
      {
        path:"abouts",
        element:<Abouts></Abouts>
      },
      {
        path:"contact",
        element:<Contact></Contact>
      },
      {
        path:"grandpa",
        element: <Grandpa></Grandpa>
      }

    ]

  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
