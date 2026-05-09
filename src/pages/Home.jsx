import { useState, useEffect, useRef } from 'react'
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
  BarChart3,
  Settings,
  Sparkles,
  ArrowRight,
  ChevronRight,
} from 'lucide-react'
import AnimatedSection from '../components/ui/AnimatedSection'
import SectionHeading from '../components/ui/SectionHeading'
import ClientReviews from '../components/layout/ClientReviews'

const teamMembers = [
  {
    name: 'Romy Mittler',
    image: '/images/F05D89D5-F04B-4430-9108-B88E73820A05.PNG',
    desc: 'Founder & CEO. Over 17 years of firsthand experience building and operating successful aesthetic businesses.',
  },
  {
    name: 'Amanda Hughes',
    image: '/images/Amanda.PNG',
    desc: 'Patient Experience Specialist. Driving consultation success and conversion systems.',
  },
  {
    name: 'Emily Robinson',
    image: '/images/Emily.PNG',
    desc: 'Clinical Director. Streamlining clinical workflows and aesthetic protocols.',
  },
  {
    name: 'Jessica Taylor',
    image: '/images/C7F8E8D2-9CF7-4C52-AB49-AB52DF5F0A79.PNG',
    desc: 'Operations Manager. Ensuring seamless day-to-day operations and team accountability.',
  },
  {
    name: 'Olivia Martinez',
    image: '/images/EAD0FBD2-B4AA-4D96-B892-79C5B63C0A01.PNG',
    desc: 'Marketing & Brand Strategist. Positioning MedSpas as premium luxury brands in their local markets.',
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
    title1: 'Grow ',
    titleItalic: 'Smarter,',
    title2: 'Not Harder',
    description: 'Helping aesthetic businesses scale smarter, strengthen operations, elevate patient experience, and build profitable brands designed for long-term growth.'
  },
  {
    image: '/images/C8875437-6B96-4B17-A8C3-E3E109642FE2.PNG',
    imageClass: 'object-cover object-top',
    title1: 'Transform Your ',
    titleItalic: 'Practice',
    title2: 'From the Inside Out',
    description: 'Strategic advisory, powerful operational systems, and team leadership frameworks designed exclusively for the modern aesthetic and wellness brand.'
  }
]

export default function Home() {
  const [openFeature, setOpenFeature] = useState(0)
  const featureRefs = useRef([])
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const observers = []
    featureRefs.current.forEach((el, index) => {
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setOpenFeature(index)
        },
        { rootMargin: '-25% 0px -55% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const currentSlideData = heroSlides[currentHeroSlide]

  return (
    <>
      <Helmet>
        <title>RM Strategic Growth — Strategic Consulting for MedSpa & Aesthetic Businesses</title>
        <meta
          name="description"
          content="RM Strategic Growth helps aesthetic businesses scale smarter, strengthen operations, elevate patient experience, and build profitable brands designed for long-term growth."
        />
      </Helmet>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen overflow-hidden bg-black">
        <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-screen lg:h-screen">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="relative h-[45vh] lg:h-screen bg-black"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={`img-${currentHeroSlide}`}
                src={currentSlideData.image}
                alt="RM Strategic Growth"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className={`absolute inset-0 w-full h-full ${currentSlideData.imageClass}`}
              />
            </AnimatePresence>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/25 z-10 pointer-events-none" />
            {/* Top fade */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
            {/* Right edge fade into the dark text side */}
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent hidden lg:block z-10 pointer-events-none" />
            {/* Bottom fade on mobile */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent lg:hidden z-10 pointer-events-none" />
          </motion.div>

          {/* Right — Text */}
          <div className="relative bg-black flex flex-col justify-center flex-grow pt-10 pb-16 lg:py-0">
            <div className="px-6 sm:px-8 lg:px-16 xl:px-24 w-full">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-6"
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

              <div className="min-h-[160px] flex flex-col justify-end">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${currentHeroSlide}`}
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
                      <br />
                      {currentSlideData.title2}
                    </h1>

                    <p className="text-white/85 text-base lg:text-xl leading-relaxed mb-10 max-w-lg">
                      {currentSlideData.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-col sm:flex-row flex-wrap gap-4 mt-6"
              >
                <a href="https://calendly.com/theriyadh75/30min?back=1&month=2026-05" target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto text-center justify-center">
                  Schedule a Consultation
                  <ArrowRight className="ml-2" size={16} />
                </a>
                <Link to="/services" className="btn-white w-full sm:w-auto text-center justify-center">
                  Our Services
                </Link>
              </motion.div>
            </div>

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
            href="https://calendly.com/theriyadh75/30min?back=1&month=2026-05"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4 group"
          >
            Book a Call
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse ml-2" />
          </a>
        </div>

        <div className="flex animate-marquee-fast gap-6 whitespace-nowrap px-4 w-max hover:animation-pause mt-10">
          {[...teamMembers, ...teamMembers].map((member, i) => (
            <div key={i} className="relative w-[320px] md:w-[420px] h-[550px] rounded-[2rem] overflow-hidden flex-shrink-0 group cursor-default">
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
                  <h3 className="text-white text-2xl font-bold italic" style={{ fontFamily: 'var(--font-bodoni)' }}>{member.name}</h3>
                </div>
                <p className="text-white/85 text-base leading-relaxed line-clamp-3">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <style>{`
          @keyframes marquee-fast {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-fast {
            animation: marquee-fast 35s linear infinite;
          }
          .animate-marquee-fast:hover {
            animation-play-state: paused;
          }
        `}</style>
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
            description="Everything we advise on comes from real world experience inside the business — not theory alone."
            light={true}
          />

          <div className="max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                ref={(el) => (featureRefs.current[index] = el)}
                onClick={() => setOpenFeature(openFeature === index ? -1 : index)}
                className={`border-b cursor-pointer group transition-colors duration-300 ${
                  index === 0 ? 'border-t' : ''
                } border-white/10 hover:border-gold/20`}
              >
                {/* Row header */}
                <div className="flex items-center gap-8 py-10 px-2">
                  <span
                    className={`text-4xl font-bold transition-colors duration-300 w-16 flex-shrink-0 ${
                      openFeature === index ? 'text-gold' : 'text-white/20 group-hover:text-white/40'
                    }`}
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {feature.num}
                  </span>

                  <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 border transition-all duration-300 ${
                    openFeature === index ? 'bg-gold/15 border-gold/50' : 'bg-white/5 border-white/10 group-hover:border-gold/30'
                  }`}>
                    <feature.icon size={24} className={openFeature === index ? 'text-gold' : 'text-white/85 text-base group-hover:text-gold'} />
                  </div>

                  <h3
                    className={`text-3xl lg:text-4xl flex-grow transition-colors duration-300 ${
                      openFeature === index ? 'text-white' : 'text-white/85 text-base group-hover:text-white'
                    }`}
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {feature.title}
                  </h3>

                  <motion.div
                    animate={{ rotate: openFeature === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      openFeature === index ? 'bg-gold border-gold text-black' : 'border-white/15 text-white/40'
                    }`}
                  >
                    <ChevronRight size={18} />
                  </motion.div>
                </div>

                {/* Expandable content */}
                <AnimatePresence initial={false}>
                  {openFeature === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <div className="px-2 pb-14 flex flex-col lg:flex-row gap-10 lg:gap-12 lg:gap-20 pl-28">
                        <p className="text-white/85 text-base leading-relaxed max-w-md flex-shrink-0">
                          {feature.desc}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-grow">
                          {feature.points.map((point, i) => (
                            <motion.div
                              key={point}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                              className="flex items-center gap-4"
                            >
                              <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                              <span className="text-white/85 text-lg">{point}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ROMY PREVIEW ===== */}
      <section className="py-16 lg:py-32 bg-black text-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src="/images/IMG_4687.PNG"
                  alt="Romy Mittler at her desk"
                  className="w-full object-cover aspect-[4/5]"
                />
                {/* Gold corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold/40 -translate-x-4 -translate-y-4" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold/40 translate-x-4 translate-y-4" />
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
                With over 17 years of firsthand experience building and operating a successful
                aesthetic business, Romy brings a rare combination of operational insight,
                leadership experience, branding expertise, and real world understanding of the
                medical aesthetics industry.
              </p>
              <p
                className="text-gold/80 text-lg italic mb-8"
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
            className="w-full h-full object-cover object-center"
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

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Award, label: '17+ Years Experience' },
                  { icon: Briefcase, label: 'Founded & Exited Successfully' },
                  { icon: Heart, label: 'Patient-First Approach' },
                  { icon: BarChart3, label: 'Data-Driven Strategy' },
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
              <a href="https://calendly.com/theriyadh75/30min?back=1&month=2026-05" target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto justify-center text-center">
                Schedule a Consultation
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
