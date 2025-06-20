import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/home/Home'
import Info from './pages/info/Info'
import DeepDive from './pages/deepdive/DeepDive'
import Prant from './pages/deepdive/Prant'
import Division from './pages/deepdive/Division'
import District from './pages/deepdive/District'
import Vilages from './pages/deepdive/Vilages'
import Admin from './admin/Admin'
import AddData from './admin/AddData'
import VilageInfo from './pages/deepdive/VilageInfo'
import ProjectInfo from './pages/deepdive/ProjectInfo'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Info />} />
            <Route path='/info' element={<Home />} />
            <Route path='/deepdive' element={<DeepDive />} />
            <Route path='/prant' element={<Prant/>}/>
            <Route path='/district/:id' element={<District/>}/>
            <Route path='/division/:id' element={<Division/>}/>
            <Route path='/vilages/:id' element={<Vilages/>}/>
            <Route path='/vilageinfo/:id' element={<VilageInfo/>}/>
            <Route path='/projectinfo/' element={<ProjectInfo/>}/>
          </Route>
          <Route path='/a1d1m1i1n' element={<Admin/>}>
            <Route index element={<AddData/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
