// Wedding Films — a curated (not exhaustive) collection, same honesty policy
// as `albums.js`: real films only, filled out with ComingSoonCard-style
// placeholders in the grid rather than padding this array with fakes.
//
// Films can be self-hosted (`type: 'video'`, plays inline via <video>) or a
// published YouTube film (`type: 'youtube'`, plays via a facade — the iframe
// only mounts once the play button is clicked, see FilmPlayer). Each keeps
// its own native `aspectRatio` instead of being forced into one shape —
// FilmGrid lays cards out by a fixed height with width following that ratio.
import enengChangCover from '@/assets/films/eneng-chang-cover.webp'
import nengZhengCover from '@/assets/films/neng-zheng-cover.webp'

export const films = [
  {
    id: 'neng-zheng',
    type: 'youtube',
    youtubeId: 'egh-WWxi628',
    coupleNames: 'Neng & Zheng',
    location: 'Location TBD',
    year: 2026,
    duration: '1:32',
    cover: nengZhengCover,
    aspectRatio: '16 / 9',
  },
  {
    id: 'eneng-chang',
    type: 'video',
    src: '/films/eneng-chang.mp4',
    coupleNames: 'Eneng & Chang',
    location: 'Location TBD',
    year: 2025,
    duration: '0:27',
    cover: enengChangCover,
    aspectRatio: '9 / 16',
  },
]
