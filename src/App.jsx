import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './assets/css/feather.css'
import AppRoutes from './Routes/AppRoutes'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  
  return (
       <BrowserRouter>
          <AppRoutes  />
       </BrowserRouter>
  )
}
export default App
