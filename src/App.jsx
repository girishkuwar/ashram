import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/home/Home'
import Info from './pages/info/Info'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/info' element={<Info/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
