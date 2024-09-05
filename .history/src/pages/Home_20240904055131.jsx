import HeroSection from "../components/HeroSection/HeroSection"
import FeaturedDestination from "../components/FeaturedDestination/FeaturedDestination"
import Services from "../components/Services/Services"

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedDestination />
      <Services />
      <Testimonials />
    </div>
  )
}

export default Home
