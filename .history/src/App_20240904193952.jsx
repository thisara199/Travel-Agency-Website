import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
       </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
