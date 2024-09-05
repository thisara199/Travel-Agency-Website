import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 m-4 shadow-lg">
      <div className="container">
        <h3>Travel.</h3>
        <div>
          <Link to="/" className="">Home</Link>
          <Link to="/about" className="">About</Link>
          <Link to="/gallery" className="">Gallery</Link>
          <Link to="/about" className="">About</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
