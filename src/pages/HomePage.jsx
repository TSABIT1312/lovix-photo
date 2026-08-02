import Hero from '@/components/sections/Hero/Hero'
import FeaturedStories from '@/components/sections/FeaturedStories/FeaturedStories'
import WeddingFilms from '@/components/sections/WeddingFilms/WeddingFilms'
import Testimonials from '@/components/sections/Testimonials/Testimonials'
import Contact from '@/components/sections/Contact/Contact'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'
import heroSlide1 from '@/assets/hero/slides/slide-1.webp'
import heroSlide2 from '@/assets/hero/slides/slide-2.webp'
import heroSlide3 from '@/assets/hero/slides/slide-3.webp'
import heroSlide4 from '@/assets/hero/slides/slide-4.webp'
import heroSlide5 from '@/assets/hero/slides/slide-5.webp'
import heroSlide6 from '@/assets/hero/slides/slide-6.webp'

const heroImages = [heroSlide1, heroSlide2, heroSlide3, heroSlide4, heroSlide5, heroSlide6]

function HomePage() {
  useDocumentMeta({
    path: '/',
    description:
      'Wedding, prewedding, and engagement photography in Jakarta and Banten. Browse full wedding stories from Lovix Photo.',
  })

  return (
    <>
      <Hero images={heroImages} />
      <FeaturedStories />
      <WeddingFilms />
      <Testimonials />
      <Contact />
    </>
  )
}

export default HomePage
