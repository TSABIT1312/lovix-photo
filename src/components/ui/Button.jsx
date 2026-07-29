import { cn, focusRing } from '@/lib/utils'

const base =
  'inline-flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-300 sm:text-sm'

const variants = {
  solid: 'rounded-full border border-ink/70 px-8 py-3 text-ink hover:bg-ink hover:text-paper',
  ghost: 'text-ink/80 underline-offset-4 hover:text-ink hover:underline',
}

/**
 * Shared CTA primitive — renders as an <a> by default (every current use is a
 * link: anchor jump, wa.me, instagram.com) but accepts `as` for a real
 * <button> where there's no href.
 */
function Button({ as: Component = 'a', variant = 'solid', className = '', ...props }) {
  return <Component className={cn(base, variants[variant], focusRing, className)} {...props} />
}

export default Button
