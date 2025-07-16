import { useState } from 'react'
import {Routes , Route , BrowserRouter} from 'react-router-dom'
import Mainpage from "./pages/Mainpage"
import About from './pages/About'
import Order from './pages/Order'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/Order' element={<Order/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/testing' element={<Testing/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
