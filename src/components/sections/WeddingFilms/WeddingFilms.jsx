import { useCallback, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/ui/Container'
import FilmGrid from '@/components/films/FilmGrid'
import FilmPlayer from './FilmPlayer'
import { films } from '@/data/films'

/**
 * A curated shelf of wedding films, not a video gallery — one deliberate
 * still per film, played one at a time in a modal on request. Sits alongside
 * FeaturedStories as the site's other "collection" section, same eyebrow +
 * heading rhythm, same honest-placeholder policy for unfilled slots.
 */
function WeddingFilms() {
  const reduceMotion = useReducedMotion()
  const [activeFilm, setActiveFilm] = useState(null)
  const triggerRefs = useRef({})

  const handlePlay = useCallback((film) => setActiveFilm(film), [])

  const handleClose = useCallback(() => {
    setActiveFilm((current) => {
      if (current) {
        requestAnimationFrame(() => triggerRefs.current[current.id]?.focus())
      }
      return null
    })
  }, [])

  return (
    <section id="films" aria-label="Wedding films" className="bg-paper py-24 sm:py-32">
      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-16 max-w-2xl text-center sm:mb-20"
        >
          <p className="font-display text-xs font-medium uppercase tracking-[0.4em] text-gold">Motion</p>
          <p className="mt-4 font-display text-3xl uppercase tracking-[0.15em] text-ink sm:mt-6 sm:text-4xl sm:tracking-[0.2em] lg:text-5xl">
            Wedding Films
          </p>
          <p className="mt-6 font-body text-sm leading-relaxed text-ink/70 sm:text-base">
            A quiet, curated collection of wedding films — the same days as the photographs, told in motion and
            sound.
          </p>
        </motion.div>

        <FilmGrid films={films} triggerRefs={triggerRefs} onPlay={handlePlay} />
      </Container>

      <AnimatePresence>{activeFilm && <FilmPlayer film={activeFilm} onClose={handleClose} />}</AnimatePresence>
    </section>
  )
}

export default WeddingFilms
