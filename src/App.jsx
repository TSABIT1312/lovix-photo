import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import NavBar from '@/components/layout/NavBar'
import ScrollToTop from '@/components/layout/ScrollToTop'
import HomePage from '@/pages/HomePage'
import StoryDetailPage from '@/pages/StoryDetailPage'
import NotFoundPage from '@/pages/NotFoundPage'

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stories/:slug" element={<StoryDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  )
}

export default App
