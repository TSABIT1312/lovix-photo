import { cn } from '@/lib/utils'

/**
 * Honest filler for grid slots beyond the real albums — never pretends to
 * be a story. Keeps the collection from reading as "we only have one
 * wedding" while more real albums are being added.
 */
function ComingSoonCard({ size = 'standard' }) {
  const isLarge = size === 'large'

  return (
    <div
      className={cn(
        'flex items-center justify-center border border-dashed border-ink/15 bg-paper-soft/50',
        isLarge ? 'aspect-[16/10]' : 'aspect-[4/5]',
      )}
    >
      <p className="text-center font-display text-xs uppercase leading-relaxed tracking-[0.3em] text-ink/30">
        New Story
        <br />
        Coming Soon
      </p>
    </div>
  )
}

export default ComingSoonCard
