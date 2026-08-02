import { Suspense, lazy, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import NavBar from '@/components/layout/NavBar'
import ScrollToTop from '@/components/layout/ScrollToTop'
import { cn, focusRing } from '@/lib/utils'
import HomePage from '@/pages/HomePage'

// Code-split routes that aren't needed for the homepage's first paint —
// keeps the initial JS bundle (and LCP) scoped to what the landing page uses.
const StoryDetailPage = lazy(() => import('@/pages/StoryDetailPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

// Blocks the common ways visitors pull a full-res copy of a portfolio photo
// (right-click "Save image as", drag-to-desktop). Scoped to <img> only so
// text selection and right-click elsewhere on the site keep working.
function useImageDownloadGuard() {
  useEffect(() => {
    function blockOnImage(event) {
      if (event.target instanceof HTMLImageElement) {
        event.preventDefault()
      }
    }

    document.addEventListener('contextmenu', blockOnImage)
    document.addEventListener('dragstart', blockOnImage)
    return () => {
      document.removeEventListener('contextmenu', blockOnImage)
      document.removeEventListener('dragstart', blockOnImage)
    }
  }, [])
}

function App() {
  useImageDownloadGuard()

  return (
    <Layout>
      <ScrollToTop />
      <a
        href="#main-content"
        className={cn(
          'sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-paper focus:px-4 focus:py-2 focus:text-xs focus:uppercase focus:tracking-[0.2em] focus:text-ink',
          focusRing,
        )}
      >
        Skip to content
      </a>
      <NavBar />
      <main id="main-content">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/stories/:slug" element={<StoryDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </Layout>
  )
}

export default App
