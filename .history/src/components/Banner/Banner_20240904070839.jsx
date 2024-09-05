import Banner from '../../assets/Banner/Banner.jpg';

const Banner1 = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 data-aos="fade-up" className='mb-8 text-3xl font-bold text-center'>Favorite Location</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          <div>
            <h1 className='text-2xl font-bold'>Discover Sri Lanka`s Thrill-Seeker`s Paradise</h1>
            <p>Embark on a journey through Sri Lanka`s most exhilarating destinations. Whether you`re seeking the rush of adventure or the serenity of nature, our curated list of activities has something for every explorer.</p>
            <h2>Trincomalee: Dive Into Serenity</h2>
            <p>Experience the underwater wonders of Serendib with its vibrant marine life and crystal-clear waters. Ideal for diving enthusiasts eager to explore coral reefs and exotic sea creatures.</p>
            <h2>Dambulla: Ballooning Over History</h2>
            <p>Soar high above the ancient city of Dambulla in a hot air balloon, witnessing breathtaking views of historical sites and stunning landscapes from the sky. A unique perspective on one of Sri Lanka’s most culturally rich regions.</p>
            <h2>Pasikudah: Dive Into Crystal Clear Waters</h2>
            <p>Pasikudah’s shallow waters and beautiful coral reefs make it a prime location for diving. Discover a submerged world full of vibrant marine life and underwater adventures.</p>
            <h2>Kithulgala: Waterfall Wonderland</h2>
            <p>Embrace the thrill of water rafting in Kithulgala, where the scenic beauty is matched by the excitement of navigating the rapids. Perfect for adrenaline junkies and nature lovers alike.</p>
            <h2>Arugam Bay: Surf’s Up</h2>
            <p>Ride the waves at Arugam Bay, renowned for its world-class surfing conditions. With its consistent swells and laid-back atmosphere, it’s a surfer’s paradise.</p>
            <h2>Bentota: Jet Ski Thrills</h2>
            <p>Feel the rush of speeding across the waters of Bentota on a jet ski. This coastal gem offers an exciting blend of adventure and relaxation with its pristine beaches and thrilling water sports.</p>
            <h2>South Coast Diving: Explore the Depths</h2>
            <p>Venture to Sri Lanka`s south coast for some of the best diving spots. Explore underwater landscapes teeming with marine life and discover shipwrecks and vibrant coral formations.</p>
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
