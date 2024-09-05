import Banner from '../../assets/Banner/Banner.jpg';

const Banner1 = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 data-aos="fade-up" className='mb-8 text-3xl font-bold text-center'>Favorite Location</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          <div>
            <h1>Discover Sri Lanka`s Thrill-Seeker`s Paradise</h1>
            <p>Embark on a journey through Sri Lanka`s most exhilarating destinations. Whether you`re seeking the rush of adventure or the serenity of nature, our curated list of activities has something for every explorer.</p>
            <h2>Trincomalee: Dive Into Serenity</h2>
            <p>Experience the underwater wonders of Serendib with its vibrant marine life and crystal-clear waters. Ideal for diving enthusiasts eager to explore coral reefs and exotic sea creatures.</p>
          </div>
          <div>
            <img src={Banner} alt="Favorite location banner" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
