import { useCallback, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Lightbox from '@/components/sections/Lightbox/Lightbox'
import { cn, focusRing } from '@/lib/utils'

/**
 * CSS-columns masonry: no JS measuring, no extra dependency, and each item's
 * intrinsic width/height (set on the <img>) is what keeps columns balanced
 * and prevents layout shift as images lazy-load.
 */
function Gallery({ photos = [] }) {
  const reduceMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(null)
  const triggerRefs = useRef([])

  const handleClose = useCallback(() => {
    setActiveIndex((current) => {
      requestAnimationFrame(() => triggerRefs.current[current]?.focus())
      return null
    })
  }, [])

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
              <button
                ref={(el) => (triggerRefs.current[index] = el)}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Open larger view: ${photo.alt}`}
                className={cn(
                  'group relative block w-full cursor-zoom-in overflow-hidden border border-ink/10 bg-paper-soft',
                  focusRing,
                )}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </button>
            </motion.figure>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {activeIndex !== null && (
          <Lightbox photos={photos} index={activeIndex} onClose={handleClose} onNavigate={setActiveIndex} />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
