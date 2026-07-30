import { Link } from 'react-router-dom'
import { cn, focusRing } from '@/lib/utils'

const navLinkClass = cn(
  'whitespace-nowrap text-[10px] uppercase tracking-[0.15em] text-paper/80 drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)] transition-colors hover:text-paper sm:text-xs sm:tracking-[0.2em]',
  focusRing,
)

/**
 * Sits above every page (absolutely positioned, not sticky) — on the
 * homepage and story-detail pages that means it overlays a full-bleed photo
 * (Hero / StoryCover) instead of pushing it down. The scrim behind the links
 * keeps the light text legible there and doesn't meaningfully change the
 * look of the plain-paper 404 page underneath it.
 * "View Stories" / "Contact" link to /#stories and /#contact regardless of
 * which page you're on — ScrollToTop handles the actual scrolling once the
 * homepage has mounted.
 */
function NavBar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-4 py-5 sm:px-10 sm:py-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-ink/30 to-transparent"
      />
      <Link
        to="/"
        className={cn(
          'whitespace-nowrap font-display text-[10px] uppercase tracking-[0.15em] text-paper drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)] transition-colors hover:text-paper/70 sm:text-xs sm:tracking-[0.3em]',
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
