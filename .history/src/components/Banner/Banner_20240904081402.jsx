import Banner from '../../assets/Banner/Banner.jpg';
import { GiHiking } from "react-icons/gi";
import { MdOutlineScubaDiving } from "react-icons/md";
import { TbSkiJumping } from "react-icons/tb";
import { GiParachute } from "react-icons/gi";
const Banner1 = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 data-aos="fade-up" className='mb-8 text-3xl font-bold text-center'>Favorite Location</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          <div className='mt-0 lg:mt-24'>
           <h1 data-aos="fade-up" className='text-3xl font-bold '>Find your favorite location</h1>
           <h2 data-aos="fade-up" className='mt-0 text-xl font-semibold lg:mt-10'>Sri Lanka`s Ultimate Adventure Playground</h2>
           <p data-aos="fade-up" className='mt-0 lg:mt-10'>Experience the thrill of Sri Lanka’s top adventure spots, from diving into serene waters in Trincomalee, soaring above Dambulla’s historical landscapes, to riding the waves in Arugam Bay. Whether you seek adrenaline-pumping activities or peaceful underwater exploration, our guide has you covered for an unforgettable adventure.</p>
           <div className='flex flex-col justify-center gap-6 mt-0 sm:pt-0 lg:mt-10'>
            <h1 data-aos="fade-up" className='text-xl font-bold'>Exclusive Limited-Time Offer!</h1>
            <p data-aos="fade-up" className='mb-0 text-xl sm:text-2xl lg:mb-10'>Book your dream vacation with us today and get 20% off your entire package. Experience the best of Sri Lanka with our tailored travel experiences. Hurry, this offer is valid until the end of the month!</p>
            <div className='flex flex-col gap-4'>
              <div data-aos="fade-up" className='flex items-center gap-4'>
                <GiHiking className='w-12 h-12 p-4 text-4xl rounded-full shadow-sm bg-violet-100 text-primary dark:bg-violet-400' />
                <p>Hiking</p>
              </div>
              <div data-aos="fade-up" className='flex items-center gap-4'>
                <MdOutlineScubaDiving className='w-12 h-12 p-4 text-4xl bg-red-400 rounded-full shadow-sm text-primary dark:bg-red-500' />
                <p>Diving</p>
              </div>
              <div data-aos="fade-up" className='flex items-center gap-4'>
                <TbSkiJumping className='w-12 h-12 p-4 text-4xl rounded-full shadow-sm bg-violet-100 text-primary dark:bg-violet-400' />
                <p>Adventure</p>
              </div>
              <div data-aos="fade-up" className='flex items-center gap-4'>
                <GiParachute className='w-12 h-12 p-4 text-4xl bg-red-400 rounded-full shadow-sm text-primary dark:bg-red-500' />
                <p>Parachute</p>
              </div>
            </div>
          </div>
          </div>
          <div className='mt-0 lg:mt-20'>
            <img src={Banner} alt="Favorite location banner" className="w-full h-auto shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
