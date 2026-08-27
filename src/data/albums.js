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
import { feniRizoPhotos, feniRizo01 } from './feni-rizo'
import jamilahOscar01 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-01.webp'
import jamilahOscar02 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-02.webp'
import jamilahOscar03 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-03.webp'
import jamilahOscar04 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-04.webp'
import jamilahOscar05 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-05.webp'
import jamilahOscar06 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-06.webp'
import jamilahOscar07 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-07.webp'
import jamilahOscar08 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-08.webp'
import jamilahOscar09 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-09.webp'
import jamilahOscar10 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-10.webp'
import jamilahOscar11 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-11.webp'
import jamilahOscar12 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-12.webp'
import jamilahOscar13 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-13.webp'
import jamilahOscar14 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-14.webp'
import jamilahOscar15 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-15.webp'
import jamilahOscar16 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-16.webp'
import jamilahOscar17 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-17.webp'
import jamilahOscar18 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-18.webp'
import jamilahOscar19 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-19.webp'
import jamilahOscar20 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-20.webp'
import jamilahOscar21 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-21.webp'
import jamilahOscar22 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-22.webp'
import jamilahOscar23 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-23.webp'
import jamilahOscar24 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-24.webp'
import jamilahOscar25 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-25.webp'
import jamilahOscar26 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-26.webp'
import jamilahOscar27 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-27.webp'
import jamilahOscar28 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-28.webp'
import jamilahOscar29 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-29.webp'
import jamilahOscar30 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-30.webp'
import jamilahOscar31 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-31.webp'
import jamilahOscar32 from '@/assets/gallery/jamilah-oscar/jamilah-oscar-32.webp'

const jamilahOscarPhotos = [
  { id: 101, src: jamilahOscar01, alt: 'Feni & Rizo wedding photograph 1', width: 1400, height: 2100 },
  { id: 102, src: jamilahOscar02, alt: 'Feni & Rizo wedding photograph 2', width: 1400, height: 2100 },
  { id: 103, src: jamilahOscar03, alt: 'Feni & Rizo wedding photograph 3', width: 1400, height: 2100 },
  { id: 104, src: jamilahOscar04, alt: 'Feni & Rizo wedding photograph 4', width: 1400, height: 2100 },
  { id: 105, src: jamilahOscar05, alt: 'Feni & Rizo wedding photograph 5', width: 1400, height: 2100 },
  { id: 106, src: jamilahOscar06, alt: 'Feni & Rizo wedding photograph 6', width: 1400, height: 2100 },
  { id: 107, src: jamilahOscar07, alt: 'Feni & Rizo wedding photograph 7', width: 1400, height: 2100 },
  { id: 108, src: jamilahOscar08, alt: 'Feni & Rizo wedding photograph 8', width: 1400, height: 2100 },
  { id: 109, src: jamilahOscar09, alt: 'Feni & Rizo wedding photograph 9', width: 1400, height: 2100 },
  { id: 110, src: jamilahOscar10, alt: 'Feni & Rizo wedding photograph 10', width: 1400, height: 2100 },
  { id: 111, src: jamilahOscar11, alt: 'Feni & Rizo wedding photograph 11', width: 1400, height: 2100 },
  { id: 112, src: jamilahOscar12, alt: 'Feni & Rizo wedding photograph 12', width: 1400, height: 2100 },
  { id: 113, src: jamilahOscar13, alt: 'Feni & Rizo wedding photograph 13', width: 1400, height: 2100 },
  { id: 114, src: jamilahOscar14, alt: 'Feni & Rizo wedding photograph 14', width: 1400, height: 2100 },
  { id: 115, src: jamilahOscar15, alt: 'Feni & Rizo wedding photograph 15', width: 1400, height: 2100 },
  { id: 116, src: jamilahOscar16, alt: 'Feni & Rizo wedding photograph 16', width: 1400, height: 2100 },
  { id: 117, src: jamilahOscar17, alt: 'Feni & Rizo wedding photograph 17', width: 1400, height: 2100 },
  { id: 118, src: jamilahOscar18, alt: 'Feni & Rizo wedding photograph 18', width: 1400, height: 2100 },
  { id: 119, src: jamilahOscar19, alt: 'Feni & Rizo wedding photograph 19', width: 1400, height: 2100 },
  { id: 120, src: jamilahOscar20, alt: 'Feni & Rizo wedding photograph 20', width: 1400, height: 2100 },
  { id: 121, src: jamilahOscar21, alt: 'Feni & Rizo wedding photograph 21', width: 1400, height: 2100 },
  { id: 122, src: jamilahOscar22, alt: 'Feni & Rizo wedding photograph 22', width: 1400, height: 2100 },
  { id: 123, src: jamilahOscar23, alt: 'Feni & Rizo wedding photograph 23', width: 1400, height: 2100 },
  { id: 124, src: jamilahOscar24, alt: 'Feni & Rizo wedding photograph 24', width: 1400, height: 2100 },
  { id: 125, src: jamilahOscar25, alt: 'Feni & Rizo wedding photograph 25', width: 1400, height: 2100 },
  { id: 126, src: jamilahOscar26, alt: 'Feni & Rizo wedding photograph 26', width: 1400, height: 2100 },
  { id: 127, src: jamilahOscar27, alt: 'Feni & Rizo wedding photograph 27', width: 1400, height: 2100 },
  { id: 128, src: jamilahOscar28, alt: 'Feni & Rizo wedding photograph 28', width: 1400, height: 2100 },
  { id: 129, src: jamilahOscar29, alt: 'Feni & Rizo wedding photograph 29', width: 1400, height: 2100 },
  { id: 130, src: jamilahOscar30, alt: 'Feni & Rizo wedding photograph 30', width: 1400, height: 2100 },
  { id: 131, src: jamilahOscar31, alt: 'Feni & Rizo wedding photograph 31', width: 1400, height: 2100 },
  { id: 132, src: jamilahOscar32, alt: 'Feni & Rizo wedding photograph 32', width: 1400, height: 2100 },
]

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
    shortTitle: 'Wedding',
    featured: true,
    photos: gallery,
  },
  {
    slug: 'prewedding-adha-shania',
    coverImage: adhaShania27,
    coupleNames: 'Adha & Shania',
    location: 'Location TBD',
    year: 2026,
    shortTitle: 'Prewedding',
    featured: true,
    photos: adhaShaniaPhotos,
  },
  {
    slug: 'jamilah-oscar-wedding',
    coverImage: jamilahOscar01,
    coupleNames: 'Jamilah & Oscar',
    location: 'Beach',
    year: 2026,
    shortTitle: 'Wedding',
    featured: true,
    photos: jamilahOscarPhotos,
  },
  {
    slug: 'feni-rizo-wedding',
    coverImage: feniRizo01,
    coupleNames: 'Feni & Rizo',
    location: 'Beach',
    year: 2026,
    shortTitle: 'Wedding',
    featured: true,
    photos: feniRizoPhotos,
  }
]

export const featuredAlbums = albums.filter((album) => album.featured)

export function getAlbumBySlug(slug) {
  return albums.find((album) => album.slug === slug)
}
