import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav>
      <div>
        <h3>Travel.</h3>
        <div>
          <Link to="/" className="">Home</Link>
          <Link to="/" className="">About</Link>
          <Link to="/" className="">Gallery</Link>
          <Link to="/" className="">About</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
