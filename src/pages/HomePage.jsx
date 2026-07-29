import Hero from '@/components/sections/Hero/Hero'
import FeaturedStories from '@/components/sections/FeaturedStories/FeaturedStories'
import Contact from '@/components/sections/Contact/Contact'
import heroImage from '@/assets/hero/loxix-hero.webp'

function HomePage() {
  return (
    <>
      <Hero image={heroImage} />
      <FeaturedStories />
      <Contact />
    </>
  )
}

export default HomePage
