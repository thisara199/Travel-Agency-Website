import Banner from "../../assets/HeroSection/Banner.png";

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-center bg-cover" style={{ backgroundImage: `url(${Banner})` }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <h1 className="justify-between mb-4 text-4xl font-bold text-center text-white md:text-6xl lg:text-8xl">Explore the Ceylon with Us</h1>
        <p className="justify-between mb-10 text-lg text-white md:text-2xl xl:text-4xl">Discover amazing places at exclusive deals</p>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default HeroSection;
