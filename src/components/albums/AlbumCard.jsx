import { Link } from 'react-router-dom'
import { cn, focusRing } from '@/lib/utils'

/**
 * A story card — caption sits over the cover photo's top-left corner, like a
 * magazine cover's masthead corner, not credit-line text below the image.
 * A corner scrim keeps it legible regardless of what's underneath.
 */
function AlbumCard({ album, size = 'standard' }) {
  const { slug, coverImage, coupleNames, shortTitle } = album
  const isLarge = size === 'large'

  return (
    <Link to={`/stories/${slug}`} className={cn('group block', focusRing)}>
      <div
        className={cn(
          'relative overflow-hidden bg-paper-soft',
          isLarge ? 'aspect-[16/10]' : 'aspect-[4/5]',
        )}
      >
        <img
          src={coverImage}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/60 via-black/10 to-transparent" />

        <div className="absolute left-5 top-5 flex max-w-[80%] flex-col items-start gap-1">
          <p className="font-display text-xs italic text-paper/80">{shortTitle}</p>
          <p
            className={cn(
              'font-display text-paper',
              isLarge ? 'text-2xl sm:text-3xl' : 'text-xl',
            )}
          >
            {coupleNames}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default AlbumCard
