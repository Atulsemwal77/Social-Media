import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import PostList from './components/postList'
import CreatePost from './components/createpost'
import App from './App';


const router = createBrowserRouter([
  {path:'/', element: <App/>,
    children:[
      {path:'/',element:<PostList/>},
      {path:'/create-post' ,element:<CreatePost/>}
    ]
  },
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
