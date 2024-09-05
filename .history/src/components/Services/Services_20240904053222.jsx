import { FaConciergeBell, FaHotel, FaPlane, FaUmbrellaBeach } from 'react-icons/fa';

const services = [
  {
    icon: <FaPlane className='text-4xl text-blue-500' />,
    title: 'Flight Booking',
    description: 'Book your flights with ease.',
  },
  {
    icon: <FaHotel className='text-4xl text-blue-500' />,
    title: 'Hotel Booking',
    description: 'Book your hotels with ease.',
  },
  {
    icon: <FaUmbrellaBeach className='text-4xl text-blue-500' />,
    title: 'Beach Tours',
    description: 'Experience the beauty of the beach.',
  },
  {
    icon: <FaConciergeBell className='text-4xl text-blue-500' />,
    title: 'Concierge Services',
    description: 'Get your needs met with ease.',
  },
];

const Services = () => {
  return (
    <div className='py-12 bg-gray-100'>
      <div className='container px-4 mx-auto'>
        <h2 className='mb-8 text-3xl font-bold text-center'>Our Services</h2>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
          {services.map((service) => (
            <div key={service.title} className='flex flex-col items-center p-4 bg-white rounded-lg shadow-md cursor-pointer'>
              <div className='flex justify-center py-6 mb-4'>
                {service.icon}
              </div>
              <h3 className='mb-2 text-xl font-bold text-center'>{service.title}</h3>
              <p className='py-5 text-center text-gray-600'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
