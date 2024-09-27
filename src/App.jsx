import { Fragment } from 'react'

import './App.css'
import { Route , Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import { Button } from '@mui/material'
import Navbar from './components/Navbar'

function App() {

  return (
   <Fragment> 
       <Navbar />
       <Routes>
         
          <Route index  element={<Home />} />
       </Routes>
   </Fragment>
  )
}

export default App
