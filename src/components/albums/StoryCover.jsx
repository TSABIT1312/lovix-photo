import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/ui/Container'

function formatDate(dateString) {
  if (!dateString) return null
  return new Date(dateString).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/**
 * The album's opening spread: one large, uncropped, unlabeled photo, then a
 * quiet caption plate below it — like the frontispiece of a real photobook,
 * not a hero banner with text stacked on top of the image.
 */
function StoryCover({ album }) {
  const { coverImage, shortTitle, coupleNames, location, year, date } = album
  const reduceMotion = useReducedMotion()
  const dateLabel = formatDate(date) ?? String(year)

  return (
    <header className="bg-paper">
      <div className="relative h-[70vh] w-full overflow-hidden sm:h-[85vh]">
        <motion.img
          src={coverImage}
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          initial={reduceMotion ? false : { scale: 1 }}
          animate={reduceMotion ? undefined : { scale: 1.06 }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }
          }
          className="h-full w-full object-cover"
        />
      </div>

      <Container className="py-14 text-center sm:py-20">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-sm italic text-ink/60"
        >
          {shortTitle}
        </motion.p>
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: reduceMotion ? 0 : 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 font-display text-4xl text-ink sm:text-5xl md:text-6xl"
        >
          {coupleNames}
        </motion.h1>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: reduceMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-xs uppercase tracking-[0.25em] text-ink/70"
        >
          {dateLabel} <span className="text-gold">&middot;</span> {location}
        </motion.p>
      </Container>
    </header>
  )
}

export default StoryCover
