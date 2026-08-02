/**
 * Honest filler, same policy as albums/ComingSoonCard — never dresses up an
 * empty slot as a real film. Sized the same way as FilmCard (fixed height,
 * width from aspect ratio) so it sits evenly in the same row.
 */
function FilmComingSoonCard({ aspectRatio = '9 / 16' }) {
  return (
    <div className="w-full sm:w-auto">
      <div
        style={{ aspectRatio }}
        className="flex w-full items-center justify-center border border-dashed border-ink/15 bg-paper-soft/50 sm:h-[400px] sm:w-auto lg:h-[480px]"
      >
        <p className="px-6 text-center font-display text-xs uppercase leading-relaxed tracking-[0.3em] text-ink/70">
          New Film
          <br />
          Coming Soon
        </p>
      </div>
    </div>
  )
}

export default FilmComingSoonCard
