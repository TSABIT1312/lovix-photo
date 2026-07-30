import { motion, useReducedMotion } from 'framer-motion'

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

/**
 * Full-viewport hero. `image` is optional so the section still reads as
 * intentional (gradient backdrop) before a real photo is dropped into
 * src/assets/hero/ and passed in here.
 */
function Hero({ image, title = 'Lovix Photo', subtitle = 'Capturing timeless wedding stories.' }) {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="hero"
      aria-label={title}
      className="relative flex min-h-svh items-center justify-center overflow-hidden bg-paper"
    >
      {image ? (
        <>
          <motion.img
            src={image}
            alt=""
            aria-hidden="true"
            loading="eager"
            fetchPriority="high"
            initial={reduceMotion ? false : { scale: 1 }}
            animate={reduceMotion ? undefined : { scale: 1.06 }}
            transition={reduceMotion ? undefined : { duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Contrast overlay so dark text stays legible over the photo — only
              needed when there's real photo content behind it, not the paper gradient. */}
          <div className="absolute inset-0 bg-gradient-to-b from-paper/60 via-paper/35 to-paper/75" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-paper-soft via-paper to-paper" />
      )}

      <motion.div
        variants={container}
        initial={reduceMotion ? false : 'hidden'}
        animate="visible"
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <motion.h1
          variants={item}
          className="font-display text-4xl font-medium uppercase tracking-[0.28em] text-ink sm:text-5xl sm:tracking-[0.35em] md:text-6xl lg:text-7xl xl:text-8xl xl:tracking-[0.28em]"
        >
          {title}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xs font-display text-lg italic text-ink/80 sm:max-w-sm sm:text-xl"
        >
          {subtitle}
        </motion.p>
      </motion.div>

      <motion.div
        aria-hidden="true"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={reduceMotion ? {} : { opacity: [0.3, 1, 0.3] }}
        transition={reduceMotion ? {} : { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 z-10 h-10 w-px -translate-x-1/2 bg-ink/50"
      />
    </section>
  )
}

export default Hero
