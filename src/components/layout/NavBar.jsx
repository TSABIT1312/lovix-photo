import { Link } from 'react-router-dom'
import { cn, focusRing } from '@/lib/utils'

const navLinkClass = cn(
  'whitespace-nowrap text-[10px] uppercase tracking-[0.15em] text-ink/70 transition-colors hover:text-ink sm:text-xs sm:tracking-[0.2em]',
  focusRing,
)

/**
 * Sits above every page (absolutely positioned, not sticky) — on the
 * homepage that means it overlays the fullscreen Hero photo instead of
 * pushing it down; Hero's own contrast overlay already keeps this legible.
 * "View Stories" / "Contact" link to /#stories and /#contact regardless of
 * which page you're on — ScrollToTop handles the actual scrolling once the
 * homepage has mounted.
 */
function NavBar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-4 py-5 sm:px-10 sm:py-8">
      <Link
        to="/"
        className={cn(
          'whitespace-nowrap font-display text-[10px] uppercase tracking-[0.15em] text-ink transition-colors hover:text-ink/70 sm:text-xs sm:tracking-[0.3em]',
          focusRing,
        )}
      >
        Lovix Photo
      </Link>

      <nav className="flex items-center gap-4 sm:gap-8">
        <Link to="/#stories" className={navLinkClass}>
          View Stories
        </Link>
        <Link to="/#contact" className={navLinkClass}>
          Contact
        </Link>
      </nav>
    </header>
  )
}

export default NavBar
