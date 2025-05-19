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
import ChefTwo from './pages/ChefTwo';
import ChefThree from './pages/ChefThree'
import ChefFour from './pages/ChefFour'
import ChefFive from './pages/ChefFive'
import ChefSix from './pages/ChefSix'
import ChefSeven from './pages/ChefSeven'
import ChefEight from './pages/ChefEight'
import ChefNine from './pages/ChefNine'
import Testimonial from './pages/Testimonial'

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
  },
  {
    path: "ChefTwo",
    element: <ChefTwo />,
  },
  {
    path: "ChefThree",
    element: <ChefThree />,
  },
  {
    path: "ChefFour",
    element: <ChefFour />,
  },
  {
    path: "ChefFive",
    element: <ChefFive />,
  },
  {
    path: "ChefSix",
    element: <ChefSix />,
  },
  {
    path: "ChefSeven",
    element: <ChefSeven />,
  },
  {
    path: "ChefEight",
    element: <ChefEight />,
  },
  {
    path: "ChefNine",
    element: <ChefNine />,
  },
  {
    path: "Testimonial",
    element: <Testimonial />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
