import AnimatedSection from './AnimatedSection'

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
  useBodoni = false,
  showLine = true,
}) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'
  const lineClass = align === 'center' ? 'gold-line-center' : 'gold-line'

  return (
    <AnimatedSection className={`mb-6 lg:mb-8 ${alignClass} overflow-visible`}>
      {subtitle && (
        <p
          className={`text-xs font-semibold tracking-[0.25em] uppercase mb-4 ${
            light ? 'text-gold-light' : 'text-gold'
          }`}
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {subtitle}
        </p>
      )}
      {showLine && <span className={`${lineClass} mb-6`} />}
      <h2
        className={`mt-6 pt-2 overflow-visible ${light ? 'text-white' : 'text-black'} ${useBodoni ? 'italic font-bold' : ''}`}
        style={{ fontFamily: useBodoni ? 'var(--font-bodoni)' : 'var(--font-heading)' }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          } ${light ? 'text-white/85 text-base' : 'text-gray-warm'}`}
        >
          {description}
        </p>
      )}
    </AnimatedSection>
  )
}
