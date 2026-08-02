import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { cn, focusRing } from '@/lib/utils'

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

/**
 * Single-film modal — no next/prev, unlike the photo Lightbox. Browsing
 * happens in the grid (close, pick another card); the player's only job is
 * to show the one film that was clicked.
 *
 * YouTube films use a facade: the grid only ever shows our own cover image
 * (see FilmCard), and the YouTube iframe itself doesn't get created until
 * this modal mounts — no YouTube script, cookies, or requests happen just
 * from having the film in the grid. Self-hosted films work the same way:
 * the <video> has no `src` until this mounts, so nothing downloads until
 * someone presses play.
 */
function FilmPlayer({ film, onClose }) {
  const containerRef = useRef(null)
  const closeButtonRef = useRef(null)
  const isYouTube = film.type === 'youtube'

  useEffect(() => {
    closeButtonRef.current?.focus()
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab' || !containerRef.current) return
      const focusable = containerRef.current.querySelectorAll('button, video, iframe')
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

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = overflow
    }
  }, [onClose])

  return (
    <motion.div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${film.coupleNames} wedding film`}
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.3 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm sm:p-8"
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          onClose()
        }}
        aria-label="Close film"
        className={cn(
          'absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-paper/10 text-paper transition-colors hover:bg-paper/20 sm:right-8 sm:top-8',
          focusRing,
        )}
      >
        <CloseIcon />
      </button>

      <div
        onClick={(event) => event.stopPropagation()}
        className="flex max-h-full w-full flex-col items-center px-2 sm:w-auto sm:px-0"
      >
        {isYouTube ? (
          <div
            style={{ aspectRatio: film.aspectRatio ?? '16 / 9' }}
            className="w-full max-w-3xl sm:w-[min(90vw,64rem)]"
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${film.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title={`${film.coupleNames} wedding film`}
              className="h-full w-full rounded-sm shadow-2xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ) : (
          <video
            src={film.src}
            poster={film.cover}
            controls
            autoPlay
            playsInline
            preload="none"
            className="max-h-[85vh] max-w-full rounded-sm bg-black shadow-2xl"
          >
            Your browser doesn&apos;t support video playback.
          </video>
        )}

        <p className="mt-4 text-center font-display text-xs uppercase tracking-[0.25em] text-paper/80">
          {film.coupleNames} <span className="text-gold">&middot;</span> {film.location}, {film.year}
        </p>
      </div>
    </motion.div>
  )
}

export default FilmPlayer
