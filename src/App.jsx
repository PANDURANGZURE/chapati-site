import { useState , useEffect } from 'react'
import { Helmet } from 'react-helmet';
import Lenis from "@studio-freight/lenis";
import {Routes , Route , BrowserRouter} from 'react-router-dom'
import Mainpage from "./pages/Mainpage"
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About'
import Order from './pages/Order'


function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/Order' element={<Order/>}/>
        <Route path='/About' element={<About/>}/>
        {/* <Route path='/testing' element={<Testing/>}/> */}
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
