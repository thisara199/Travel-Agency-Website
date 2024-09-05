import Banner from "../../assets/HeroSection/Banner.png";

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-center bg-cover" style={{ backgroundImage: `url(${Banner})` }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-6xl">Explore the Ceylon with Us</h1>
        <p>Discover amazing places at exclusive deals</p>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default HeroSection;
