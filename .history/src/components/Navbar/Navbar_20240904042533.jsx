import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav>
      <div>
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
