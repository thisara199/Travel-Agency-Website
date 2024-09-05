import img1 from '../assets/Gallery/Colombo.jpg';
import img2 from '../assets/Gallery/Kandy.jpg';
import img3 from '../assets/Gallery/Galle.jpg';
import img4 from '../assets/Gallery/Sigiriya.jpg';
import img5 from '../assets/Gallery/Ella.jpg';
import img6 from '../assets/Gallery/Jaffna.jpg';
import img7 from '../assets/Gallery/Anuradhapura.jpg';
import img8 from '../assets/Gallery/NuwaraEliya.jpeg';
import img9 from '../assets/Gallery/Trincomalee.jpg';
import img10 from '../assets/Gallery/Polonnaruwa.jpg';
import img11 from '../assets/Gallery/Bentota.jpg';

const galleryItems = [
  { id: 1, location: 'Colombo', image: img1 },
  { id: 2, location: 'Kandy', image: img2 },
  { id: 3, location: 'Galle', image: img3 },
  { id: 4, location: 'Sigiriya', image: img4  },
  { id: 5, location: 'Ella', image: img5  },
  { id: 6, location: 'Jaffna', image: img6  },
  { id: 7, location: 'Anuradhapura', image: img7 },
  { id: 8, location: 'Nuwara Eliya', image: img8 },
  { id: 9, location: 'Trincomalee', image: img9 },
  { id: 10, location: 'Polonnaruwa', image: img10 },
  { id: 11, location: 'Bentota', image: img11 },
  { id: 12, location: 'Matara', imgUrl: 'path-to-image12.jpg' },
  { id: 13, location: 'Dambulla', imgUrl: 'path-to-image13.jpg' },
  { id: 14, location: 'Mirissa', imgUrl: 'path-to-image14.jpg' },
  { id: 15, location: 'Arugam Bay', imgUrl: 'path-to-image15.jpg' },
  { id: 16, location: 'Yala', imgUrl: 'path-to-image16.jpg' },
  { id: 17, location: 'Udawalawe', imgUrl: 'path-to-image17.jpg' },
  { id: 18, location: 'Negombo', imgUrl: 'path-to-image18.jpg' },
  { id: 19, location: 'Hikkaduwa', imgUrl: 'path-to-image19.jpg' },
  { id: 20, location: 'Pinnawala', imgUrl: 'path-to-image20.jpg' },
];

const Gallery = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 className="my-16 text-3xl font-bold text-center">Gallery</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {galleryItems.map((item) => (
            <div key={item.id} className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={item.image}
                alt={item.location}
                className="object-cover w-full h-64 transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white transition-opacity bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                <p className="text-lg font-semibold">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
