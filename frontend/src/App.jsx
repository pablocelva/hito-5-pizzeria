import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//Importando Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
//Importando componentes
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Registro from './pages/Registro'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import { Pizza } from './pages/Pizza'
import { Route, Routes } from 'react-router-dom'
//Importando data de pizzas
//import { pizzas } from './data/pizzas'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route 
        path='/'
        element={<Home />}
        />
        <Route 
        path='/register'
        element={<Registro />}
        />
        <Route 
        path='/login'
        element={<Login />}
        />
        <Route 
        path='/cart'
        element={<Cart />}
        />
        <Route 
        path='/pizza/p001'
        element={<Pizza />}
        />
        <Route 
        path='/profile'
        element={<Profile />}
        />
        <Route 
        path='/404'
        element={<NotFound />}
        />
        <Route 
        path='/*'
        element={<NotFound />}
        />
      </Routes>
      {/* <Home/> */}
      {/* <Pizza /> */}
      {/* <Registro/> */}
      {/* <Login/> */}
      {/* <Cart/> */}
      <Footer/>
    </>
  )
}

export default App
