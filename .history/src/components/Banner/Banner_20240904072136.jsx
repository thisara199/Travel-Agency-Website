import Banner from '../../assets/Banner/Banner.jpg';

const Banner1 = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 data-aos="fade-up" className='mb-8 text-3xl font-bold text-center'>Favorite Location</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          <div className='mt-0 lg:mt-10'>
           <h1 data-aos="fade-up" className='text-3xl font-bold '>Find your favorite location</h1>
           <h2 className='mt-0 text-xl font-semibold lg:mt-10'>Sri Lanka`s Ultimate Adventure Playground</h2>
           <p className='mt-0 lg:mt-10'>Experience the thrill of Sri Lanka’s top adventure spots, from diving into serene waters in Trincomalee, soaring above Dambulla’s historical landscapes, to riding the waves in Arugam Bay. Whether you seek adrenaline-pumping activities or peaceful underwater exploration, our guide has you covered for an unforgettable adventure.</p>
           <h2 className='mt-0 text-xl font-semibold lg:mt-10'>Embrace the Natural Beauty and Excitement</h2>
           <p className='mt-0 lg:mt-10'>Continue your adventure at Pasikudah, known for its tranquil, shallow waters perfect for diving. The coral reefs here are a hidden gem, offering divers an opportunity to witness a vibrant underwater world. As you travel to Kithulgala, prepare for an adrenaline rush with exhilarating water rafting experiences. Navigate the thrilling rapids while surrounded by lush greenery, making it a perfect spot for thrill-seekers and nature lovers alike. Each location provides a unique way to engage with Sri Lanka’s natural beauty, ensuring an experience filled with both relaxation and excitement.</p>
           <h2 className='mt-0 text-xl font-semibold lg:mt-10'>Surf, Ski, and Dive: Endless Possibilities</h2>
           <p className='mt-0 lg:mt-10'>Conclude your journey with visits to Arugam Bay and Bentota for the ultimate blend of adventure and relaxation. Arugam Bay, famed for its world-class surf, offers perfect waves for both beginners and seasoned surfers. Enjoy the laid-back beach atmosphere while catching some of the best swells Sri Lanka has to offer. For those craving a different kind of thrill, Bentota provides exhilarating jet ski rides across its pristine waters. Feel the rush as you speed through the waves, combining fun with the stunning coastal scenery. And don’t miss the South Coast Diving spots, where you can explore vibrant coral reefs and discover shipwrecks beneath the surface. Sri Lanka’s diverse adventure offerings ensure that every traveler finds their perfect blend of excitement and relaxation.</p>
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
