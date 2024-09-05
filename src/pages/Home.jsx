import HeroSection from "../components/HeroSection/HeroSection"
import FeaturedDestination from "../components/FeaturedDestination/FeaturedDestination"
import Services from "../components/Services/Services"
import Testimonials from "../components/Testimonials/Testimonials"
import Banner from "../components/Banner/Banner"

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedDestination />
      <Banner />
      <Services />
      <Testimonials />
    </div>
  )
}

export default Home
