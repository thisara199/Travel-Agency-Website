import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav>
      <div>
        <h3>Travel.</h3>
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
