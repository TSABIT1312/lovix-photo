import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import AlbumGrid from '@/components/albums/AlbumGrid'
import { featuredAlbums } from '@/data/albums'

/**
 * The homepage's story collection — sells albums, not individual photos.
 * Deliberately not the flat photo masonry used on a Story Detail page.
 */
function FeaturedStories() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="stories" aria-label="Featured wedding stories" className="bg-paper py-24 sm:py-32">
      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-16 max-w-2xl text-center sm:mb-20"
        >
          <p className="font-display text-xs font-medium uppercase tracking-[0.4em] text-gold">
            Wedding Stories
          </p>
          <p className="mt-6 font-body text-sm leading-relaxed text-ink/70 sm:text-base">
            At LOVIXPHOTO, we believe that every love story deserves to be beautifully remembered. We do more than
            just capture moments—we preserve emotions, genuine connections, and timeless memories that you can
            relive for years to come. Based in the Jakarta and Banten areas, we specialize in wedding, pre-wedding,
            and engagement photography, as well as event documentation. Our approach blends natural storytelling,
            elegant composition, and a signature editing style to create images that feel both authentic and
            timeless. Every couple has a unique story, and our mission is to tell that story through meaningful
            images filled with emotion, beauty, and unforgettable moments. LOVIXPHOTO — Capturing Your Story,
            Creating Timeless Memories.
          </p>
        </motion.div>

        <AlbumGrid albums={featuredAlbums} />

        <div className="mt-16 flex justify-center sm:mt-20">
          {/* TODO: point to the real /stories archive route once that page ships */}
          <Button href="#" variant="ghost">
            View All Stories
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default FeaturedStories
