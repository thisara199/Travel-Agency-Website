const Contact = () => {
  return (
    <div className="px-0 py-12 overflow-x-hidden bg-gray-100 "> {/* Added overflow-x-hidden */}
      <div className="container max-w-full px-4 mx-auto"> {/* Ensuring full width on all devices */}
        <h2 className="mb-8 text-3xl font-bold text-center">Contact Us</h2>
        <p className="mb-12 text-center text-gray-600">
          We&apos;d love to hear from you! Feel free to reach out with any inquiries or questions.
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {/* Contact Details */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold">Get In Touch</h3>
            <p className="mb-4 text-gray-600">For inquiries, you can reach us via the following details:</p>
            <ul>
              <li className="mb-4">
                <strong>Phone:</strong>{' '}
                <a href="tel:+94-771234567" className="text-blue-600 hover:underline">
                  +94 77 123 4567
                </a>
              </li>
              <li className="mb-4">
                <strong>Email:</strong>{' '}
                <a href="mailto:info@travelceylon.com" className="text-blue-600 hover:underline">
                  info@travelceylon.com
                </a>
              </li>
              <li className="mb-4">
                <strong>Address:</strong>
                <p className="text-gray-600">123 Main Street, Colombo, Sri Lanka</p>
              </li>
            </ul>

            <h3 className="mt-8 mb-4 text-2xl font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-800"
              >
                <i className="fab fa-youtube"></i> YouTube
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold">Send Us a Message</h3>
            <form action="" className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-600">Your Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-600">Your Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-600">Message</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="5"
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 text-white bg-blue-600 rounded hover:bg-blue-800"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
