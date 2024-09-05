import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa6"
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <div className="py-8 text-white bg-gray-800">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Travel Agency</h2>
            <p className="mb-4">Your trusted partner for unforgetable travel experiences. Explore the Ceylon with us.</p>
          </div>
          <div className="flex flex-col md:items-center">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-col mt-4 space-y-2">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/about">About</Link>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-bold">Follow Us</h2>
            <div className="flex mb-4 space-x-4">
              <FaFacebook className="text-white hover:text-gray-400" />
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
        <div className="flex justify-between border-t">
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
