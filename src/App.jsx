import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Order from './pages/Orders'
import Product from './pages/Product'
import PlaceOrder from './pages/PlaceOrder'
import Navbar from './components/Navbar'
import About from './pages/About'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] '>
      <ToastContainer />
      <Navbar/>
      <SearchBar />
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/login' element={<Login/>}/>
        <Route  path='/collection' element={<Collection/>}/>
        <Route  path='/cart' element={<Cart/>}/>
        <Route  path='/contact' element={<Contact/>}/>
        <Route  path='/orders' element={<Order/>}/>
        <Route  path='/product/:productId' element={<Product/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/place-order' element={<PlaceOrder/>}/>
        <Route  path='/verify' element={<Verify/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
