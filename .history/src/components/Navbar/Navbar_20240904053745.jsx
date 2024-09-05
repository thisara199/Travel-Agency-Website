import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useState } from "react"
import { BiSolidPlaneAlt } from "react-icons/bi";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 m-4 bg-white shadow-lg">
      <div className="container flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
        <BiSolidPlaneAlt />
        <h3 className="text-2xl font-bold">TravelCeylon.</h3>
        </div>
        <div className="items-center hidden space-x-4 text-sm font-bold md:flex ">
          <Link to="/" className="px-6 py-2 hover:bg-gray-600 hover:text-white">Home</Link>
          <Link to="/about" className="px-6 py-2 hover:bg-gray-600 hover:text-white">About</Link>
          <Link to="/gallery" className="px-6 py-2 hover:bg-gray-600 hover:text-white">Gallery</Link>
          <Link to="/about" className="px-6 py-2 hover:bg-gray-600 hover:text-white">About</Link>
          <button className="px-6 py-2 text-white bg-gray-600 border rounded-full hover:scale-105 hover:bg-gray-500">Login</button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      <div>
        {isOpen && (
           <div className="flex flex-col items-center pb-10 space-y-6 font-bold bg-white md:hidden">
           <Link to="/" className="px-6 py-2 hover:bg-gray-600 hover:text-white">Home</Link>
           <Link to="/about" className="px-6 py-2 hover:bg-gray-600 hover:text-white">About</Link>
           <Link to="/gallery" className="px-6 py-2 hover:bg-gray-600 hover:text-white">Gallery</Link>
           <Link to="/about" className="px-6 py-2 hover:bg-gray-600 hover:text-white">About</Link>
           <button className="px-6 py-2 text-white bg-gray-600 border rounded-full hover:scale-105 hover:bg-gray-500">Login</button>
         </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
