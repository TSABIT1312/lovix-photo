import { useParams } from 'react-router-dom'
import { getAlbumBySlug } from '@/data/albums'
import StoryCover from '@/components/albums/StoryCover'
import StoryGallery from '@/components/albums/StoryGallery'
import Contact from '@/components/sections/Contact/Contact'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'
import NotFoundPage from './NotFoundPage'

function StoryDetailPage() {
  const { slug } = useParams()
  const album = getAlbumBySlug(slug)

  useDocumentMeta({
    title: album ? `${album.coupleNames} — ${album.shortTitle}` : undefined,
    description: album
      ? `${album.shortTitle} photography for ${album.coupleNames} at ${album.location}, by Lovix Photo.`
      : undefined,
    path: album ? `/stories/${album.slug}` : `/stories/${slug ?? ''}`,
    image: album?.coverImage,
    noindex: !album,
  })

  if (!album) {
    return <NotFoundPage />
  }

  return (
    <>
      <StoryCover album={album} />
      <StoryGallery photos={album.photos} />
      <Contact variant="compact" />
    </>
  )
}

export default StoryDetailPage
