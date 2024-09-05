import Img1 from '../../assets/FeaturedDestination/Anuradhapura.jpg'
import Img2 from '../../assets/FeaturedDestination/Colombo.jpg'
import Img3 from '../../assets/FeaturedDestination/arugambay.jpg'
import Img4 from '../../assets/FeaturedDestination/Nuwaraeliya.jpeg'


const Destination = [
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

const FeaturedDestination = () => {
  return (
    <div>
      <div>
        <h3>Featured Destination</h3>
        <div>
          {Destination.map((destination) => (
            <div key={destination.title}>
              <img src={destination.image} alt={destination.title} />
              <h3>{destination.title}</h3>
              <p>{destination.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedDestination
