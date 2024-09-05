import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
       <Routes>
        <Route path='/' element={<Home />} />
       </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
