import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { MapPin, Mail, Phone } from 'lucide-react'
import AnimatedSection from '../components/ui/AnimatedSection'
import SectionHeading from '../components/ui/SectionHeading'

const teamMembers = [
  {
    name: 'Romy Mittler',
    image: '/images/F05D89D5-F04B-4430-9108-B88E73820A05.PNG',
    desc: 'Founder & CEO. Over 17 years of firsthand experience building and operating successful aesthetic businesses.',
  },
  {
    name: 'Amanda Lewis',
    image: '/images/Amanda.PNG',
    desc: 'Clinical Director and master injector trainer with advanced expertise in aesthetic medicine.',
  },
  {
    name: 'Emily Shea',
    image: '/images/Emily.PNG',
    desc: 'Director of Industry Relations with extensive practice development and growth strategy expertise.',
  }
]
export default function Contact() {
  const location = useLocation()

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script)
    }
  }, [])

  useEffect(() => {
    if (location.hash === '#booking') {
      setTimeout(() => {
        const el = document.getElementById('booking')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 500)
    }
  }, [location])

  return (
    <>
      <Helmet>
        <title>Contact Us — RM Strategic Growth | Schedule a Consultation</title>
        <meta
          name="description"
          content="Ready to elevate your aesthetic business? Contact RM Strategic Growth to schedule a strategic consultation. Based in South Florida, working with clients worldwide."
        />
      </Helmet>

      {/* ===== HERO BOOKING BANNER ===== */}

      {/* Mobile: full-screen background image with text overlay */}
      <section className="relative lg:hidden h-screen min-h-[600px] bg-[#0A0A0A] overflow-hidden">
        <img
          src="/images/EAD0FBD2-B4AA-4D96-B892-79C5B63C0A01.PNG"
          alt="Romy Mittler"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        {/* Gradient overlay — heavy at bottom for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/20 pointer-events-none" />
        {/* Top fade for navbar blend */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none" />

        {/* Text pinned to bottom */}
        <div className="absolute inset-x-0 bottom-0 px-6 pb-10">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--color-gold)' }}>
              Book a Consultation
            </p>
            <div className="gold-line mb-4" />
            <h1
              className="text-[1.75rem] font-bold leading-[1.2] mb-4 text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Are You Ready to<br />Increase Your Revenue<br />by{' '}
              <em style={{ fontFamily: 'var(--font-accent)', color: 'var(--color-gold)', fontStyle: 'italic' }}>
                100–150%?
              </em>
            </h1>
            <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Work directly with our team of aesthetic industry experts to scale your practice, boost revenue, and build a business that thrives.
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary w-full justify-center"
              >
                Book a Call
              </button>
              <a
                href="tel:+14075755121"
                className="flex items-center justify-center gap-2 text-sm font-medium tracking-wide"
                style={{ color: 'var(--color-gold)' }}
              >
                <Phone size={16} />
                407-575-5121
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Desktop: side-by-side layout */}
      <section className="hidden lg:flex bg-[#0A0A0A] overflow-hidden min-h-screen items-center">
        <div className="section-container w-full">
          <div className="flex flex-row items-center gap-12 py-0">
            {/* LEFT — copy + CTA */}
            <div className="flex-1 text-white">
              <AnimatedSection>
                <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
                  Book a Consultation
                </p>
                <div className="gold-line mb-6" />
                <h1
                  className="font-bold leading-[1.1] mb-5 text-white text-[clamp(2.5rem,4vw,3.75rem)]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Are You Ready to<br />Increase Your Revenue<br />by{' '}
                  <em style={{ fontFamily: 'var(--font-accent)', color: 'var(--color-gold)', fontStyle: 'italic' }}>
                    100–150%?
                  </em>
                </h1>
                <p className="text-white/85 text-base max-w-md mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  Work directly with our team of aesthetic industry experts to scale your practice, boost revenue, and build a business that thrives.
                </p>
                <div className="flex flex-row gap-4 items-center">
                  <button
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-primary justify-center"
                  >
                    Book a Call
                  </button>
                  <a
                    href="tel:+14075755121"
                    className="flex items-center gap-2 text-sm font-medium tracking-wide hover:opacity-80 transition-opacity"
                    style={{ color: 'var(--color-gold)' }}
                  >
                    <Phone size={16} />
                    407-575-5121
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* RIGHT — Romy photo */}
            <div className="flex-shrink-0 w-[460px] flex items-end justify-end">
              <img
                src="/images/EAD0FBD2-B4AA-4D96-B892-79C5B63C0A01.PNG"
                alt="Romy Mittler"
                className="w-full object-cover object-top block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CALENDLY BOOKING ===== */}
      <section id="booking" className="py-16 lg:py-24 bg-cream text-charcoal">
        <div className="section-container w-full">
          <AnimatedSection className="text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
              Pick a Time
            </p>
            <div className="gold-line-center mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Schedule Your Consultation
            </h2>
            <p className="text-black/70 max-w-xl mx-auto text-base">
              You can directly call on this number <span className="font-semibold text-black">407-575-5121</span> or book a suitable time slot below.
            </p>
          </AnimatedSection>

          <div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div
              className="calendly-inline-widget w-full"
              data-url="https://calendly.com/romymittler/30min?back&hide_gdpr_banner=1"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </div>
      </section>

      {/* ===== TEAM MARQUEE ===== */}
      <section className="py-16 lg:py-32 bg-[#0A0A0A] overflow-hidden">
        <div className="section-container mb-12 flex flex-col items-center">
          <SectionHeading
            subtitle="The Team"
            title="Meet Our Experts"
            description="Work with the best in the aesthetic business consulting industry."
            light={true}
            useBodoni={true}
          />
          <a
            href="https://calendly.com/romymittler/30min?back"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4 group"
          >
            Book a Call
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse ml-2" />
          </a>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-6 px-4 mt-10">
          {teamMembers.map((member, i) => (
            <div key={i} className="relative w-full lg:flex-1 lg:min-w-0 lg:max-w-[420px] h-[520px] lg:h-[550px] rounded-[2rem] overflow-hidden group cursor-default">
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
            </div>
          ))}
        </div>
      </section>

      {/* ===== MAP / NATIONWIDE BANNER ===== */}
      <section className="py-12 lg:py-24 bg-black text-center">
        <div className="section-container">
          <AnimatedSection>
            <MapPin size={32} className="text-gold mx-auto mb-6" />
            <h2 className="text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Based in{' '}
              <span className="italic text-gold" style={{ fontFamily: 'var(--font-accent)' }}>
                South Florida
              </span>
            </h2>
            <p className="text-white/85 text-base mb-2">Working With Clients Worldwide</p>
            <div className="gold-line-center mt-8" />
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
