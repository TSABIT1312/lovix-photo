import Hero from '@/components/sections/Hero/Hero'
import FeaturedStories from '@/components/sections/FeaturedStories/FeaturedStories'
import Testimonials from '@/components/sections/Testimonials/Testimonials'
import Contact from '@/components/sections/Contact/Contact'
import heroImage from '@/assets/hero/lovix-hero.webp'

function HomePage() {
  return (
    <>
      <Hero image={heroImage} />
      <FeaturedStories />
      <Testimonials />
      <Contact />
    </>
  )
}

export default HomePage
