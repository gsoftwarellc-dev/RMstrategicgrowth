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
  Target,
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
      {prefix}{count}{suffix}
    </span>
  )
}

const stats = [
  {
    icon: TrendingUp,
    value: 17,
    suffix: '+',
    label: 'Years of Industry Experience',
  },
  {
    icon: Award,
    value: 1,
    suffix: '',
    prefix: '',
    label: 'Successfully Exited Business',
    displayValue: '1',
  },
  {
    icon: Users,
    value: 1000,
    suffix: 's',
    label: 'Patients, Providers & Practices Served',
  },
  {
    icon: Target,
    value: 26,
    suffix: '+',
    label: 'States Covered Nationwide',
  },
]

const approaches = [
  {
    number: '01',
    title: 'Discover & Diagnose',
    desc: 'We start by understanding your practice inside and out — operations, team dynamics, patient experience, financials, and growth challenges.',
  },
  {
    number: '02',
    title: 'Strategic Roadmap',
    desc: 'We create a customized strategic plan addressing your specific operational blind spots, growth opportunities, and scaling potential.',
  },
  {
    number: '03',
    title: 'Implement & Optimize',
    desc: 'Our team works alongside yours to implement systems, refine processes, develop leadership, and create accountability structures.',
  },
  {
    number: '04',
    title: 'Scale & Sustain',
    desc: 'We help you build a business that is not only profitable, but sustainable — with the infrastructure to support long-term growth.',
  },
]

const taglines = [
  {
    text: 'Built to Scale, Designed to Last',
    author: 'RM Strategic Growth',
  },
  {
    text: 'Where Aesthetic Vision Meets Strategic Execution',
    author: 'RM Strategic Growth',
  },
  {
    text: 'Real Strategy, Real Growth, Real Industry Experience',
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
          content="See how RM Strategic Growth delivers measurable results for aesthetic practices through strategic consulting, operational excellence, and data-driven growth strategies."
        />
      </Helmet>

      {/* ===== HERO ===== */}
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/Group sitting.PNG"
            alt="RM Strategic Growth Team"
            className="w-full h-full object-cover object-top opacity-50"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 section-container py-24 lg:py-32 text-center">
          <AnimatedSection>
            <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Results & Approach
            </p>
            <div className="gold-line-center mb-8" />
            <h1 className="text-white max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-heading)' }}>
              Proven Results,{' '}
              <span className="italic" style={{ fontFamily: 'var(--font-accent)', color: 'var(--color-gold)' }}>
                Strategic Impact
              </span>
            </h1>
            <p className="text-white/85 text-base mt-6 max-w-2xl mx-auto leading-relaxed">
              Our approach combines decades of hands-on experience with strategic methodology
              to deliver measurable growth for aesthetic businesses.
            </p>
            <div className="mt-10">
              <a
                href="https://calendly.com/theriyadh75/30min?back=1&month=2026-05"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group inline-flex w-full sm:w-auto justify-center"
              >
                Book a Call
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse ml-2" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-12 lg:py-24 bg-cream">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto flex items-center justify-center border border-gold/25 mb-5">
                    <stat.icon className="text-gold" size={22} />
                  </div>
                  <p
                    className="text-4xl lg:text-5xl font-light mb-2 text-charcoal"
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
                  <p className="text-gray-warm text-xs tracking-wider uppercase">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR APPROACH ===== */}
      <section className="py-16 lg:py-32 bg-white">
        <div className="section-container">
          <SectionHeading
            subtitle="Our Approach"
            title="How We Drive Growth"
            description="A structured, proven methodology that transforms aesthetic businesses from the inside out."
          />

          <div className="max-w-4xl mx-auto">
            {approaches.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 0.15}>
                <div className="flex gap-8 py-10 border-b border-gray-light/50 last:border-0 group">
                  <div className="flex-shrink-0">
                    <span
                      className="text-5xl lg:text-6xl font-light text-gold/20 group-hover:text-gold/50 transition-colors duration-500"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                      {step.title}
                    </h3>
                    <p className="text-gray-warm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY BANNER ===== */}
      <section className="relative py-28 lg:py-36 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, var(--color-gold) 0, var(--color-gold) 1px, transparent 0, transparent 50%)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="relative z-10 section-container text-center">
          <AnimatedSection>
            <Quote size={40} className="text-gold/30 mx-auto mb-8" />
            <p
              className="text-white text-2xl lg:text-4xl max-w-3xl mx-auto leading-snug"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our goal is to help aesthetic businesses move faster, operate smarter,
              and build stronger{' '}
              <span className="italic text-gold" style={{ fontFamily: 'var(--font-accent)' }}>
                long-term brands
              </span>
            </p>
            <p className="text-white/40 text-sm mt-8 tracking-wider uppercase">
              — without wasting years learning through costly trial and error alone.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== TAGLINE CARDS ===== */}
      <section className="py-16 lg:py-28 bg-cream">
        <div className="section-container">
          <SectionHeading
            subtitle="Our Promise"
            title="What We Stand For"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {taglines.map((tagline, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="bg-white p-10 border border-gray-light/50 text-center hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 transition-all duration-500 h-full flex flex-col items-center justify-center">
                  <div className="w-10 h-[1px] bg-gold mb-6" />
                  <p
                    className="text-lg text-charcoal leading-relaxed"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {tagline.text}
                  </p>
                  <div className="w-10 h-[1px] bg-gold mt-6" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT SETS US APART ===== */}
      <section className="py-16 lg:py-28 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimatedSection>
              <p className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4">
                What Sets Us Apart
              </p>
              <div className="gold-line mb-8" />
              <h2 className="mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Experience That{' '}
                <span className="italic" style={{ fontFamily: 'var(--font-accent)' }}>
                  Actually Matters
                </span>
              </h2>
              <div className="space-y-5">
                <p className="text-gray-warm leading-relaxed">
                  Growth in this industry rarely happens in a straight line. Success comes through
                  testing, adapting, learning, refining, and understanding what actually works
                  operationally — not just what sounds good online.
                </p>
                <p className="text-gray-warm leading-relaxed">
                  Our advisory team brings specialized, real world experience from multiple sides
                  of the industry. Amanda Lewis brings advanced clinical and aesthetic expertise.
                  Emily Shea brings extensive expertise in business development and sales strategy.
                </p>
                <p className="text-gray-warm leading-relaxed">
                  Together, our team combines operational experience, clinical expertise, leadership,
                  branding, patient experience, sales strategy, and growth execution under one
                  consulting group.
                </p>
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
      </section>

      {/* ===== CLIENT REVIEWS ===== */}
      <ClientReviews />

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
            <a href="https://calendly.com/theriyadh75/30min?back=1&month=2026-05" target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto justify-center text-center">
              Schedule a Consultation
              <ArrowRight className="ml-2" size={16} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
