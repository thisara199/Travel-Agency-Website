import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 m-4 bg-white shadow-lg">
      <div className="container flex items-center justify-between h-16 px-4">
        <h3 className="text-2xl font-bold">Travel.</h3>
        <div className="flex items-center space-x-4 text-sm font-bold ">
          <Link to="/" className="px-6 py-2 hover:bg-rounded hover:bg-gray-600 hover:text-white">Home</Link>
          <Link to="/about" className="px-6 py-2 hover:bg-gray-600 hover:text-white">About</Link>
          <Link to="/gallery" className="px-6 py-2 hover:bg-gray-600 hover:text-white">Gallery</Link>
          <Link to="/about" className="px-6 py-2 hover:bg-gray-600 hover:text-white">About</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
