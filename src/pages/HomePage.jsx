import Hero from '@/components/sections/Hero/Hero'
import FeaturedStories from '@/components/sections/FeaturedStories/FeaturedStories'
import Testimonials from '@/components/sections/Testimonials/Testimonials'
import Contact from '@/components/sections/Contact/Contact'
import heroSlide1 from '@/assets/hero/slides/slide-1.webp'
import heroSlide2 from '@/assets/hero/slides/slide-2.webp'
import heroSlide3 from '@/assets/hero/slides/slide-3.webp'
import heroSlide4 from '@/assets/hero/slides/slide-4.webp'
import heroSlide5 from '@/assets/hero/slides/slide-5.webp'
import heroSlide6 from '@/assets/hero/slides/slide-6.webp'

const heroImages = [heroSlide1, heroSlide2, heroSlide3, heroSlide4, heroSlide5, heroSlide6]

function HomePage() {
  return (
    <>
      <Hero images={heroImages} />
      <FeaturedStories />
      <Testimonials />
      <Contact />
    </>
  )
}

export default HomePage
