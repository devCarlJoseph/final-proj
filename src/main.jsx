import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './assets/styles/index.css'
import App from './App';
import Menu from './pages/Menu'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Book from './pages/Book';
import Chef from './pages/Chef'
import ChefOne from './pages/ChefOne'

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
    path: "Contact",
    element: <Contact />,
  },
  {
    path: "Book",
    element: <Book />,
  },
  {
    path: "Chef",
    element: <Chef />,
  },
  {
    path: "ChefOne",
    element: <ChefOne/>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
