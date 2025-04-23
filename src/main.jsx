import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './assets/styles/index.css'
import App from './App';
import Menu from './pages/Menu'
import About from './pages/about'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import Contact from './pages/Contact'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "menu",
    element: <Menu />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "gallery",
    element: <Gallery />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path: "Contact",
    element: <Contact />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
