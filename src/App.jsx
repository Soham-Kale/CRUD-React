import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from "./Components/Create"
import Read from "./Components/Read"
import Update from './Components/Update'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Create/>}></Route>
            <Route exact path='/read' element={<Read/>}></Route>
            <Route exact path='/update' element={<Update/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
