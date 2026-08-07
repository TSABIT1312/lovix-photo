import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/ui/Container'

/**
 * The full wedding gallery — same CSS-columns masonry as the site's original
 * Gallery.jsx, just scoped to one album's photos instead of the whole site.
 * No JS measuring; each item's intrinsic width/height keeps columns balanced
 * and prevents layout shift as images lazy-load.
 */
function StoryGallery({ photos = [] }) {
  const reduceMotion = useReducedMotion()

  return (
    <section aria-label="Full wedding gallery" className="bg-paper py-24 sm:py-32">
      <Container>
        <div className="columns-1 gap-3 sm:columns-2 sm:gap-8 lg:columns-3 lg:gap-10">
          {photos.map((photo, index) => (
            <motion.figure
              key={photo.id}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: reduceMotion ? 0 : (index % 3) * 0.08,
              }}
              className="mb-3 break-inside-avoid sm:mb-8 lg:mb-10"
            >
              <div className="relative block w-full overflow-hidden border border-ink/10 bg-paper-soft">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full object-cover"
                />
              </div>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default StoryGallery
