import { Link } from 'react-router-dom'
import { cn, focusRing } from '@/lib/utils'

function NotFoundPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-paper px-6 text-center">
      <p className="font-display text-2xl italic text-ink">This story couldn&apos;t be found.</p>
      <Link
        to="/"
        className={cn(
          'text-xs uppercase tracking-[0.25em] text-ink/60 underline-offset-4 transition-colors hover:text-ink hover:underline',
          focusRing,
        )}
      >
        Return Home
      </Link>
    </div>
  )
}

export default NotFoundPage
