import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

const SLIDE_DURATION = 5000

/**
 * Full-viewport hero. `images` is optional so the section still reads as
 * intentional (gradient backdrop) before real photos are dropped into
 * src/assets/hero/ and passed in here. Accepts either a single image (string)
 * or an array of images to render as an auto-advancing, swipeable slideshow
 * with numbered navigation.
 */
function Hero({ image, images, title = 'Lovix Photo', subtitle = 'Capturing timeless wedding stories.' }) {
  const reduceMotion = useReducedMotion()
  const slides = images && images.length > 0 ? images : image ? [image] : []
  const [index, setIndex] = useState(0)
  const [tick, setTick] = useState(0)
  const imgRef = useRef(null)

  useEffect(() => {
    if (slides.length <= 1 || reduceMotion) return
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, SLIDE_DURATION)
    return () => clearInterval(id)
  }, [slides.length, reduceMotion, tick])

  const goTo = (i) => {
    setIndex(((i % slides.length) + slides.length) % slides.length)
    setTick((t) => t + 1)
  }

  const handleDragEnd = (_event, info) => {
    if (info.offset.x < -60) goTo(index + 1)
    else if (info.offset.x > 60) goTo(index - 1)
  }

  const handleImageTap = (event) => {
    if (slides.length <= 1 || !imgRef.current) return
    const rect = imgRef.current.getBoundingClientRect()
    const tapX = event.clientX - rect.left
    if (tapX < rect.width / 2) goTo(index - 1)
    else goTo(index + 1)
  }

  return (
    <section
      id="hero"
      aria-label={title}
      className="relative flex min-h-svh items-center justify-center overflow-hidden bg-paper"
    >
      {slides.length > 0 ? (
        <>
          <AnimatePresence initial={false} mode="sync">
            <motion.img
              key={slides[index]}
              src={slides[index]}
              alt=""
              aria-hidden="true"
              loading="eager"
              fetchPriority="high"
              initial={reduceMotion ? false : { opacity: 0, scale: 1.02 }}
              animate={reduceMotion ? undefined : { opacity: 1, scale: 1.06 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={
                reduceMotion
                  ? undefined
                  : {
                      opacity: { duration: 1 },
                      scale: { duration: 20, ease: 'linear' },
                    }
              }
              className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
          {/* Contrast overlay so dark text stays legible over the photo — only
              needed when there's real photo content behind it, not the paper gradient. */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-paper/60 via-paper/35 to-paper/75" />

          {/* Stable, never-remounted hit layer for swipe/drag + tap-to-navigate —
              kept separate from the crossfading <img> above so a mid-transition
              tap can never land on a stale, about-to-unmount slide instance. */}
          <div ref={imgRef} aria-hidden="true" className="absolute inset-0 z-[1]">
            {slides.length > 1 && (
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={handleDragEnd}
                onTap={handleImageTap}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
              />
            )}
          </div>

          {slides.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full p-2 text-ink/60 transition-colors duration-300 hover:text-ink sm:left-6"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6 sm:h-7 sm:w-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full p-2 text-ink/60 transition-colors duration-300 hover:text-ink sm:right-6"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6 sm:h-7 sm:w-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {slides.length > 1 && (
            <div className="absolute bottom-20 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index}
                  className={`font-display text-sm transition-colors duration-300 ${
                    i === index ? 'text-ink' : 'text-ink/40 hover:text-ink/70'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </button>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-paper-soft via-paper to-paper" />
      )}

      <motion.div
        variants={container}
        initial={reduceMotion ? false : 'hidden'}
        animate="visible"
        className="relative z-10 flex flex-col items-center px-6 text-center pointer-events-none"
      >
        <motion.h1
          variants={item}
          className="whitespace-nowrap font-display text-2xl font-medium uppercase tracking-[0.14em] text-ink sm:text-5xl sm:tracking-[0.35em] md:text-6xl lg:text-7xl xl:text-8xl xl:tracking-[0.28em]"
        >
          {title}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-3 max-w-xs whitespace-nowrap font-display text-sm italic text-ink/80 sm:mt-6 sm:max-w-sm sm:text-xl"
        >
          {subtitle}
        </motion.p>
      </motion.div>

      <motion.div
        aria-hidden="true"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={reduceMotion ? {} : { opacity: [0.3, 1, 0.3] }}
        transition={reduceMotion ? {} : { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute bottom-8 left-1/2 z-10 h-10 w-px -translate-x-1/2 bg-ink/50"
      />
    </section>
  )
}

export default Hero
