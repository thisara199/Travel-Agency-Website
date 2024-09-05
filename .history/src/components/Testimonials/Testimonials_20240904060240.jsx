

const Clients = [
  {
    name: 'John Doe',
    text: 'I had an amazing experience with Booking.com. The website was easy to navigate, and the booking process was straightforward. I highly recommend it!',
    location: 'New York, USA',
  },
  {
    name: 'Jane Smith',
    text: 'I had an amazing experience with Booking.com. The website was easy to navigate, and the booking process was straightforward. I highly recommend it!',
    location: 'London, UK',
  },
  {
    name: 'Michael Johnson',
    text: 'I had an amazing experience with Booking.com. The website was easy to navigate, and the booking process was straightforward. I highly recommend it!',
    location: 'Sydney, Australia',
  },
  {
   name: 'Emily Davis',
    title: 'Concierge Services',
    location: 'Paris, France',
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
