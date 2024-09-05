import HeroSection from "../components/HeroSection/HeroSection"
import FeaturedDestination from "../components/FeaturedDestination/FeaturedDestination"
import Services from "../components/Services/Services"
import Testimonials from "../components/Testimonials/Testimonials"

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
