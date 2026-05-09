import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import {
  TrendingUp,
  Settings,
  Users,
  Sparkles,
  Rocket,
  Shield,
  ArrowRight,
  CheckCircle,
  Plus,
  Minus,
} from 'lucide-react'
import AnimatedSection from '../components/ui/AnimatedSection'
import SectionHeading from '../components/ui/SectionHeading'

const services = [
  {
    icon: TrendingUp,
    number: '01',
    title: 'Business Growth Strategy',
    subtitle: 'Strategic planning designed to help practices grow with intention, profitability, and operational clarity.',
    color: 'from-amber-900/20 to-transparent',
    items: [
      'Revenue optimization',
      'Pricing strategy',
      'Service mix evaluation',
      'Profitability analysis',
      'Business structure',
      'Scaling strategy',
      'Operational bottlenecks',
      'Growth planning',
      'Expansion readiness',
    ],
  },
  {
    icon: Settings,
    number: '02',
    title: 'Operations & Systems',
    subtitle: 'Strong businesses require strong operational foundations.',
    color: 'from-zinc-800/40 to-transparent',
    items: [
      'Operational workflows',
      'Front desk systems',
      'Patient journey',
      'Scheduling efficiency',
      'Consultation flow',
      'Communication systems',
      'Accountability structure',
      'Standard operating procedures',
      'Internal organization',
    ],
  },
  {
    icon: Users,
    number: '03',
    title: 'Team Leadership & Culture',
    subtitle: 'The success of any aesthetic business is deeply connected to the quality of its leadership and culture.',
    color: 'from-amber-900/20 to-transparent',
    items: [
      'Management structure',
      'Leadership development',
      'Staff accountability',
      'Communication',
      'Team dynamics',
      'Workplace culture',
      'Hiring strategy',
      'Employee expectations',
      'Operational standards',
    ],
  },
  {
    icon: Sparkles,
    number: '04',
    title: 'Brand Positioning & Patient Experience',
    subtitle: 'Luxury patient experience goes beyond aesthetics alone.',
    color: 'from-zinc-800/40 to-transparent',
    items: [
      'Brand identity',
      'Client experience',
      'Consultation process',
      'Retention strategy',
      'In-office presentation',
      'Communication standards',
      'Reputation positioning',
      'Patient touchpoints',
    ],
  },
  {
    icon: Rocket,
    number: '05',
    title: 'New Practice Launch Consulting',
    subtitle: 'Launching a medspa or aesthetic brand involves hundreds of strategic and operational decisions.',
    color: 'from-amber-900/20 to-transparent',
    items: [
      'Business planning',
      'Launch preparation',
      'Operational setup',
      'Staffing guidance',
      'Growth strategy',
      'Branding direction',
      'Patient experience development',
      'Workflow implementation',
    ],
  },
  {
    icon: Shield,
    number: '06',
    title: 'Founder Advisory & Mentorship',
    subtitle: 'Confidential strategic support for founders navigating complex business challenges.',
    color: 'from-zinc-800/40 to-transparent',
    items: [
      'Growth challenges',
      'Operational stress',
      'Leadership decisions',
      'Team restructuring',
      'Scaling',
      'Burnout',
      'Expansion',
      'Long-term exit planning',
    ],
  },
]

function ServiceCard({ service, index, isOpen, onToggle }) {
  return (
    <AnimatedSection delay={index * 0.08}>
      <motion.div
        layout
        className={`relative bg-[#0f0f0f] border border-white/8 hover:border-gold/40 transition-colors duration-500 cursor-pointer overflow-hidden group ${isOpen ? 'border-gold/40' : ''}`}
        onClick={onToggle}
        style={{ borderRadius: '1.25rem' }}
      >
        {/* Gradient top accent */}
        <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}`} />

        {/* Card header */}
        <div className="p-8 lg:p-10">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-6">
              {/* Number + Icon stack */}
              <div className="flex flex-col items-center gap-3">
                <span
                  className="text-gold/30 font-bold leading-none select-none"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem' }}
                >
                  {service.number}
                </span>
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl border transition-all duration-500 ${isOpen ? 'bg-gold/15 border-gold/50' : 'bg-white/5 border-white/10 group-hover:bg-gold/10 group-hover:border-gold/30'}`}>
                  <service.icon className={`transition-colors duration-300 ${isOpen ? 'text-gold' : 'text-white/85 text-base group-hover:text-gold'}`} size={22} />
                </div>
              </div>

              {/* Title + subtitle */}
              <div className="pt-1">
                <h3
                  className="text-white text-xl lg:text-2xl leading-snug mb-2 group-hover:text-gold/90 transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {service.title}
                </h3>
                <p className="text-white/85 text-base leading-relaxed max-w-lg">
                  {service.subtitle}
                </p>
              </div>
            </div>

            {/* Toggle icon */}
            <div className={`flex-shrink-0 mt-1 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-gold border-gold text-black' : 'border-white/15 text-white/40 group-hover:border-gold/40 group-hover:text-gold'}`}>
              {isOpen ? <Minus size={14} /> : <Plus size={14} />}
            </div>
          </div>
        </div>

        {/* Expandable items */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="overflow-hidden"
            >
              <div className="px-8 lg:px-10 pb-8 lg:pb-10">
                <div className="border-t border-white/8 pt-6">
                  <p className="text-gold text-[10px] font-semibold tracking-[0.3em] uppercase mb-5">
                    Areas of Focus
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {service.items.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04, duration: 0.3 }}
                        className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2.5 border border-white/10"
                      >
                        <CheckCircle size={13} className="text-gold flex-shrink-0" />
                        <span className="text-white text-sm font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatedSection>
  )
}

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0)
  const cardRefs = useRef([])

  useEffect(() => {
    const observers = []

    cardRefs.current.forEach((el, index) => {
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setOpenIndex(index)
          }
        },
        {
          // fires when the card crosses 25% from top → 45% from top of viewport
          rootMargin: '-25% 0px -55% 0px',
          threshold: 0,
        }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  return (
    <>
      <Helmet>
        <title>Services — RM Strategic Growth | MedSpa & Aesthetic Consulting</title>
        <meta
          name="description"
          content="Strategic advisory services for medspas, aesthetic clinics, and wellness brands — including business growth strategy, operations, team leadership, brand positioning, and founder mentorship."
        />
      </Helmet>

      {/* ===== HERO ===== */}
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/C8875437-6B96-4B17-A8C3-E3E109642FE2.PNG"
            alt="RM Strategic Growth Services"
            className="w-full h-full object-cover object-top opacity-50"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 section-container py-24 lg:py-32 text-center">
          <AnimatedSection>
            <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Consulting Services
            </p>
            <div className="gold-line-center mb-8" />
            <h1 className="text-white max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-heading)' }}>
              Strategic Advisory for{' '}
              <span className="italic" style={{ fontFamily: 'var(--font-accent)', color: 'var(--color-gold)' }}>
                Modern Aesthetic
              </span>{' '}
              Businesses
            </h1>
            <p className="text-white/85 text-base mt-6 max-w-2xl mx-auto leading-relaxed">
              Our services are customized to the unique needs of each business and may be provided virtually or onsite.
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

      {/* ===== SERVICES CARDS ===== */}
      <section className="py-16 lg:py-32 bg-[#080808]">
        <div className="section-container">
          <SectionHeading
            subtitle="Our Services"
            title="How We Help You Grow"
            light={true}
            useBodoni={false}
          />

          <div className="max-w-5xl mx-auto space-y-4">
            {services.map((service, index) => (
              <div key={service.title} ref={(el) => (cardRefs.current[index] = el)}>
                <ServiceCard
                  service={service}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ADDITIONAL SERVICES ===== */}
      <section className="py-16 lg:py-32 bg-[#0A0A0A] relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-[120px] pointer-events-none" />

        <div className="section-container relative z-10">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Additional Expertise
            </p>
            <div className="gold-line-center mb-6" />
            <h2
              className="text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Beyond Traditional{' '}
              <span className="italic" style={{ fontFamily: 'var(--font-accent)', color: 'var(--color-gold)' }}>
                Consulting
              </span>
            </h2>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/8">
            {[
              { num: '01', title: 'Ownership Transitions', desc: 'Business takeovers and operational transition support for new ownership entering an established practice.' },
              { num: '02', title: 'Leadership Restructuring', desc: 'Culture restructuring during ownership changes, team resets, and leadership integration.' },
              { num: '03', title: 'Post-Acquisition Integration', desc: 'Operational and team integration with full business continuity support post-acquisition.' },
              { num: '04', title: 'P&L Analysis', desc: 'Full profit and loss analysis with targeted expense reduction and profitability improvement strategies.' },
              { num: '05', title: 'Vendor Negotiations', desc: 'Product, device, and supply cost negotiation alongside rep and vendor relationship strategy.' },
              { num: '06', title: 'Treatment Implementation', desc: 'Injector hiring and onboarding, training frameworks, and patient conversion system development.' },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.07}>
                <div className="relative bg-[#0f0f0f] p-8 lg:p-10 h-full group hover:bg-[#141414] transition-colors duration-500 flex flex-col">
                  {/* Top gold accent line */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/50 transition-all duration-500" />

                  {/* Serial number — fully white */}
                  <span
                    className="text-white font-bold leading-none select-none mb-4 group-hover:text-gold transition-colors duration-500"
                    style={{ fontFamily: 'var(--font-heading)', fontSize: '5rem', lineHeight: 1 }}
                  >
                    {item.num}
                  </span>

                  {/* Gold separator */}
                  <div className="w-8 h-[2px] bg-gold mb-5 group-hover:w-14 transition-all duration-500" />

                  <h4
                    className="text-white text-xl lg:text-2xl mb-4 group-hover:text-gold/90 transition-colors duration-400 leading-snug font-semibold"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-white/85 text-base leading-relaxed group-hover:text-white transition-colors duration-400 flex-grow">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHO WE WORK WITH ===== */}
      <section className="py-16 lg:py-28 bg-charcoal text-white">
        <div className="section-container">
          <SectionHeading
            subtitle="Who We Work With"
            title="Industries We Serve"
            description="While our expertise is deeply rooted in the aesthetics industry, our consulting approach is designed for service-based businesses looking to elevate operations and scale strategically."
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              'MedSpas & Aesthetic Clinics',
              'Wellness & Longevity Brands',
              'Hair Salons & Luxury Blow Dry Bars',
              'Nail Salons & Beauty Studios',
              'Injectors & Independent Providers',
              'Plastic Surgery & Cosmetic Practices',
              'Beauty, Skincare & Cosmetic Brands',
              'Spa & Wellness Concepts',
              'Multi-Location Beauty Businesses',
              'Beauty & Wellness Entrepreneurs',
              'Startups & Growing Brands',
              'Established Businesses Seeking Growth',
            ].map((industry, index) => (
              <AnimatedSection key={industry} delay={index * 0.05}>
                <div className="flex items-center gap-3 p-4 border border-white/10 hover:border-gold/30 transition-all duration-300">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                  <span className="text-white/85 text-base">{industry}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 lg:py-28 bg-black text-center">
        <div className="section-container">
          <AnimatedSection>
            <p
              className="text-gold/80 italic text-xl mb-6"
              style={{ fontFamily: 'var(--font-accent)', fontSize: '1.3rem' }}
            >
              For business owners ready to scale smarter.
            </p>
            <div className="gold-line-center mb-8" />
            <h2 className="text-white mb-6 max-w-xl mx-auto" style={{ fontFamily: 'var(--font-heading)' }}>
              Build a Stronger Business
            </h2>
            <p className="text-white/85 text-base mb-10 max-w-lg mx-auto leading-relaxed">
              Whether you are launching a new practice or preparing for future expansion,
              we provide strategic guidance designed specifically for the modern aesthetics industry.
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
