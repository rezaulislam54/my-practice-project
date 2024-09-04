import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './Home'
import Services from './Header/Services/Services'
import Contact from './Contact/Contact'
import Blogs from './Blogs/Blogs'
import BlogDetail from './Blog Details/BlogDetail'
import ErrorPage from './Eror-Page/ErrorPage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/service",
        element: <Services></Services>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },

      {
        path: "/blogs",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Blogs></Blogs>,
      },

      {
        path: "/blogs/:blogsId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogsId}`),
        element: <BlogDetail></BlogDetail>,
      },
    ],
  },

  {
    path: "/home",
    element: <Home></Home>,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
