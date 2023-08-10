import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom"

import './app.scss'

import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./pages/Home"
import Books from "./pages/Books"
import Revue from "./pages/Revue"
import Events from "./pages/Events"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {

  const Layout = ()=>{
    return (
      <>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/ouvrages",
          element: <Books/>
        },
        {
          path: "/revue",
          element: <Revue/>
        },
        {
          path: "/evenements",
          element: <Events/>
        },
        {
          path: "/a-propos",
          element: <About/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
      ]
    }
  ])
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
