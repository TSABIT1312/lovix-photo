import { useEffect } from 'react'

const SITE_NAME = 'Lovix Photo'
// TODO: replace with the real production domain once the site has one —
// keeps canonical/OG URLs correct instead of silently pointing at a placeholder.
const SITE_URL = 'https://lovixphoto.com'
const DEFAULT_DESCRIPTION =
  'Premium wedding photography portfolio by Lovix Photo. Capturing timeless love stories through elegant and emotional imagery.'
const DEFAULT_IMAGE = `${SITE_URL}/og-cover.jpg`

function setMetaByName(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setMetaByProperty(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * This is a CSR-only SPA (no SSR/prerendering), so index.html can only ever
 * carry one static <title>/description/OG set. Googlebot renders JS and will
 * see whatever this hook sets, but non-JS crawlers (link-preview bots, some
 * SEO tools) only see index.html's fallback values — keep those reasonably
 * accurate too.
 */
export function useDocumentMeta({ title, description = DEFAULT_DESCRIPTION, path = '/', image = DEFAULT_IMAGE, noindex = false }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Wedding Photography`
    const url = `${SITE_URL}${path}`

    document.title = fullTitle
    setMetaByName('description', description)
    setMetaByName('robots', noindex ? 'noindex, nofollow' : 'index, follow')
    setMetaByProperty('og:title', fullTitle)
    setMetaByProperty('og:description', description)
    setMetaByProperty('og:url', url)
    setMetaByProperty('og:image', image)
    setMetaByName('twitter:title', fullTitle)
    setMetaByName('twitter:description', description)
    setMetaByName('twitter:image', image)
    setCanonical(url)
  }, [title, description, path, image, noindex])
}
