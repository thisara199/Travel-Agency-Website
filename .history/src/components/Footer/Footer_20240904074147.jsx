import { FaFacebook, FaInstagram, FaTwitch, FaYoutube } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa6"
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
          <div>
            <h3>Follow Us</h3>
            <div>
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaYoutube />
            </div>
            <form action="">
              <input type="email" placeholder="Enter your Email" />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
        <div>
          <p>Copyright &copy; 2024 Travel Agency. All right reserved.</p>
          <div>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms and Conditions</Link>
          </div>
        </div>
    </div>
  )
}

export default Footer
