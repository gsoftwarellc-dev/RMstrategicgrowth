import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ArrowRight,
  Quote,
  TrendingUp,
  Users,
  Award,
} from 'lucide-react'
import AnimatedSection from '../components/ui/AnimatedSection'
import SectionHeading from '../components/ui/SectionHeading'
import ClientReviews from '../components/layout/ClientReviews'

function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const increment = end / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

function AnimatedMetricBar({ value, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="h-px bg-white/10 overflow-hidden">
      <motion.div
        className="h-full bg-gold"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: value / 100 } : { scaleX: 0 }}
        transition={{ duration: 1.1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ transformOrigin: 'left' }}
      />
    </div>
  )
}

const stats = [
  {
    icon: TrendingUp,
    value: 30,
    suffix: '+',
    label: 'Years of Industry Experience',
    strength: 92,
    insight: 'Founder-led operating knowledge',
  },
  {
    icon: Award,
    value: 3,
    suffix: '',
    prefix: '',
    label: 'Successfully Exited Businesses',
    displayValue: '3',
    strength: 78,
    insight: 'Built, scaled, and exited',
  },
  {
    icon: Users,
    value: 10000,
    suffix: '+',
    label: 'Patients, Providers & Practices Served',
    strength: 96,
    insight: 'Broad market exposure',
  },
]

const approaches = [
  {
    number: '01',
    title: 'Discover & Diagnose',
    desc: 'We analyze your business to identify revenue opportunities, conversion gaps, profit leaks, patient retention challenges, and operational inefficiencies that may be limiting growth.',
  },
  {
    number: '02',
    title: 'Revenue Growth Plan',
    desc: 'We develop a customized action plan focused on increasing consultation conversion, improving patient lifetime value, maximizing treatment plan acceptance, and improving profitability.',
  },
  {
    number: '03',
    title: 'Implement & Optimize',
    desc: 'We work alongside your team to improve consultation processes, strengthen accountability, optimize systems, and implement strategies that increase revenue and operational performance.',
  },
  {
    number: '04',
    title: 'Scale & Sustain',
    desc: 'Our goal is to help you build a business that generates stronger revenue, healthier profit margins, and sustainable long-term growth.',
  },
]

const taglines = [
  {
    text: 'The Most Profitable Lead Is Often The One You’ve Already Paid For',
    author: 'RM Strategic Growth',
  },
  {
    text: 'More Revenue Doesn’t Always Require More Leads',
    author: 'RM Strategic Growth',
  },
  {
    text: 'Consultation Conversion Drives Growth',
    author: 'RM Strategic Growth',
  },
  {
    text: 'Profitability Matters More Than Revenue',
    author: 'RM Strategic Growth',
  },
  {
    text: 'Strong Foundations Create Sustainable Growth',
    author: 'RM Strategic Growth',
  },
]


export default function Results() {
  return (
    <>
      <Helmet>
        <title>Results & Approach — RM Strategic Growth</title>
        <meta
          name="description"
          content="Real results, real ownership experience. RM Strategic Growth helps aesthetic businesses make more money by improving consultation conversion, increasing patient value, strengthening operations, and improving profitability."
        />
      </Helmet>

      {/* ===== HERO ===== */}
      <section className="relative bg-black overflow-hidden">
        {/* Sticky background image */}
        <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ zIndex: 0 }}>
          <img
            src="/images/Group sitting.PNG"
            alt="RM Strategic Growth Team"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
        </div>

        {/* All hero content stacked on top */}
        <div className="relative" style={{ zIndex: 10, marginTop: '-100vh' }}>
          {/* — Title block — */}
          <div className="h-screen flex items-center justify-center text-center section-container">
            <AnimatedSection>
              <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                Results & Approach
              </p>
              <div className="gold-line-center mb-8" />
              <h1 className="text-white max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-heading)' }}>
                Real Results.{' '}
                <span className="italic" style={{ fontFamily: 'var(--font-accent)', color: 'var(--color-gold)' }}>
                  Real Ownership Experience.
                </span>
              </h1>
              <p className="text-white/85 text-base mt-6 max-w-2xl mx-auto leading-relaxed">
                Built by a former medspa owner who generated multi seven-figure revenue and
                successfully sold her business after many years.
              </p>
              <p className="text-white/85 text-base mt-4 max-w-2xl mx-auto leading-relaxed">
                We help aesthetic businesses make more money by improving consultation conversion,
                increasing patient value, strengthening operations, and improving profitability.
              </p>
              <div className="mt-10">
                <a
                  href="https://calendly.com/romymittler/30min" target="_blank" rel="noopener noreferrer"
                  className="btn-primary group inline-flex w-full sm:w-auto justify-center"
                >
                  Schedule A Free Discovery Call
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse ml-2" />
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* — How We Drive Growth — */}
          <div className="bg-black/75 backdrop-blur-sm border-t border-white/10 py-20 lg:py-28">
            <div className="section-container">
              <AnimatedSection className="text-center mb-14 lg:mb-20">
                <p className="text-gold text-[10px] font-semibold tracking-[0.35em] uppercase mb-4">
                  Our Approach
                </p>
                <div className="gold-line-center mb-7" />
                <h2 className="text-white mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
                  How We Help MedSpas{' '}
                  <span className="italic" style={{ fontFamily: 'var(--font-accent)', color: 'var(--color-gold)' }}>
                    Make More Money
                  </span>
                </h2>
                <p className="text-white text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
                  Most medspas don't need more leads. They need to convert more consultations,
                  increase treatment plan acceptance, improve patient retention, and maximize the
                  opportunities already inside their business.
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]">
                {approaches.map((step, index) => (
                  <AnimatedSection key={step.number} delay={index * 0.13}>
                    <div className="group relative bg-black/60 p-10 lg:p-14 h-full flex flex-col gap-8 overflow-hidden transition-colors duration-500 hover:bg-black/80">
                      {/* Corner accent */}
                      <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
                        <div className="absolute top-0 left-0 w-px h-10 bg-gold/25 group-hover:h-16 transition-all duration-500" />
                        <div className="absolute top-0 left-0 h-px w-10 bg-gold/25 group-hover:w-16 transition-all duration-500" />
                      </div>
                      {/* Watermark number */}
                      <span
                        className="absolute -bottom-6 -right-4 text-[10rem] lg:text-[13rem] font-light leading-none select-none pointer-events-none"
                        style={{ fontFamily: 'var(--font-heading)', color: 'transparent', WebkitTextStroke: '1px rgba(201,169,110,0.07)' }}
                      >
                        {step.number}
                      </span>
                      {/* Phase label + number */}
                      <div className="flex items-center justify-between">
                        <p className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase">Growth Phase</p>
                        <span className="text-4xl font-light text-gold group-hover:text-gold-light transition-colors duration-500" style={{ fontFamily: 'var(--font-heading)' }}>
                          {step.number}
                        </span>
                      </div>
                      {/* Animated bar */}
                      <div className="w-full h-px bg-white/[0.08] relative overflow-hidden">
                        <motion.div
                          className="absolute inset-y-0 left-0 bg-gold"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${74 + index * 7}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                        />
                      </div>
                      <h3 className="text-white text-2xl lg:text-3xl font-medium leading-tight group-hover:text-gold/90 transition-colors duration-500" style={{ fontFamily: 'var(--font-heading)' }}>
                        {step.title}
                      </h3>
                      <p className="text-white text-base leading-relaxed max-w-sm">{step.desc}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>

          {/* — Experience That Actually Matters — */}
          <div className="bg-black/80 backdrop-blur-sm border-t border-white/10 py-20 lg:py-28">
            <div className="section-container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <AnimatedSection>
                  <p className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4">
                    What Sets Us Apart
                  </p>
                  <div className="gold-line mb-8" />
                  <h2 className="text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                    Built By Someone Who{' '}
                    <span className="italic text-gold" style={{ fontFamily: 'var(--font-accent)' }}>
                      Actually Owned A MedSpa
                    </span>
                  </h2>
                  <div className="space-y-5">
                    <p className="text-white leading-relaxed">
                      Most consultants advise aesthetic businesses. Very few have personally built,
                      operated, scaled, and sold one.
                    </p>
                    <p className="text-white leading-relaxed">
                      For many years, Romy Mittler owned and operated a successful South Florida
                      medical spa, generating multi seven-figure revenue before successfully exiting
                      through a business sale.
                    </p>
                    <p className="text-white leading-relaxed">
                      Today she helps aesthetic businesses improve revenue, profitability, patient
                      retention, and operational performance.
                    </p>
                  </div>
                  <div className="mt-10">
                    <a
                      href="https://calendly.com/romymittler/30min" target="_blank" rel="noopener noreferrer"
                      className="btn-primary group inline-flex w-full sm:w-auto justify-center"
                    >
                      Schedule A Free Discovery Call
                      <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse ml-2" />
                    </a>
                  </div>
                </AnimatedSection>

                <AnimatedSection direction="right">
                  <img
                    src="/images/C7F8E8D2-9CF7-4C52-AB49-AB52DF5F0A79.PNG"
                    alt="RM Strategic Growth approach"
                    className="w-full object-cover aspect-[4/5]"
                  />
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ILLUSTRATIVE RESULTS EXAMPLE ===== */}
      <section className="py-16 lg:py-28 bg-black">
        <div className="section-container">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <p className="text-gold text-xs font-semibold tracking-[0.28em] uppercase mb-4">
              Real Impact
            </p>
            <div className="gold-line-center mb-6" />
            <h2 className="text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              We Help MedSpas Make More Money
            </h2>
            <p className="text-white text-base lg:text-lg leading-relaxed">
              A sample breakdown of the kind of growth our clients see across revenue, conversion, and profitability.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <img
              src="/images/result.PNG"
              alt="Illustrative before and after results: monthly revenue, consultation conversion, cost of goods, and net profit improvements"
              className="w-full max-w-4xl mx-auto rounded-lg border border-white/10"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-16 lg:py-28 bg-[#080808] text-white">
        <div className="section-container">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <p className="text-gold text-xs font-semibold tracking-[0.28em] uppercase mb-4">
              Proven Experience
            </p>
            <div className="gold-line-center mb-6" />
            <h2 className="text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Built on Real Industry Perspective
            </h2>
            <p className="text-white text-base lg:text-lg leading-relaxed">
              A foundation of ownership, operations, clinical insight, and practice growth experience.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="group h-full bg-[#111111] border border-white/10 p-6 lg:p-7 transition-all duration-300 hover:border-gold/45 hover:bg-[#141414]">
                  <div className="flex items-center justify-between gap-4 mb-10">
                    <div className="w-11 h-11 flex items-center justify-center border border-gold/30 bg-gold/10">
                      <stat.icon className="text-gold" size={20} />
                    </div>
                    <span className="text-white/20 text-xs font-semibold tracking-[0.18em]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  {stat.tags ? (
                    <div className="flex flex-wrap gap-1.5 mb-4 min-h-[88px] lg:min-h-[96px] items-start content-start">
                      {stat.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-gold text-[11px] font-semibold tracking-wide border border-gold/30 bg-gold/5 px-2.5 py-1.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p
                      className="text-5xl lg:text-6xl font-light mb-4 text-gold"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {stat.displayValue ? (
                        stat.displayValue
                      ) : (
                        <AnimatedCounter
                          end={stat.value}
                          suffix={stat.suffix}
                          prefix={stat.prefix || ''}
                        />
                      )}
                    </p>
                  )}
                  <div className="w-10 h-px bg-gold/60 mb-4 transition-all duration-300 group-hover:w-16" />
                  <p className="text-white/78 text-xs tracking-[0.18em] uppercase leading-relaxed">
                    {stat.label}
                  </p>
                  <div className="mt-6">
                    <AnimatedMetricBar value={stat.strength} delay={index * 0.08} />
                    <p className="text-white text-xs mt-3 leading-relaxed">
                      {stat.insight}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TAGLINE CARDS ===== */}
      <section className="relative py-20 lg:py-32 bg-[#0A0A0A] overflow-hidden">
        {/* Radial glow center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[400px] rounded-full opacity-[0.06]" style={{
            background: 'radial-gradient(ellipse, var(--color-gold) 0%, transparent 70%)',
          }} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="relative z-10 section-container">
          {/* Header */}
          <AnimatedSection className="text-center mb-14 lg:mb-20">
            <p className="text-gold text-[10px] font-semibold tracking-[0.35em] uppercase mb-4">Our Promise</p>
            <div className="gold-line-center mb-7" />
            <h2 className="text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              What We{' '}
              <span className="italic" style={{ fontFamily: 'var(--font-accent)', color: 'var(--color-gold)' }}>
                Stand For
              </span>
            </h2>
          </AnimatedSection>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.05]">
            {taglines.map((tagline, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="group relative bg-[#0A0A0A] p-10 lg:p-14 flex flex-col justify-between min-h-[280px] overflow-hidden transition-colors duration-500 hover:bg-[#101010]">
                  {/* Corner accent lines */}
                  <div className="absolute top-0 left-0 w-12 h-12">
                    <div className="absolute top-0 left-0 w-px h-8 bg-white/30 group-hover:h-12 transition-all duration-500" />
                    <div className="absolute top-0 left-0 h-px w-8 bg-white/30 group-hover:w-12 transition-all duration-500" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-12 h-12">
                    <div className="absolute bottom-0 right-0 w-px h-8 bg-white/30 group-hover:h-12 transition-all duration-500" />
                    <div className="absolute bottom-0 right-0 h-px w-8 bg-white/30 group-hover:w-12 transition-all duration-500" />
                  </div>

                  {/* Top Header: Gold dash & Number */}
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="w-8 h-px bg-gold/50 group-hover:w-14 transition-all duration-500" />
                    <span className="text-white text-xl font-medium tracking-[0.1em] transition-colors duration-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Text */}
                  <p
                    className="text-white text-xl lg:text-2xl font-light leading-snug flex-1"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {tagline.text}
                  </p>

                  {/* Bottom row */}
                  <div className="flex items-center gap-3 mt-10">
                    <div className="w-4 h-px bg-gold/40" />
                    <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase">
                      RM Strategic Growth
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* ===== CLIENT REVIEWS ===== */}
      <ClientReviews />

      {/* ===== PHILOSOPHY BANNER ===== */}
      <section className="relative py-24 lg:py-40 overflow-hidden bg-[#050505]">
        {/* Radial gold glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full opacity-[0.07]" style={{
            background: 'radial-gradient(circle, var(--color-gold) 0%, transparent 70%)',
          }} />
        </div>

        {/* Diagonal grid texture */}
        <div className="absolute inset-0 opacity-[0.035]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, var(--color-gold) 0, var(--color-gold) 1px, transparent 0, transparent 50%)`,
          backgroundSize: '36px 36px',
        }} />

        {/* Top & bottom gold lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

        <div className="relative z-10 section-container">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            {/* Decorative open-quote mark */}
            <div
              className="text-[7rem] lg:text-[9rem] leading-none text-gold/15 select-none mb-[-2rem]"
              style={{ fontFamily: 'var(--font-accent)' }}
            >
              "
            </div>

            {/* Main quote */}
            <p
              className="text-white text-2xl sm:text-3xl lg:text-5xl leading-tight font-light mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our goal is to help aesthetic businesses{' '}
              <span className="italic text-gold" style={{ fontFamily: 'var(--font-accent)' }}>
                move faster,
              </span>{' '}
              operate smarter, and build stronger{' '}
              <span className="italic text-gold" style={{ fontFamily: 'var(--font-accent)' }}>
                long-term brands
              </span>
            </p>

            {/* Sub-line */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <div className="h-px w-12 bg-gold/40" />
              <p className="text-white text-xs font-semibold tracking-[0.3em] uppercase">
                without wasting years learning through costly trial and error alone
              </p>
              <div className="h-px w-12 bg-gold/40" />
            </div>

            {/* Attribution */}
            <p className="text-gold text-sm tracking-[0.25em] uppercase mt-6 font-semibold">
              RM Strategic Growth
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 lg:py-28 bg-black text-center">
        <div className="section-container">
          <AnimatedSection>
            <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Start Your Growth Journey
            </p>
            <div className="gold-line-center mb-8" />
            <h2 className="text-white mb-6 max-w-xl mx-auto" style={{ fontFamily: 'var(--font-heading)' }}>
              Ready to See Results in{' '}
              <span className="italic" style={{ fontFamily: 'var(--font-accent)' }}>
                Your Practice?
              </span>
            </h2>
            <p className="text-white/85 text-base mb-10 max-w-lg mx-auto leading-relaxed">
              Schedule a consultation to discuss how we can help your aesthetic business
              grow smarter, operate stronger, and scale profitably.
            </p>
            <a href="https://calendly.com/romymittler/30min" target="_blank" rel="noopener noreferrer"  className="btn-primary w-full sm:w-auto justify-center text-center">
              Schedule A Free Discovery Call
              <ArrowRight className="ml-2" size={16} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
