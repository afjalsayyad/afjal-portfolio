import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider,Route,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Skills from './pages/Skills.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element = {<Home/>}/>
    <Route path='about' element = {<About/>}/>
    <Route path='projects' element = {<Projects/>}/>
    <Route path='skills' element = {<Skills/>}/>
    <Route path='contact' element = {<Contact/>}/>
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
