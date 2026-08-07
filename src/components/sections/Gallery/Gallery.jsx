import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/ui/Container'

/**
 * CSS-columns masonry: no JS measuring, no extra dependency, and each item's
 * intrinsic width/height (set on the <img>) is what keeps columns balanced
 * and prevents layout shift as images lazy-load.
 */
function Gallery({ photos = [] }) {
  const reduceMotion = useReducedMotion()

  return (
    <section id="gallery" aria-label="Portfolio gallery" className="bg-paper py-24 sm:py-32">
      <Container>
        <div className="mx-auto mb-12 h-px w-12 bg-ink/15 sm:mb-16" aria-hidden="true" />

        <p className="mb-12 text-center font-display text-xs font-medium uppercase tracking-[0.4em] text-gold sm:mb-16">
          Portfolio
        </p>

        <div className="columns-2 gap-3 sm:gap-8 lg:columns-3 lg:gap-10">
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

export default Gallery
