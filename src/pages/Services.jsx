import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import {
  TrendingUp,
  DollarSign,
  Heart,
  Settings,
  ArrowRight,
  CheckCircle,
  ChevronDown,
} from 'lucide-react'
import AnimatedSection from '../components/ui/AnimatedSection'
import SectionHeading from '../components/ui/SectionHeading'

const moneyStats = [
  { stat: '78%', label: 'of consumers would be more satisfied following a long-term treatment plan with their provider.' },
  { stat: '62%', label: 'find multiple aesthetic treatments appealing.' },
  { stat: '59%', label: 'are open to a structured multi-treatment approach.' },
]

const services = [
  {
    icon: TrendingUp,
    title: 'Increase Revenue',
    subtitle: 'Convert more consultations into paying patients and generate more revenue from the leads you already have.',
    items: [
      'Convert more consultations into paying patients',
      'Improve treatment plan acceptance',
      'Increase average patient spend',
      'Generate more revenue from existing leads',
    ],
  },
  {
    icon: DollarSign,
    title: 'Improve Profitability',
    subtitle: 'Revenue matters. Profitability matters more.',
    items: [
      'Identify profit leaks',
      'Optimize pricing',
      'Improve operational efficiency',
      'Increase margins',
    ],
  },
  {
    icon: Heart,
    title: 'Increase Patient Lifetime Value',
    subtitle: 'Turn one-time patients into long term relationships.',
    items: [
      'Improve retention',
      'Increase membership participation',
      'Reactivation campaigns',
      'Follow-up systems',
      'Long-term patient relationships',
    ],
  },
  {
    icon: Settings,
    title: 'Strengthen Operations',
    subtitle: 'Build the foundation that lets revenue growth scale sustainably.',
    items: [
      'KPI tracking',
      'Team accountability',
      'Leadership development',
      'Systems and processes',
      'Scalable growth foundations',
    ],
  },
]

function ServiceAccordionItem({ service, isOpen, onToggle }) {
  return (
    <div className="border border-white/10 bg-[#0f0f0f]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center gap-4 sm:gap-5 p-5 sm:p-6 text-left"
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gold/10 border border-gold/30 flex-shrink-0">
          <service.icon className="text-gold" size={20} />
        </div>
        <h3
          className="flex-1 text-white text-lg sm:text-xl leading-snug"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {service.title}
        </h3>
        <ChevronDown
          className={`text-gold flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          size={20}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="px-5 sm:px-6 pb-6 sm:pb-8 pl-[4.5rem] sm:pl-[5.25rem]">
            <p className="text-white/85 text-sm sm:text-base leading-relaxed mb-5">
              {service.subtitle}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.items.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle size={14} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-white/90 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {services.map((service, index) => (
        <ServiceAccordionItem
          key={service.title}
          service={service}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
        />
      ))}
    </div>
  )
}

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services — RM Strategic Growth | How We Help You Make More Money</title>
        <meta
          name="description"
          content="We help medspas and aesthetic practices increase revenue, improve profitability, increase patient lifetime value, and strengthen operations — generating more money from the patients and leads they already have."
        />
      </Helmet>

      {/* ===== HERO ===== */}
      <section className="bg-black pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="section-container text-center">
          <AnimatedSection>
            <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Consulting Services
            </p>
            <h1 className="text-white max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-heading)' }}>
              How We Help You{' '}
              <span className="italic" style={{ fontFamily: 'var(--font-accent)', color: 'var(--color-gold)' }}>
                Make More Money
              </span>
            </h1>
            <p className="text-white/85 text-base mt-5 max-w-xl mx-auto leading-relaxed">
              Four focus areas. Customized to your business, delivered virtually or onsite.
            </p>
            <div className="mt-8">
              <a
                href="https://calendly.com/romymittler/30min" target="_blank" rel="noopener noreferrer"
                className="btn-primary group inline-flex w-full sm:w-auto justify-center"
              >
                Schedule A Free Discovery Call
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse ml-2" />
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2.5 mt-10 max-w-4xl mx-auto">
              {services.map((service) => (
                <span
                  key={service.title}
                  className="flex items-center gap-2 border border-white/10 bg-white/[0.03] px-4 py-2 text-white/80 text-sm"
                >
                  <service.icon className="text-gold flex-shrink-0" size={15} />
                  {service.title}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== WHY MEDSPAS ARE LEAVING MONEY ON THE TABLE ===== */}
      <section className="py-16 lg:py-28 bg-[#0A0A0A]">
        <div className="section-container">
          <SectionHeading
            subtitle="The Opportunity"
            title="Why Most MedSpas Are Leaving Money on the Table"
            light={true}
          />

          <AnimatedSection>
            <p className="text-white/85 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto text-center mb-12">
              Many medspas assume growth comes from generating more leads. In reality, substantial
              revenue opportunities already exist inside most practices.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 max-w-4xl mx-auto mb-12">
            {moneyStats.map((item, index) => (
              <AnimatedSection key={item.stat} delay={index * 0.1}>
                <div className="h-full bg-[#111111] border border-white/10 p-6 lg:p-7 text-center">
                  <p
                    className="text-5xl lg:text-6xl font-light mb-4 text-gold"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.stat}
                  </p>
                  <div className="w-10 h-px bg-gold/60 mb-4 mx-auto" />
                  <p className="text-white/85 text-sm leading-relaxed">
                    {item.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.1}>
            <div className="max-w-3xl mx-auto space-y-5 text-center">
              <p className="text-white/85 text-base lg:text-lg leading-relaxed">
                Yet many consultations focus only on the treatment a patient initially requested.
                The result? Missed revenue opportunities. Lower patient lifetime value. Reduced
                profitability.
              </p>
              <p className="text-white text-base lg:text-lg leading-relaxed">
                At RM Strategic Growth, we help practices improve consultation conversion,
                treatment plan acceptance, patient retention, and operational performance so
                they can generate more revenue from the patients and leads they already have.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SERVICES ACCORDION ===== */}
      <section className="py-12 lg:py-20 bg-[#080808]">
        <div className="section-container">
          <SectionHeading
            subtitle="Our Services"
            title="How We Help You Make More Money"
            description="Tap a pillar to see what's included."
            light={true}
            useBodoni={false}
          />

          <ServicesAccordion />
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
                  <span className="text-white text-base">{industry}</span>
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
              className="text-gold italic text-3xl lg:text-4xl mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-accent)' }}
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
