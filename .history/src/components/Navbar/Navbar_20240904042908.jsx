import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 m-4 bg-white shadow-lg">
      <div className="container flex items-center justify-between h-16 px-4">
        <h3 className="text-2xl font-bold">Travel.</h3>
        <div className="flex items-center space-x-4 text-sm font-bold ">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/gallery" className="hover:underline">Gallery</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
