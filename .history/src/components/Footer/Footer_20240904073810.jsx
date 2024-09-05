import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <div>
        <div>
          <div>
            <h2>Travel Agency</h2>
            <p>Your trusted partner for unforgetable travel experiences. Explore the Ceylon with us.</p>
          </div>
          <div>
            <h2>Quick Links</h2>
            <div>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/about">About</Link>
            </div>
          </div>
          <div></div>
        </div>
    </div>
  )
}

export default Footer
