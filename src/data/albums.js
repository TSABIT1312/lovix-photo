// Album data for the homepage's Wedding Stories collection. One entry per
// wedding — the existing `gallery.js` photo pool becomes this album's full
// wedding gallery (it's the same 49 photos, now framed as one complete story
// instead of a flat site-wide grid).
//
// `coupleNames` is a placeholder ("The Bride & Groom") pending the real
// couple's name/permission to publish it — same honesty policy already used
// for the placeholder gallery tiles earlier in this project. `location` is
// real (it's the client's own Google Drive folder name, "NOVUS JIVA VILLA").
import coverImage from '@/assets/gallery/wedding-01.webp'
import { gallery } from './gallery'

// Adha & Shania prewedding album — all 46 real photos, downloaded locally by
// the client and processed directly (the Drive shortcuts for these couldn't be
// resolved by the connected account). Sorted by original DSC file number to
// approximate real shoot chronology. Cover is the beach photo (both faces
// clearly visible, smiling) rather than the first-in-sequence shot.
import adhaShania01 from '@/assets/gallery/adha-shania/adha-shania-01.webp'
import adhaShania02 from '@/assets/gallery/adha-shania/adha-shania-02.webp'
import adhaShania03 from '@/assets/gallery/adha-shania/adha-shania-03.webp'
import adhaShania04 from '@/assets/gallery/adha-shania/adha-shania-04.webp'
import adhaShania05 from '@/assets/gallery/adha-shania/adha-shania-05.webp'
import adhaShania06 from '@/assets/gallery/adha-shania/adha-shania-06.webp'
import adhaShania07 from '@/assets/gallery/adha-shania/adha-shania-07.webp'
import adhaShania08 from '@/assets/gallery/adha-shania/adha-shania-08.webp'
import adhaShania09 from '@/assets/gallery/adha-shania/adha-shania-09.webp'
import adhaShania10 from '@/assets/gallery/adha-shania/adha-shania-10.webp'
import adhaShania11 from '@/assets/gallery/adha-shania/adha-shania-11.webp'
import adhaShania12 from '@/assets/gallery/adha-shania/adha-shania-12.webp'
import adhaShania13 from '@/assets/gallery/adha-shania/adha-shania-13.webp'
import adhaShania14 from '@/assets/gallery/adha-shania/adha-shania-14.webp'
import adhaShania15 from '@/assets/gallery/adha-shania/adha-shania-15.webp'
import adhaShania16 from '@/assets/gallery/adha-shania/adha-shania-16.webp'
import adhaShania17 from '@/assets/gallery/adha-shania/adha-shania-17.webp'
import adhaShania18 from '@/assets/gallery/adha-shania/adha-shania-18.webp'
import adhaShania19 from '@/assets/gallery/adha-shania/adha-shania-19.webp'
import adhaShania20 from '@/assets/gallery/adha-shania/adha-shania-20.webp'
import adhaShania21 from '@/assets/gallery/adha-shania/adha-shania-21.webp'
import adhaShania22 from '@/assets/gallery/adha-shania/adha-shania-22.webp'
import adhaShania23 from '@/assets/gallery/adha-shania/adha-shania-23.webp'
import adhaShania24 from '@/assets/gallery/adha-shania/adha-shania-24.webp'
import adhaShania25 from '@/assets/gallery/adha-shania/adha-shania-25.webp'
import adhaShania26 from '@/assets/gallery/adha-shania/adha-shania-26.webp'
import adhaShania27 from '@/assets/gallery/adha-shania/adha-shania-27.webp'
import adhaShania28 from '@/assets/gallery/adha-shania/adha-shania-28.webp'
import adhaShania29 from '@/assets/gallery/adha-shania/adha-shania-29.webp'
import adhaShania30 from '@/assets/gallery/adha-shania/adha-shania-30.webp'
import adhaShania31 from '@/assets/gallery/adha-shania/adha-shania-31.webp'
import adhaShania32 from '@/assets/gallery/adha-shania/adha-shania-32.webp'
import adhaShania33 from '@/assets/gallery/adha-shania/adha-shania-33.webp'
import adhaShania34 from '@/assets/gallery/adha-shania/adha-shania-34.webp'
import adhaShania35 from '@/assets/gallery/adha-shania/adha-shania-35.webp'
import adhaShania36 from '@/assets/gallery/adha-shania/adha-shania-36.webp'
import adhaShania37 from '@/assets/gallery/adha-shania/adha-shania-37.webp'
import adhaShania38 from '@/assets/gallery/adha-shania/adha-shania-38.webp'
import adhaShania39 from '@/assets/gallery/adha-shania/adha-shania-39.webp'
import adhaShania40 from '@/assets/gallery/adha-shania/adha-shania-40.webp'
import adhaShania41 from '@/assets/gallery/adha-shania/adha-shania-41.webp'
import adhaShania42 from '@/assets/gallery/adha-shania/adha-shania-42.webp'
import adhaShania43 from '@/assets/gallery/adha-shania/adha-shania-43.webp'
import adhaShania44 from '@/assets/gallery/adha-shania/adha-shania-44.webp'
import adhaShania45 from '@/assets/gallery/adha-shania/adha-shania-45.webp'
import adhaShania46 from '@/assets/gallery/adha-shania/adha-shania-46.webp'

const adhaShaniaPhotos = [
  {
    id: 57,
    src: adhaShania01,
    alt: 'Prewedding photograph 1 — Adha & Shania',
    width: 1400,
    height: 2100,
  },
  {
    id: 58,
    src: adhaShania02,
    alt: 'Prewedding photograph 2 — Adha & Shania',
    width: 1400,
    height: 2100,
  },
  {
    id: 59,
    src: adhaShania03,
    alt: 'Prewedding photograph 3 — Adha & Shania',
    width: 1400,
    height: 933,
  },
  {
    id: 60,
    src: adhaShania04,
    alt: 'Prewedding photograph 4 — Adha & Shania',
    width: 1400,
    height: 933,
  },
  {
    id: 61,
    src: adhaShania05,
    alt: 'Prewedding photograph 5 — Adha & Shania',
    width: 1400,
    height: 2100,
  },
  {
    id: 62,
    src: adhaShania06,
    alt: 'Prewedding photograph 6 — Adha & Shania',
    width: 1400,
    height: 2100,
  },
  {
    id: 63,
    src: adhaShania07,
    alt: 'Prewedding photograph 7 — Adha & Shania',
    width: 1400,
    height: 933,
  },
  {
    id: 64,
    src: adhaShania08,
    alt: 'Prewedding photograph 8 — Adha & Shania',
    width: 1400,
    height: 2100,
  },
  {
    id: 65,
    src: adhaShania09,
    alt: 'Prewedding photograph 9 — Adha & Shania',
    width: 1400,
    height: 2100,
  },
  {
    id: 66,
    src: adhaShania10,
    alt: 'Prewedding photograph 10 — Adha & Shania',
    width: 1400,
    height: 2100,
  },
  {
    id: 67,
    src: adhaShania11,
    alt: 'Prewedding photograph 11 — Adha & Shania',
    width: 1400,
    height: 2100,
  },
  {
    id: 68,
    src: adhaShania12,
    alt: 'Prewedding photograph 12 — Adha & Shania',
    width: 1400,
    height: 2100,
  },
  {
    id: 69,
    src: adhaShania13,
    alt: 'Prewedding photograph 13 — Adha & Shania',
    width: 1400,
    height: 2100,
  },
  {
    id: 70,
    src: adhaShania14,
    alt: 'Prewedding photograph 14 — Adha & Shania',
    width: 1400,
    height: 2100,
  },
  {
    id: 71,
    src: adhaShania15,
    alt: 'Prewedding photograph 15 — Adha & Shania',
    width: 1400,
    height: 2100,
  },
  {
    id: 72,
    src: adhaShania16,
    alt: 'Prewedding photograph 16 — Adha & Shania',
    width: 1400,
    height: 933,
  },
  {
    id: 73,
    src: adhaShania17,
    alt: 'Prewedding photograph 17 — Adha & Shania',
    width: 1400,
    height: 933,
  },
  {
    id: 74,
    src: adhaShania18,
    alt: 'Prewedding photograph 18 — Adha & Shania',
    width: 1400,
    height: 2100,
  },
  {
    id: 75,
    src: adhaShania19,
    alt: 'Prewedding photograph 19 — Adha & Shania',
    width: 1400,
    height: 933,
  },
  {
    id: 76,
    src: adhaShania20,
    alt: 'Prewedding photograph 20 — Adha & Shania',
    width: 1400,
    height: 933,
  },
  {
    id: 77,
    src: adhaShania21,
    alt: 'Prewedding photograph 21 — Adha & Shania',
    width: 1400,
    height: 933,
  },
  {
    id: 78,
    src: adhaShania22,
    alt: 'Prewedding photograph 22 — Adha & Shania',
    width: 1400,
    height: 933,
  },
  {
    id: 79,
    src: adhaShania23,
    alt: 'Prewedding photograph 23 — Adha & Shania',
    width: 1400,
    height: 933,
  },
  {
    id: 80,
    src: adhaShania24,
    alt: 'Prewedding photograph 24 — Adha & Shania',
    width: 1400,
    height: 2100,
  },
  {
    id: 81,
    src: adhaShania25,
    alt: 'Prewedding photograph 25 — Adha & Shania',
    width: 1400,
    height: 2100,
  },
  {
    id: 82,
    src: adhaShania26,
    alt: 'Prewedding photograph 26 — Adha & Shania',
    width: 1400,
    height: 2100,
  },
  {
    id: 83,
    src: adhaShania27,
    alt: 'Prewedding photograph 27 — Adha & Shania',
    width: 1400,
    height: 2100,
  },
  {
    id: 84,
    src: adhaShania28,
    alt: 'Prewedding photograph 28 — Adha & Shania',
    width: 1400,
    height: 933,
  },
  {
    id: 85,
    src: adhaShania29,
    alt: 'Prewedding photograph 29 — Adha & Shania',
    width: 1400,
    height: 2100,
  },
  {
    id: 86,
    src: adhaShania30,
    alt: 'Prewedding photograph 30 — Adha & Shania',
    width: 1400,
    height: 2100,
  },
  {
    id: 87,
    src: adhaShania31,
    alt: 'Prewedding photograph 31 — Adha & Shania',
    width: 1400,
    height: 2100,
  },
  {
    id: 88,
    src: adhaShania32,
    alt: 'Prewedding photograph 32 — Adha & Shania',
    width: 1400,
    height: 933,
  },
  {
    id: 89,
    src: adhaShania33,
    alt: 'Prewedding photograph 33 — Adha & Shania',
    width: 1400,
    height: 2100,
  },
  {
    id: 90,
    src: adhaShania34,
    alt: 'Prewedding photograph 34 — Adha & Shania',
    width: 1400,
    height: 933,
  },
  {
    id: 91,
    src: adhaShania35,
    alt: 'Prewedding photograph 35 — Adha & Shania',
    width: 1400,
    height: 933,
  },
  {
    id: 92,
    src: adhaShania36,
    alt: 'Prewedding photograph 36 — Adha & Shania',
    width: 1400,
    height: 933,
  },
  {
    id: 93,
    src: adhaShania37,
    alt: 'Prewedding photograph 37 — Adha & Shania',
    width: 1400,
    height: 933,
  },
  {
    id: 94,
    src: adhaShania38,
    alt: 'Prewedding photograph 38 — Adha & Shania',
    width: 1400,
    height: 2100,
  },
  {
    id: 95,
    src: adhaShania39,
    alt: 'Prewedding photograph 39 — Adha & Shania',
    width: 1400,
    height: 933,
  },
  {
    id: 96,
    src: adhaShania40,
    alt: 'Prewedding photograph 40 — Adha & Shania',
    width: 1400,
    height: 2100,
  },
  {
    id: 97,
    src: adhaShania41,
    alt: 'Prewedding photograph 41 — Adha & Shania',
    width: 1400,
    height: 933,
  },
  {
    id: 98,
    src: adhaShania42,
    alt: 'Prewedding photograph 42 — Adha & Shania',
    width: 1400,
    height: 933,
  },
  {
    id: 99,
    src: adhaShania43,
    alt: 'Prewedding photograph 43 — Adha & Shania',
    width: 1400,
    height: 933,
  },
  {
    id: 100,
    src: adhaShania44,
    alt: 'Prewedding photograph 44 — Adha & Shania',
    width: 1400,
    height: 933,
  },
  {
    id: 101,
    src: adhaShania45,
    alt: 'Prewedding photograph 45 — Adha & Shania',
    width: 1400,
    height: 2100,
  },
  {
    id: 102,
    src: adhaShania46,
    alt: 'Prewedding photograph 46 — Adha & Shania',
    width: 1400,
    height: 933,
  },
]

export const albums = [
  {
    slug: 'novus-jiva-villa-wedding',
    coverImage,
    coupleNames: 'The Bride & Groom',
    location: 'Novus Jiva Villa',
    year: 2026,
    shortTitle: 'A Quiet Ceremony in White',
    featured: true,
    photos: gallery,
  },
  {
    slug: 'prewedding-adha-shania',
    coverImage: adhaShania27,
    coupleNames: 'Adha & Shania',
    location: 'Location TBD',
    year: 2026,
    shortTitle: 'Prewedding Adha - Shania',
    featured: true,
    photos: adhaShaniaPhotos,
  },
]

export const featuredAlbums = albums.filter((album) => album.featured)

export function getAlbumBySlug(slug) {
  return albums.find((album) => album.slug === slug)
}
