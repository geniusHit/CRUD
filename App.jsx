import React from 'react'
import Navbar from './Components/Navbar'
import Create from './Pages/Create'
import Banner from './Pages/Banner'
import Read from './Pages/Read'
import {Routes, Route} from 'react-router-dom'
import ShowAllData from './Pages/ShowAllData'
import './index.css'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div class='mainBox'>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Banner/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/read' element={<Read/>}></Route>
        <Route path='/showalldata' element={<ShowAllData/>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  )
}

export default App