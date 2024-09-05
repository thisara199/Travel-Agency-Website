import Img1 from '../../assets/FeaturedDestination/Anuradhapura.jpg'
import Img2 from '../../assets/FeaturedDestination/Colombo.jpg'
import Img3 from '../../assets/FeaturedDestination/arugambay.jpg'
import Img4 from '../../assets/FeaturedDestination/Nuwaraeliya.jpeg'


const OurServices = [
  {
    image: Img1,
    title: 'Anuradhapura',
    description: 'Ancient Wonders Await.',
  },
  {
    image: Img2,
    title: 'Colombo',
    description: 'The Heartbeat of Sri Lanka.',
  },
  {
    image: Img3,
    title: 'Arugam bay',
    description: 'Where Surf Meets Bliss.',
  },
  {
    image: Img4,
    title: 'Nuwaraeliya',
    description: 'Nature’s Retreat.',
  },
]

const Services = () => {
  return (
    <div className='py-12 bg-gray-100'>
      <div className='container px-4 mx-auto'>
        <h2 className='mb-8 text-3xl font-bold text-center'>Our Services</h2>
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {OurServices.map((OurServices) => (
            <div key={OurServices.title} className='overflow-hidden bg-white rounded-lg shadow-md cursor-pointer'>
              <img src={OurServices.image} alt={OurServices.title} className='object-cover w-full h-48 transition duration-300 transform hover:scale-110'/>
              <div className='p-4'>
              <h3 className='mb-2 text-xl font-bold'>{destination.title}</h3>
              <p className='text-gray-600'>{destination.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
