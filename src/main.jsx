import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './assets/styles/index.css'
import App from './App';
import Menu from './pages/Menu'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import MenuIntro from './components/Menu/MenuIntro'


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
    path: "MenuIntro",
    element: <MenuIntro />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
