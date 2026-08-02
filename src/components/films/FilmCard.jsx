import { cn, focusRing } from '@/lib/utils'

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true">
      <path d="M7 4.5v15l13-7.5-13-7.5z" fill="currentColor" />
    </svg>
  )
}

/**
 * A film still, not a video thumbnail grid — the cover is a single deliberate
 * frame, not an autoplaying preview. Caption sits below the frame like a
 * lobby card's credit line, not stacked on top of the image, so the still
 * reads as uncropped, unlabeled cinema rather than a social post.
 *
 * Height is fixed (per breakpoint); width follows the film's own
 * `aspectRatio` instead of forcing every film into the same shape — see
 * FilmGrid for how that turns into a "featured wide + supporting shorts"
 * layout on desktop. On mobile the card is full-width instead, with height
 * following from that same aspect ratio.
 */
function FilmCard({ film, triggerRef, onPlay }) {
  const { coupleNames, location, year, duration, cover, aspectRatio = '9 / 16' } = film

  return (
    <figure className="flex w-full flex-col items-center sm:w-auto">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => onPlay(film)}
        aria-label={`Play film: ${coupleNames}, ${duration}`}
        style={{ aspectRatio }}
        className={cn(
          'group relative block w-full overflow-hidden bg-ink/90 sm:h-[400px] sm:w-auto lg:h-[480px]',
          focusRing,
        )}
      >
        <img
          src={cover}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover opacity-90 transition-[transform,opacity] duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/25" />

        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-paper/70 text-paper backdrop-blur-[2px] transition-transform duration-500 ease-out group-hover:scale-110 sm:h-16 sm:w-16">
            <PlayIcon />
          </span>
        </span>

        <span className="pointer-events-none absolute bottom-4 right-4 font-display text-[0.7rem] tracking-[0.15em] text-paper/90 sm:bottom-5 sm:right-5">
          {duration}
        </span>
      </button>

      <figcaption className="mt-5 text-center sm:mt-6">
        <p className="font-display text-xl text-ink sm:text-2xl">{coupleNames}</p>
        <p className="mt-1 text-xs uppercase tracking-[0.25em] text-ink/70">
          {location} <span className="text-gold">&middot;</span> {year}
        </p>
      </figcaption>
    </figure>
  )
}

export default FilmCard
