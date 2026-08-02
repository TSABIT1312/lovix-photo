import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { cn, focusRing } from '@/lib/utils'
import { testimonials } from '@/data/testimonials'

const AUTOPLAY_MS = 6000
const SWIPE_THRESHOLD = 60

function ArrowIcon({ direction = 'right' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={cn('h-4 w-4', direction === 'left' && 'rotate-180')}
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/**
 * Single-item quote carousel — advances on its own but every advance (auto
 * or manual) goes through `goTo`, so autoplay always restarts its timer from
 * a manual interaction instead of fighting it mid-transition.
 */
function Testimonials() {
  const reduceMotion = useReducedMotion()
  const [[index, direction], setSlide] = useState([0, 1])
  const count = testimonials.length

  const goTo = (next, dir) => setSlide([(next + count) % count, dir])

  useEffect(() => {
    if (reduceMotion || count <= 1) return
    const timer = setInterval(() => goTo(index + 1, 1), AUTOPLAY_MS)
    return () => clearInterval(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, reduceMotion, count])

  const active = testimonials[index]

  return (
    <section id="testimonials" aria-label="Testimonials" className="bg-paper py-16 sm:py-24 lg:py-32">
      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-6 max-w-xl text-center sm:mb-10 lg:mb-14"
        >
          <p className="font-display text-xs font-medium uppercase tracking-[0.4em] text-gold">Kind Words</p>
          <p className="mt-4 font-display text-3xl italic text-ink sm:mt-6 sm:text-4xl lg:text-5xl">
            Testimonials
          </p>
          <span className="mx-auto mt-4 block h-px w-12 bg-gold/50 sm:mt-6" />
        </motion.div>

        <div className="mx-auto flex max-w-2xl flex-col items-center">
          <div className="relative w-full overflow-hidden">
            {count > 1 && (
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => goTo(index - 1, -1)}
                className={cn(
                  'absolute left-0 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-ink/20 bg-paper/80 text-ink/60 backdrop-blur-sm transition-colors hover:border-ink hover:text-ink sm:h-9 sm:w-9',
                  focusRing,
                )}
              >
                <ArrowIcon direction="left" />
              </button>
            )}

            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={active.id}
                custom={direction}
                drag={count > 1 ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -SWIPE_THRESHOLD) goTo(index + 1, 1)
                  else if (info.offset.x > SWIPE_THRESHOLD) goTo(index - 1, -1)
                }}
                initial={reduceMotion ? false : { opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full px-9 text-center sm:px-12"
                style={{ cursor: count > 1 ? 'grab' : undefined }}
              >
                <p className="text-sm leading-relaxed text-ink sm:text-xl lg:text-2xl">
                  &ldquo;{active.quote}&rdquo;
                </p>
                {active.photo && (
                  <img
                    src={active.photo}
                    alt={active.name}
                    className="mx-auto mt-8 mb-4 h-14 w-14 rounded-full object-cover ring-1 ring-ink/10 sm:mt-10 sm:mb-5 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                    draggable={false}
                  />
                )}
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-ink/60">
                  {active.name}
                </p>
                <p className="mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-ink/70 sm:text-[0.65rem]">
                  {active.role}
                </p>
              </motion.div>
            </AnimatePresence>

            {count > 1 && (
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => goTo(index + 1, 1)}
                className={cn(
                  'absolute right-0 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-ink/20 bg-paper/80 text-ink/60 backdrop-blur-sm transition-colors hover:border-ink hover:text-ink sm:h-9 sm:w-9',
                  focusRing,
                )}
              >
                <ArrowIcon direction="right" />
              </button>
            )}
          </div>

          {count > 1 && (
            <div className="mt-6 flex items-center gap-2 sm:mt-10">
              {testimonials.map((testimonial, i) => (
                <button
                  key={testimonial.id}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => goTo(i, i > index ? 1 : -1)}
                  className={cn(
                    'h-1.5 rounded-full transition-all duration-300',
                    focusRing,
                    i === index ? 'w-6 bg-gold' : 'w-1.5 bg-ink/20 hover:bg-ink/40',
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

export default Testimonials
