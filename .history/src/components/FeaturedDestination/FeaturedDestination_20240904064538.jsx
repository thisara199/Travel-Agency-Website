import Img1 from '../../assets/FeaturedDestination/Anuradhapura.jpg'
import Img2 from '../../assets/FeaturedDestination/Colombo.jpg'
import Img3 from '../../assets/FeaturedDestination/arugambay.jpg'
import Img4 from '../../assets/FeaturedDestination/Nuwaraeliya.jpeg'


const Destination = [
  {
    image: Img1,
    title: 'Anuradhapura',
    description: 'Ancient Wonders Await.',
    aosDelay: '200',
  },
  {
    image: Img2,
    title: 'Colombo',
    description: 'The Heartbeat of Sri Lanka.',
    aosDelay: '400',
  },
  {
    image: Img3,
    title: 'Arugam bay',
    description: 'Where Surf Meets Bliss.',
    aosDelay: '600',
  },
  {
    image: Img4,
    title: 'Nuwaraeliya',
    description: 'Nature’s Retreat.',
    aosDelay: '800',
  },
]

const FeaturedDestination = () => {
  return (
    <div className='py-12 bg-gray-100'>
      <div className='container px-4 mx-auto'>
        <h2 data-aos="fade-up" className='mb-8 text-3xl font-bold text-center'>Featured Destination</h2>
        <div
        data-aos="fade-up"
        data-aos-delay={Destination.aosDelay}
        className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {Destination.map((destination) => (
            <div key={destination.title} className='overflow-hidden bg-white rounded-lg shadow-md cursor-pointer'>
              <img src={destination.image} alt={destination.title} className='object-cover w-full h-48 transition duration-300 transform hover:scale-110'/>
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

export default FeaturedDestination
