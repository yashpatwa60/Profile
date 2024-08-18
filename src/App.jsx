import { useState } from 'react'
import './App.css'
import ProductListing from './Pages/ProductListing'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Navbar from './components/Basic/Navbar'
import ScreenLayout from './layout/ScreenLayout'
import HomeLayout from './layout/HomeLayout'
import CartLayout from './layout/CartLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" >
        <Route path="/" element={ <HomeLayout />} />
        <Route path="/product/:id" element={ <ScreenLayout />} />
        <Route path="/cart" element={ <CartLayout />} />
      {/* <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} /> */}
    </Route>
  )
)

function App() {

  return (
    <>
     <RouterProvider router={router} /> 
    </>
  )
}

export default App
