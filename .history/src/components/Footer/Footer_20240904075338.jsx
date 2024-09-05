import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-8 text-white bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Travel Agency</h2>
            <p className="mb-4">
              Your trusted partner for unforgettable travel experiences. Explore
              Ceylon with us.
            </p>
          </div>
          <div className="flex flex-col md:items-center">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-col mt-4 space-y-2">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contact">Contact</Link> {/* Updated link */}
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-bold">Follow Us</h2>
            <div className="flex mb-4 space-x-4">
              <FaFacebook className="text-white hover:text-gray-400" aria-label="Facebook" />
              <FaInstagram className="text-white hover:text-gray-400" aria-label="Instagram" />
              <FaTwitter className="text-white hover:text-gray-400" aria-label="Twitter" />
              <FaYoutube className="text-white hover:text-gray-400" aria-label="YouTube" />
            </div>
            <form action="" className="flex items-center mt-8">
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full p-2 bg-gray-800 border border-gray-600 rounded-l-lg"
              />
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-600 rounded-r-lg hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="flex justify-between pt-4 mt-8 border-t border-gray-700">
          <p>Copyright &copy; 2024 Travel Agency. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link to="/privacy" className="hover:text-gray-400">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-400">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
