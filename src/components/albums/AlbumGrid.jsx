import { motion, useReducedMotion } from 'framer-motion'
import AlbumCard from './AlbumCard'
import ComingSoonCard from './ComingSoonCard'

/**
 * Editorial 2-up spread, not a dense uniform portfolio grid: the first entry
 * runs full-width as the lead story (wide crop, larger type), everything
 * after sits in a restrained 2-column grid with generous gutters. This is
 * the deliberate opposite of the flat masonry used for individual photos.
 */
function AlbumGrid({ albums, comingSoonSlots = 0 }) {
  const reduceMotion = useReducedMotion()

  const items = [
    ...albums.map((album) => ({ type: 'album', album })),
    ...Array.from({ length: comingSoonSlots }, () => ({ type: 'comingSoon' })),
  ]

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-20">
      {items.map((item, index) => {
        const isLarge = index === 0
        return (
          <motion.div
            key={item.type === 'album' ? item.album.slug : `coming-soon-${index}`}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: reduceMotion ? 0 : (index % 2) * 0.1,
            }}
            className={isLarge ? 'sm:col-span-2' : undefined}
          >
            {item.type === 'album' ? (
              <AlbumCard album={item.album} size={isLarge ? 'large' : 'standard'} />
            ) : (
              <ComingSoonCard size={isLarge ? 'large' : 'standard'} />
            )}
          </motion.div>
        )
      })}
    </div>
  )
}

export default AlbumGrid
