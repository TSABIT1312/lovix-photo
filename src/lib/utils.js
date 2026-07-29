export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-offset-paper focus-visible:ring-[#7a5c1f]'
