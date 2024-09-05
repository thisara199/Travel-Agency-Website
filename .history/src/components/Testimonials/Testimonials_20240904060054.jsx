

const Clients = [
  {
    name: 'John Doe',
    title: 'Flight Booking',
    description: 'Effortlessly book your flights with our streamlined process and find the best deals.',
  },
  {
    name: 'Jane Smith',
    title: 'Hotel Booking',
    description: 'Secure your ideal hotel stay quickly with our simple booking system and exclusive offers.',
  },
  {
    name: 'Michael Johnson',
    title: 'Beach Tours',
    description: 'Discover pristine beaches and breathtaking views with our curated beach tour packages.',
  },
  {
   name: 'Emily Davis',
    title: 'Concierge Services',
    description: 'Enjoy personalized concierge services that cater to all your needs, ensuring a seamless experience.',
  },
];

const Testimonials = () => {
  return (
    <div className='py-12 bg-gray-100'>
      <div className='container px-4 mx-auto'>
        <h2 className='mb-8 text-3xl font-bold text-center'>What Our Clients Say</h2>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
          {Clients.map((Clients) => (
            <div key={Clients.title} className='flex flex-col items-center p-8 transition duration-300 transform bg-white rounded-lg shadow-md cursor-pointer hover:scale-110'>
              <div className='flex justify-center py-6 mb-4'>
                {Clients.icon}
              </div>
              <h3 className='mb-2 text-xl font-bold text-center'>{Clients.title}</h3>
              <p className='py-5 text-center text-gray-600'>{Clients.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
