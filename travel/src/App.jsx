import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componenets/Header/Header'
import Footer from './Componenets/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
     <Footer></Footer>
    </>
  )
}

export default App
