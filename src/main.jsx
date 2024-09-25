import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Contact from './pages/Contact-us'
import store from './store/store'
import Home from "./pages/Home"
import About from './pages/About-us.jsx'


const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: "",
      element: <Home />
    },

    {
      path: "/contact-us",
      element: <Contact />
    },
    {
      path: "/about-us",
      element: <About />
    }
  ]
}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router = {router}/>      
    </Provider>
  </StrictMode>,
)
