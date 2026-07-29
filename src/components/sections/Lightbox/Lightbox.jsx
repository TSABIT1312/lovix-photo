import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { cn, focusRing } from '@/lib/utils'

const iconButton = cn(
  'flex h-11 w-11 items-center justify-center rounded-full bg-ink/5 text-ink/70 transition-colors hover:bg-ink/10 hover:text-ink',
  focusRing,
)

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const image = {
  enter: (direction) => ({
    opacity: 0,
    scale: 0.97,
    x: direction === 0 ? 0 : direction > 0 ? 32 : -32,
  }),
  center: { opacity: 1, scale: 1, x: 0 },
  exit: (direction) => ({
    opacity: 0,
    scale: 0.97,
    x: direction > 0 ? -32 : 32,
  }),
}

function ChevronIcon({ flip }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={flip ? 'h-5 w-5 scale-x-[-1]' : 'h-5 w-5'}
      aria-hidden="true"
    >
      <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/**
 * Props: { photos, index, onClose, onNavigate }
 * Mount/unmount this component from inside an <AnimatePresence> in the
 * parent (Gallery) so the backdrop/image get an exit animation on close.
 */
function Lightbox({ photos, index, onClose, onNavigate }) {
  const reduceMotion = useReducedMotion()
  const containerRef = useRef(null)
  const closeButtonRef = useRef(null)
  const touchStartX = useRef(null)
  const [direction, setDirection] = useState(0)

  const photo = photos[index]

  const goNext = useCallback(() => {
    setDirection(1)
    onNavigate((index + 1) % photos.length)
  }, [index, photos.length, onNavigate])

  const goPrev = useCallback(() => {
    setDirection(-1)
    onNavigate((index - 1 + photos.length) % photos.length)
  }, [index, photos.length, onNavigate])

  useEffect(() => {
    closeButtonRef.current?.focus()
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose()
      } else if (event.key === 'ArrowRight') {
        goNext()
      } else if (event.key === 'ArrowLeft') {
        goPrev()
      } else if (event.key === 'Tab' && containerRef.current) {
        const focusable = containerRef.current.querySelectorAll('button')
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = overflow
    }
  }, [goNext, goPrev, onClose])

  function handleTouchStart(event) {
    touchStartX.current = event.touches[0].clientX
  }

  function handleTouchEnd(event) {
    if (touchStartX.current === null) return
    const delta = event.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (delta < -50) goNext()
    else if (delta > 50) goPrev()
  }

  const transition = reduceMotion ? { duration: 0 } : { duration: 0.35, ease: [0.16, 1, 0.3, 1] }

  return (
    <motion.div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Image preview, ${index + 1} of ${photos.length}`}
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={reduceMotion ? { duration: 0 } : { duration: 0.3 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-paper/95 p-4 backdrop-blur-sm sm:p-8"
    >
      <span className="sr-only" aria-live="polite">
        {photo.alt}, image {index + 1} of {photos.length}
      </span>

      <button
        ref={closeButtonRef}
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          onClose()
        }}
        aria-label="Close preview"
        className={cn(iconButton, 'absolute right-4 top-4 sm:right-8 sm:top-8')}
      >
        <CloseIcon />
      </button>

      {photos.length > 1 && (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              goPrev()
            }}
            aria-label="Previous image"
            className={cn(iconButton, 'absolute left-2 top-1/2 -translate-y-1/2 sm:left-6')}
          >
            <ChevronIcon />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              goNext()
            }}
            aria-label="Next image"
            className={cn(iconButton, 'absolute right-2 top-1/2 -translate-y-1/2 sm:right-6')}
          >
            <ChevronIcon flip />
          </button>
        </>
      )}

      <div
        onClick={(event) => event.stopPropagation()}
        className="flex max-h-full max-w-full flex-col items-center"
      >
        <div className="relative flex max-h-[80vh] max-w-full items-center justify-center overflow-hidden">
          <AnimatePresence custom={direction} mode="wait" initial={false}>
            <motion.img
              key={photo.id}
              src={photo.src}
              alt={photo.alt}
              custom={direction}
              variants={image}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="max-h-[80vh] max-w-full touch-pan-y border border-ink/10 object-contain shadow-2xl"
            />
          </AnimatePresence>
        </div>

        <p className="mt-4 text-center font-display text-xs font-medium uppercase tracking-[0.25em] text-ink/70">
          {photo.alt}
          {photos.length > 1 && <span className="text-ink/60"> — {index + 1} / {photos.length}</span>}
        </p>
      </div>
    </motion.div>
  )
}

export default Lightbox
