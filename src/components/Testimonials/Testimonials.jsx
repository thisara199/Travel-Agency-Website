import Img1 from '../../assets/Testimonials/Image1.png';
import Img2 from '../../assets/Testimonials/Image3.png';
import Img3 from '../../assets/Testimonials/Image4.png';
import Img4 from '../../assets/Testimonials/Image6.png';

const Clients = [
  {
    name: 'John Doe',
    image: Img1,
    text: 'I had an amazing experience with Booking.com. The website was easy to navigate, and the booking process was straightforward. I highly recommend it!',
    location: 'New York, USA',
    aosDelay: '400',
  },
  {
    name: 'Jane Smith',
    image: Img2,
    text: 'I had an amazing experience with Booking.com. The website was easy to navigate, and the booking process was straightforward. I highly recommend it!',
    location: 'London, UK',
    aosDelay: '600',
  },
  {
    name: 'Michael Johnson',
    image: Img3,
    text: 'I had an amazing experience with Booking.com. The website was easy to navigate, and the booking process was straightforward. I highly recommend it!',
    location: 'Sydney, Australia',
    aosDelay: '800',
  },
  {
    name: 'Emily Davis',
    image: Img4,
    text: 'I had an amazing experience with Booking.com. The website was easy to navigate, and the booking process was straightforward. I highly recommend it!',
    location: 'Paris, France',
    aosDelay: '1000',
  },
];

const Testimonials = () => {
  return (
    <div className='py-12 bg-gray-100'>
      <div className='container px-4 mx-auto'>
        <h2 data-aos="fade-up" className='mb-8 text-3xl font-bold text-center'>What Our Clients Say</h2>
        <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {Clients.map((client) => (
            <div
              key={client.name}
              data-aos="fade-left"
              data-aos-delay={client.aosDelay}
              className='flex flex-col items-center p-8 transition duration-300 transform bg-white rounded-lg shadow-md cursor-pointer hover:scale-110'
            >
              <div className='flex justify-center py-6 mb-4'>
                <img src={client.image} alt={client.name} className='w-40 h-40 rounded-full' />
              </div>
              <h3 className='mb-2 text-xl font-bold text-center'>{client.name}</h3>
              <p className='py-5 text-center text-gray-600'>{client.text}</p>
              <p className='text-sm text-gray-400'>{client.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
