import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * React Router doesn't reset scroll position on navigation by default.
 * Without this, clicking an album card mid-scroll on the homepage would
 * land on the Story Detail page still scrolled halfway down — breaking the
 * "opening a new page" feeling this site depends on.
 *
 * When the destination has a hash (the NavBar's "View Stories"/"Contact"
 * links, which point to /#stories and /#contact from anywhere on the site),
 * scroll to that section instead — otherwise this would fight the browser's
 * own anchor scrolling and always win by forcing the page back to the top.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default ScrollToTop
