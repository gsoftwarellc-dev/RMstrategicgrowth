import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import {
  TrendingUp,
  Users,
  Target,
  Award,
  Briefcase,
  Heart,
  Settings,
  Sparkles,
  ArrowRight,
  Quote,
} from 'lucide-react'
import AnimatedSection from '../components/ui/AnimatedSection'
import SectionHeading from '../components/ui/SectionHeading'
import ClientReviews from '../components/layout/ClientReviews'

const teamMembers = [
  {
    slug: 'romy-mittler',
    name: 'Romy Mittler',
    image: '/images/F05D89D5-F04B-4430-9108-B88E73820A05.PNG',
    desc: 'Founder & CEO. Backed by 30+ years of combined experience across aesthetic business growth.',
  },
  {
    slug: 'amanda-lewis',
    name: 'Amanda Lewis',
    image: '/images/Amanda.PNG',
    desc: 'Clinical Director and master injector trainer with advanced expertise in aesthetic medicine.',
  },
  {
    slug: 'our-team',
    name: 'Our Team',
    image: '/images/group.PNG',
    desc: 'Backed by a dedicated team of aesthetic industry specialists working behind the scenes to support every engagement.',
  }
]

const helpItems = [
  'Business & Growth Strategy',
  'MedSpa Operations',
  'Team Leadership & Accountability',
  'Patient Experience Optimization',
  'Brand Positioning',
  'Staff Development & Culture',
  'Sales & Consultation Improvement',
  'Systems & Workflow Optimization',
  'Scaling & Expansion Strategy',
  'Owner Mentorship & Advisory',
  'Launch Strategy for New Practices',
  'Ownership Transitions & Takeovers',
  'Full Profit & Loss Analysis',
  'Expense Reduction & Profitability',
  'Vendor & Rep Relationship Strategy',
  'Injector Hiring & Training',
  'Patient Conversion Systems',
  'Revenue Optimization',
]

const features = [
  {
    num: '01',
    icon: TrendingUp,
    title: 'Strategic Growth',
    desc: 'Revenue optimization, pricing strategy, and scaling plans designed for long-term profitability.',
    points: [
      'Revenue and pricing optimization',
      'Scaling and expansion planning',
      'Profitability and P&L analysis',
      'Service mix evaluation',
      'Growth roadmap development',
    ],
  },
  {
    num: '02',
    icon: Users,
    title: 'Leadership & Culture',
    desc: 'Build high-performing teams with accountability, communication standards, and workplace culture.',
    points: [
      'Leadership development programs',
      'Staff accountability systems',
      'Workplace culture design',
      'Hiring and onboarding strategy',
      'Team communication standards',
    ],
  },
  {
    num: '03',
    icon: Target,
    title: 'Operational Excellence',
    desc: 'Streamline workflows, systems, and SOPs to create a practice that runs with precision.',
    points: [
      'Workflow and SOP development',
      'Front desk and patient journey systems',
      'Scheduling and consultation flow',
      'Accountability and reporting structure',
      'Operational bottleneck resolution',
    ],
  },
]

const taglines = [
  'Built to Scale, Designed to Last',
  'Real Strategy, Real Growth, Real Industry Experience',
  'Where Aesthetic Vision Meets Strategic Execution',
  'Scale Smarter. Lead Stronger. Grow Profitably.',
  'Built by Industry Leaders. Designed for Growth.',
]

const heroSlides = [
  {
    image: '/images/hero1.png',
    imageClass: 'object-contain',
    title1: 'We Help Aesthetic Businesses ',
    titleItalic: 'Make More Money',
    title2: '',
    description: 'Increase monthly revenue, improve profitability, maximize patient value, and build a stronger business without wasting thousands on ineffective marketing.',
    credibility: 'Built by a former medspa owner who successfully grew and sold a multi seven-figure practice.',
  },
]

export default function Home() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const currentSlideData = heroSlides[currentHeroSlide]

  return (
    <>
      <Helmet>
        <title>RM Strategic Growth — We Help Aesthetic Businesses Make More Money</title>
        <meta
          name="description"
          content="RM Strategic Growth helps aesthetic businesses increase revenue, improve profitability, and maximize patient value. Built by a former medspa owner who grew and sold a multi seven-figure practice."
        />
      </Helmet>

      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-black overflow-hidden">

        {/* ── MOBILE hero (full-screen bg image + text overlay) ── */}
        <div className="relative lg:hidden h-screen min-h-[600px]">
          {/* Background image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={`mob-img-${currentHeroSlide}`}
              src={currentSlideData.image}
              alt="RM Strategic Growth"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className={`absolute inset-0 w-full h-full ${currentSlideData.imageClass}`}
            />
          </AnimatePresence>
          {/* Dark gradient so text is always readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 pointer-events-none" />
          {/* Top fade for navbar blend */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none" />

          {/* Text pinned to bottom */}
          <div className="absolute inset-x-0 bottom-0 px-6 pb-10">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              RM Strategic Growth
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="gold-line mb-4"
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={`mob-text-${currentHeroSlide}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5 }}
              >
                <h1
                  className="text-white text-[1.75rem] leading-[1.2] mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {currentSlideData.title1}
                  <span className="italic" style={{ fontFamily: 'var(--font-accent)', color: 'var(--color-gold)' }}>
                    {currentSlideData.titleItalic}
                  </span>
                  {currentSlideData.title2 && <br />}
                  {currentSlideData.title2}
                </h1>
                <p className="text-white/80 text-sm leading-relaxed mb-3 max-w-sm">
                  {currentSlideData.description}
                </p>
                {currentSlideData.credibility && (
                  <p className="text-gold/90 text-xs font-semibold tracking-wide leading-relaxed mb-6 max-w-sm">
                    {currentSlideData.credibility}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-col gap-3"
            >
              <a href="https://calendly.com/romymittler/30min" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center justify-center">
                Schedule A Free Discovery Call
                <ArrowRight className="ml-2" size={16} />
              </a>
              <Link to="/services" className="btn-white w-full text-center justify-center">
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>

        {/* ── DESKTOP hero (side-by-side) ── */}
        <div className="hidden lg:grid lg:grid-cols-2 h-screen">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="relative h-screen bg-black"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={`desk-img-${currentHeroSlide}`}
                src={currentSlideData.image}
                alt="RM Strategic Growth"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className={`absolute inset-0 w-full h-full ${currentSlideData.imageClass}`}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/25 z-10 pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          </motion.div>

          {/* Right — Text */}
          <div className="relative bg-black flex flex-col justify-center px-16 xl:px-24">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              RM Strategic Growth
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="gold-line mb-8"
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={`desk-text-${currentHeroSlide}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <h1
                  className="text-white leading-[1.1] mb-6"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {currentSlideData.title1}
                  <span className="italic" style={{ fontFamily: 'var(--font-accent)', color: 'var(--color-gold)' }}>
                    {currentSlideData.titleItalic}
                  </span>
                  {currentSlideData.title2 && <br />}
                  {currentSlideData.title2}
                </h1>
                <p className="text-white/85 text-xl leading-relaxed mb-4 max-w-lg">
                  {currentSlideData.description}
                </p>
                {currentSlideData.credibility && (
                  <p className="text-gold/90 text-base font-semibold tracking-wide leading-relaxed mb-10 max-w-lg">
                    {currentSlideData.credibility}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-row flex-wrap gap-4"
            >
              <a href="https://calendly.com/romymittler/30min" target="_blank" rel="noopener noreferrer" className="btn-primary text-center justify-center">
                Schedule A Free Discovery Call
                <ArrowRight className="ml-2" size={16} />
              </a>
              <Link to="/services" className="btn-white text-center justify-center">
                Our Services
              </Link>
            </motion.div>
            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"
              />
            </motion.div>
          </div>
        </div>

      </section>

      {/* ===== FEATURED IN (PRESS) ===== */}
      <section className="relative py-16 lg:py-28 bg-[#0A0A0A] overflow-hidden">
        {/* Soft gold glow accents */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 section-container">
          <SectionHeading
            subtitle="Featured In"
            title="As Seen In Authority Magazine"
            description="Romy Mittler sits down with Authority Magazine to share the hard-won lessons behind building a multi-seven-figure aesthetic business."
            light={true}
          />

          <AnimatedSection>
            <a
              href="https://medium.com/authority-magazine/romy-mittler-of-rm-strategic-growth-group-5-things-i-wish-someone-told-me-before-i-became-a-f8f853383b0e"
              target="_blank"
              rel="noopener noreferrer"
              className="group block max-w-5xl mx-auto"
            >
              <div className="relative grid grid-cols-1 md:grid-cols-[minmax(220px,300px)_1fr] gap-8 lg:gap-12 items-center bg-white/[0.04] border border-white/10 rounded-[1.75rem] p-6 lg:p-10 transition-all duration-500 hover:border-gold/50 hover:bg-white/[0.06] hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40">
                {/* Magazine cover */}
                <div className="relative mx-auto w-full max-w-[260px] md:max-w-none">
                  <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-gold/20 blur-xl opacity-40 transition-opacity duration-500 group-hover:opacity-70" />
                  <img
                    src="/images/magazine.png"
                    alt="Authority Magazine feature cover with Romy Mittler"
                    className="relative w-full rounded-2xl border border-gold/25 shadow-2xl shadow-black/50 transition-transform duration-500 group-hover:-translate-y-1"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="text-center md:text-left">
                  <Quote size={28} className="text-gold/40 mx-auto md:mx-0 mb-4" />
                  <h3
                    className="text-white text-2xl lg:text-[1.85rem] leading-snug mb-4 transition-colors duration-300 group-hover:text-gold"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    "5 Things I Wish Someone Told Me Before I Became A Founder"
                  </h3>
                  <p className="text-white/75 text-base leading-relaxed mb-6">
                    Featured in Authority Magazine, Romy shares the lessons learned from
                    building, scaling, and successfully exiting a multi seven figure
                    aesthetics business, along with practical insights for entrepreneurs
                    and business owners.
                  </p>
                  <span className="inline-flex items-center text-gold font-semibold text-sm tracking-[0.12em] uppercase">
                    Read the Full Feature
                    <ArrowRight
                      className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5"
                      size={16}
                    />
                  </span>
                </div>
              </div>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== MEET OUR EXPERTS MARQUEE ===== */}
      <section className="pt-4 pb-16 bg-[#0A0A0A] overflow-hidden">
        <div className="section-container mb-4 flex flex-col items-center">
          <SectionHeading
            title="Meet Our Experts"
            description="Work with the best in the aesthetic business consulting industry."
            light={true}
            useBodoni={true}
            showLine={false}
          />
          <a
            href="https://calendly.com/romymittler/30min" target="_blank" rel="noopener noreferrer"
            className="btn-primary mt-4 group"
          >
            Schedule A Free Discovery Call
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse ml-2" />
          </a>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-6 px-4 mt-10">
          {teamMembers.map((member, i) => {
            const CardTag = member.slug ? Link : 'div'
            const cardProps = member.slug ? { to: `/about#${member.slug}` } : {}
            return (
              <CardTag
                key={i}
                {...cardProps}
                className={`relative w-full lg:flex-1 lg:min-w-0 lg:max-w-[420px] h-[520px] lg:h-[550px] rounded-[2rem] overflow-hidden group block ${member.slug ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute bottom-0 left-0 p-8 w-full whitespace-normal transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/30 shadow-lg">
                      <span className="text-white font-bold text-xs" style={{ fontFamily: 'var(--font-heading)' }}>RM</span>
                    </div>
                    <h3 className="text-white text-2xl font-bold tracking-normal" style={{ fontFamily: 'var(--font-heading)' }}>{member.name}</h3>
                  </div>
                  <p className="text-white/85 text-base leading-relaxed line-clamp-3">
                    {member.desc}
                  </p>
                </div>
              </CardTag>
            )
          })}
        </div>
      </section>

      {/* ===== TAGLINE BANNER ===== */}
      <section className="bg-cream py-5 border-y border-black/5 overflow-hidden shadow-inner">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...taglines, ...taglines].map((tagline, i) => (
            <span
              key={i}
              className="text-lg font-medium tracking-[0.15em] uppercase text-black mx-16 flex items-center gap-10 lg:gap-16"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {tagline}
              <span className="w-2.5 h-2.5 bg-gold rounded-full inline-block shadow-sm" />
            </span>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}</style>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-16 lg:py-32 bg-[#080808]">
        <div className="section-container">
          <SectionHeading
            subtitle="Why Choose Us"
            title="Built From Real-World Experience"
            description="RM Strategic Growth was built differently, with advisory rooted in hands-on experience across the realities of aesthetic business growth."
            light={true}
          />

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-start mb-12 lg:mb-16">
              <AnimatedSection direction="left">
                <div className="border-l-2 border-gold pl-6 lg:pl-8">
                  <p className="text-white/90 text-lg lg:text-xl leading-relaxed mb-6">
                    The aesthetics industry is filled with consultants who teach strategy from
                    the outside looking in. RM Strategic Growth was built differently. Everything
                    we advise on comes from real world experience inside the business, not theory
                    alone.
                  </p>
                  <p className="text-white/75 text-base leading-relaxed">
                    Our team has worked hands-on in aesthetics, patient experience, injector
                    training, operations, sales growth, vendor negotiations, leadership
                    development, branding, and business scaling at a high level within the
                    industry.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.1}>
                <div className="bg-white/[0.04] border border-white/10 p-6 lg:p-8">
                  <p className="text-gold text-xs font-semibold tracking-[0.22em] uppercase mb-4">
                    Why It Matters
                  </p>
                  <p className="text-white/80 text-base leading-relaxed">
                    Many of the expensive mistakes, inefficiencies, staffing challenges,
                    operational setbacks, growth obstacles, and scaling pains aesthetic business
                    owners encounter are not new territory for us.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {features.map((feature, index) => (
                <AnimatedSection key={feature.title} delay={index * 0.08}>
                  <div className="h-full bg-white/[0.035] border border-white/10 p-6 lg:p-7 transition-all duration-300 hover:border-gold/40 hover:bg-white/[0.055]">
                    <div className="flex items-center justify-between gap-4 mb-8">
                      <span
                        className="text-4xl font-bold text-gold"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {feature.num}
                      </span>
                      <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                        <feature.icon size={22} className="text-gold" />
                      </div>
                    </div>

                    <h3
                      className="text-white text-2xl mb-4"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-white text-base leading-relaxed mb-6">
                      {feature.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {feature.points.slice(0, 4).map((point) => (
                        <span
                          key={point}
                          className="text-white text-xs uppercase tracking-[0.12em] border border-white/10 px-3 py-2 bg-black/20"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ROMY PREVIEW ===== */}
      <section className="py-16 lg:py-32 bg-black text-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative overflow-hidden">
                <img
                  src="/images/IMG_4687.PNG"
                  alt="Romy Mittler at her desk"
                  className="w-full object-cover aspect-[4/5]"
                />
                {/* Gold corner accents — kept inside overflow-hidden parent */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold/40" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold/40" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <p className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4">
                Founder & CEO
              </p>
              <div className="gold-line mb-8" />
              <h2 className="text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Meet Romy Mittler
              </h2>
              <p className="text-white/85 text-base leading-relaxed mb-6">
                Romy Mittler is the founder of RM Strategic Growth, a consulting firm focused
                on helping medspas, aesthetic practices, and wellness brands strengthen
                operations, elevate patient experience, improve profitability, and scale
                strategically.
              </p>
              <p className="text-white/85 text-base leading-relaxed mb-6">
                With over 30 years of combined experience across the aesthetic industry,
                RM Strategic Growth brings a rare combination of operational insight,
                leadership experience, branding expertise, and real world understanding of the
                medical aesthetics business.
              </p>
              <p
                className="text-gold text-2xl lg:text-3xl italic mb-8 leading-tight"
                style={{ fontFamily: 'var(--font-accent)' }}
              >
                "Building a successful aesthetic business requires far more than good marketing
                or beautiful branding."
              </p>
              <Link to="/about" className="btn-primary w-full sm:w-auto justify-center text-center">
                Read Full Story
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE HELP WITH ===== */}
      <section className="py-16 lg:py-32 bg-cream">
        <div className="section-container">
          <SectionHeading
            subtitle="What We Help With"
            title="Comprehensive Strategic Advisory"
            description="From day-to-day operations to long-term scaling strategy, we help aesthetic businesses address every aspect of growth."
            useBodoni={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {helpItems.map((item, index) => (
              <AnimatedSection key={item} delay={index * 0.03}>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-light/30 hover:border-gold/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default">
                  <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors duration-300">
                    <Sparkles size={16} className="text-gold/60 group-hover:text-gold transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-charcoal group-hover:text-black transition-colors">
                    {item}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-14">
            <Link to="/services" className="btn-primary w-full sm:w-auto justify-center text-center">
              View All Services
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== TEAM PREVIEW ===== */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/Group shot.PNG"
            alt="RM Strategic Growth Team"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 section-container text-center">
          <AnimatedSection>
            <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Our Experts
            </p>
            <div className="gold-line-center mb-8" />
            <h2 className="text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Meet the Team Behind
              <br />
              <span className="italic" style={{ fontFamily: 'var(--font-accent)' }}>
                Your Strategic Growth
              </span>
            </h2>
            <p className="text-white/85 text-base max-w-2xl mx-auto mb-10 leading-relaxed">
              Our experts bring together a rare combination of real world experience across
              every major aspect of the aesthetic industry — from ownership and operations
              to clinical excellence and large scale practice growth.
            </p>
            <Link to="/about" className="btn-primary w-full sm:w-auto justify-center text-center">
              Meet the Team
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== THE RM DIFFERENCE ===== */}
      <section className="py-16 lg:py-32 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimatedSection>
              <p className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4">
                The RM Strategic Growth Difference
              </p>
              <div className="gold-line mb-8" />
              <h2 className="mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                We Don't Teach From the Outside Looking In
              </h2>
              <p className="text-gray-warm leading-relaxed mb-6">
                The aesthetics industry is filled with consultants who teach strategy from
                the outside looking in. RM Strategic Growth was built differently. Everything
                we advise on comes from real world experience inside the business.
              </p>
              <p className="text-gray-warm leading-relaxed mb-6">
                Our team has collectively worked hands on in aesthetics, patient experience,
                injector training, operations, sales growth, vendor negotiations, leadership
                development, branding, and business scaling at a high level within the industry.
              </p>
              <p className="text-gray-warm leading-relaxed mb-8">
                Many of the expensive mistakes, inefficiencies, staffing challenges, operational
                setbacks, and scaling pains aesthetic business owners encounter are not new
                territory for us. We have already experienced them, solved them, learned from
                them, and built through them.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { icon: Award, label: '30+ Years Combined Experience' },
                  { icon: Briefcase, label: 'Founded & Exited Successfully' },
                  { icon: Heart, label: 'Patient-First Approach' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <item.icon size={18} className="text-gold flex-shrink-0" />
                    <span className="text-sm font-medium text-charcoal">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src="/images/Romy Speach.jpg"
                  alt="Romy Mittler speaking"
                  className="w-full object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-gold text-white p-8 max-w-xs hidden lg:block">
                  <p
                    className="text-sm italic leading-relaxed"
                    style={{ fontFamily: 'var(--font-accent)', fontSize: '1.1rem' }}
                  >
                    "We don't just understand the aesthetics industry academically — we
                    understand it because we built careers inside it."
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== WHO WE WORK WITH ===== */}
      <section className="py-12 lg:py-24 bg-charcoal">
        <div className="section-container">
          <SectionHeading
            subtitle="Who We Work With"
            title="Industries We Serve"
            light={true}
          />

          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 max-w-4xl mx-auto">
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
            ].map((industry, index) => (
              <AnimatedSection key={industry} delay={index * 0.05}>
                <span className="inline-block px-5 py-2.5 border border-white/15 text-white/85 text-base hover:border-gold/50 hover:text-gold transition-all duration-400 cursor-default">
                  {industry}
                </span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS SECTION ===== */}
      <ClientReviews />

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 lg:py-32 bg-black text-white text-center">
        <div className="section-container">
          <AnimatedSection>
            <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Ready to Grow?
            </p>
            <div className="gold-line-center mb-8" />
            <h2 className="text-white mb-6 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-heading)' }}>
              Let's Build a{' '}
              <span className="italic" style={{ fontFamily: 'var(--font-accent)' }}>
                Stronger
              </span>{' '}
              Business
            </h2>
            <p className="text-white/85 text-base max-w-xl mx-auto mb-10 leading-relaxed">
              RM Strategic Growth works with business owners who are ready to elevate
              operations, strengthen leadership, improve profitability, and build brands
              positioned for long term success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://calendly.com/romymittler/30min" target="_blank" rel="noopener noreferrer"  className="btn-primary w-full sm:w-auto justify-center text-center">
                Schedule A Free Discovery Call
                <ArrowRight className="ml-2" size={16} />
              </a>
              <Link to="/about" className="btn-white">
                Learn More About Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
