import { useParams } from 'react-router-dom'
import { getAlbumBySlug } from '@/data/albums'
import StoryCover from '@/components/albums/StoryCover'
import StoryGallery from '@/components/albums/StoryGallery'
import Contact from '@/components/sections/Contact/Contact'
import NotFoundPage from './NotFoundPage'

function StoryDetailPage() {
  const { slug } = useParams()
  const album = getAlbumBySlug(slug)

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
