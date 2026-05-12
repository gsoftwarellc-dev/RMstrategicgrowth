import { Calendar } from 'lucide-react'

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 lg:bottom-10 lg:right-10 flex flex-col items-end gap-3 pointer-events-none">
      <div className="pointer-events-auto">
        <a
          href="https://calendly.com/romymittler/30min" target="_blank" rel="noopener noreferrer"
          className="btn-primary flex items-center gap-2 shadow-2xl hover:scale-105 transition-transform duration-300"
          style={{ padding: '16px 24px', borderRadius: '50px' }}
        >
          <Calendar size={20} />
          <span className="font-semibold tracking-wider text-sm hidden sm:inline-block">
            Schedule a Consultation
          </span>
          <span className="font-semibold tracking-wider text-sm sm:hidden">
            Book
          </span>
        </a>
      </div>
    </div>
  )
}
