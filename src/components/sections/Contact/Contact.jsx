import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4" aria-hidden="true">
      <path
        d="M21 11.5a8.5 8.5 0 01-8.5 8.5c-1.35 0-2.62-.32-3.74-.9L4 20l1.05-4.2A8.46 8.46 0 013.5 11.5 8.5 8.5 0 0112 3a8.5 8.5 0 019 8.5z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Props (per docs/trd.md): { whatsapp, instagram }. Defaults are placeholders —
 * swap for the real number/handle before launch.
 *
 * `variant="compact"` is used when this closes out a Story Detail Page
 * (tighter padding, no leading hairline — the gallery above it already
 * provides enough visual separation) instead of the full homepage section.
 */
function Contact({
  whatsapp = 'https://wa.me/6281234567890',
  instagram = 'https://instagram.com/loxix.photo',
  variant = 'full',
}) {
  const reduceMotion = useReducedMotion()
  const isCompact = variant === 'compact'

  return (
    <section
      id="contact"
      aria-label="Contact"
      className={cn('bg-paper', isCompact ? 'py-16 sm:py-20' : 'py-24 sm:py-32')}
    >
      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
          {!isCompact && <div className="mb-12 h-px w-12 bg-ink/15 sm:mb-16" aria-hidden="true" />}

          <p className="font-display text-xs font-medium uppercase tracking-[0.4em] text-gold">Get in Touch</p>

          <p className="mt-6 max-w-sm font-display text-2xl italic text-ink sm:text-3xl">
            Let&apos;s capture your story next.
          </p>

          <div className="mt-10 flex flex-row items-center gap-3 sm:gap-6">
            <Button href={whatsapp} target="_blank" rel="noopener noreferrer" variant="solid">
              <ChatIcon />
              WhatsApp
            </Button>
            <Button href={instagram} target="_blank" rel="noopener noreferrer" variant="solid">
              <CameraIcon />
              Instagram
            </Button>
          </div>

          <div className="mt-20 flex items-center gap-3 text-ink/60">
            <span className="h-px w-8 bg-ink/20" aria-hidden="true" />
            <p className="font-display text-[0.65rem] font-medium uppercase tracking-[0.3em]">
              Loxix Photo &copy; {new Date().getFullYear()}
            </p>
            <span className="h-px w-8 bg-ink/20" aria-hidden="true" />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Contact
