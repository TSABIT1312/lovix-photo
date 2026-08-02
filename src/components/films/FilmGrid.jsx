import { motion, useReducedMotion } from 'framer-motion'
import FilmCard from './FilmCard'
import FilmComingSoonCard from './FilmComingSoonCard'

/**
 * Films keep their own aspect ratio rather than being cropped into a uniform
 * grid cell — cards share a fixed height (per breakpoint, set in FilmCard)
 * and wrap by width instead. With a wide film first, that naturally reads as
 * a featured teaser up top and shorter reels lined up beneath it, without
 * any manual "featured item" layout logic.
 */
function FilmGrid({ films, comingSoonSlots = 0, triggerRefs, onPlay }) {
  const reduceMotion = useReducedMotion()

  const items = [
    ...films.map((film) => ({ type: 'film', film })),
    ...Array.from({ length: comingSoonSlots }, () => ({ type: 'comingSoon' })),
  ]

  return (
    <div className="flex flex-col items-center gap-16 sm:flex-row sm:flex-wrap sm:items-start sm:justify-center sm:gap-x-10 sm:gap-y-20">
      {items.map((item, index) => (
        <motion.div
          key={item.type === 'film' ? item.film.id : `film-coming-soon-${index}`}
          className="w-full sm:w-auto"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
            delay: reduceMotion ? 0 : (index % 3) * 0.1,
          }}
        >
          {item.type === 'film' ? (
            <FilmCard
              film={item.film}
              onPlay={onPlay}
              triggerRef={(el) => {
                if (triggerRefs) triggerRefs.current[item.film.id] = el
              }}
            />
          ) : (
            <FilmComingSoonCard />
          )}
        </motion.div>
      ))}
    </div>
  )
}

export default FilmGrid
