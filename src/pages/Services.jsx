import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  TrendingUp,
  Settings,
  Users,
  Sparkles,
  Rocket,
  Shield,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'
import AnimatedSection from '../components/ui/AnimatedSection'
import SectionHeading from '../components/ui/SectionHeading'

const services = [
  {
    icon: TrendingUp,
    title: 'Business Growth Strategy',
    subtitle: 'Strategic planning designed to help practices grow with intention, profitability, and operational clarity.',
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
    title: 'Operations & Systems',
    subtitle: 'Strong businesses require strong operational foundations.',
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
    title: 'Team Leadership & Culture',
    subtitle: 'The success of any aesthetic business is deeply connected to the quality of its leadership and culture.',
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
    title: 'Brand Positioning & Patient Experience',
    subtitle: 'Luxury patient experience goes beyond aesthetics alone.',
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
    title: 'New Practice Launch Consulting',
    subtitle: 'Launching a medspa or aesthetic brand involves hundreds of strategic and operational decisions.',
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
    title: 'Founder Advisory & Mentorship',
    subtitle: 'Confidential strategic support for founders navigating complex business challenges.',
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

function serviceId(title) {
  return title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function ServiceCard({ service, index }) {
  return (
    <AnimatedSection delay={index * 0.08}>
      <div id={serviceId(service.title)} className="relative bg-[#0f0f0f] border border-white/10 overflow-hidden group h-full scroll-mt-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-70" />

        <div className="p-6 lg:p-8 h-full flex flex-col">
          <div className="flex items-start gap-5 mb-5">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/10 border border-gold/30 flex-shrink-0">
              <service.icon className="text-gold" size={22} />
            </div>

            <div>
              <p className="text-gold text-[10px] font-semibold tracking-[0.24em] uppercase mb-2">
                Service Area
              </p>
              <h3
                className="text-white text-xl lg:text-2xl leading-snug"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {service.title}
              </h3>
            </div>
          </div>

          <p className="text-white text-base leading-relaxed mb-6">
            {service.subtitle}
          </p>

          <div className="border-t border-white/10 pt-5 mt-auto">
            <p className="text-gold text-[10px] font-semibold tracking-[0.24em] uppercase mb-4">
              Areas of Focus
            </p>
            <div className="grid grid-cols-1 gap-3">
              {service.items.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={14} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-white text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

function ServiceNavigation() {
  return (
    <AnimatedSection>
      <div className="max-w-5xl mx-auto mb-10 lg:mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((service) => (
            <a
              key={service.title}
              href={`#${serviceId(service.title)}`}
              className="flex items-center gap-3 border border-white/10 bg-white/[0.03] px-4 py-3 text-white/85 hover:border-gold/40 hover:text-white transition-colors duration-300"
            >
              <service.icon className="text-gold flex-shrink-0" size={17} />
              <span className="text-sm font-medium">{service.title}</span>
            </a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default function Services() {
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
            <p className="text-white text-base mt-6 max-w-2xl mx-auto leading-relaxed">
              Our services are customized to the unique needs of each business and may be provided virtually or onsite.
            </p>
            <div className="mt-10">
              <a
                href="/contact#booking"
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
            description="Strategic support across growth, operations, leadership, patient experience, launch planning, and founder advisory."
            light={true}
            useBodoni={false}
          />

          <ServiceNavigation />

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
              />
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
            <a href="/contact#booking"  className="btn-primary w-full sm:w-auto justify-center text-center">
              Schedule a Consultation
              <ArrowRight className="ml-2" size={16} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
