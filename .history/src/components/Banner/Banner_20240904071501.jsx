import Banner from '../../assets/Banner/Banner.jpg';

const Banner1 = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 data-aos="fade-up" className='mb-8 text-3xl font-bold text-center'>Favorite Location</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          <div className='mt-0 lg:mt-10'>
           <h1 className='text-3xl font-bold '>Find your favorite location</h1>
           <h2 className='mt-0 text-xl font-semibold lg:mt-10'>Sri Lanka`s Ultimate Adventure Playground</h2>
           <p className='mt-0 lg:mt-10'>Experience the thrill of Sri Lanka’s top adventure spots, from diving into serene waters in Trincomalee, soaring above Dambulla’s historical landscapes, to riding the waves in Arugam Bay. Whether you seek adrenaline-pumping activities or peaceful underwater exploration, our guide has you covered for an unforgettable adventure.</p>
          </div>
          <div></div>
          <div>
            <img src={Banner} alt="Favorite location banner" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
