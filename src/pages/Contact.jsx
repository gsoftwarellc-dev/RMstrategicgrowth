import { useEffect } from 'react'
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
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

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
      <section className="pt-32 pb-0 bg-[#0A0A0A] overflow-hidden">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* LEFT — copy + CTA */}
            <div className="flex-1 py-16 text-white">
              <AnimatedSection>
                <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
                  Book a Consultation
                </p>
                <div className="gold-line mb-8" />
                <h1
                  className="text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-white"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Are You Ready to<br />Increase Your Revenue<br />by{' '}
                  <em className="not-italic" style={{ fontFamily: 'var(--font-accent)', color: 'var(--color-gold)', fontStyle: 'italic' }}>
                    100–150%?
                  </em>
                </h1>
                <p className="text-white text-base max-w-md mb-10 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  Work directly with our team of aesthetic industry experts to scale your practice, boost revenue, and build a business that thrives.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <button
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-primary"
                  >
                    Book a Call
                  </button>
                  <a
                    href="tel:+14075755121"
                    className="flex items-center gap-2 text-sm font-medium tracking-wide transition-colors hover:opacity-80"
                    style={{ color: 'var(--color-gold)' }}
                  >
                    <Phone size={16} />
                    407-575-5121
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* RIGHT — Romy photo */}
            <div className="flex-shrink-0 w-full lg:w-[460px] flex items-center justify-center lg:justify-end relative">
              <div className="relative w-[360px] lg:w-[460px]">
                <img
                  src="/images/EAD0FBD2-B4AA-4D96-B892-79C5B63C0A01.PNG"
                  alt="Romy Mittler"
                  className="w-full object-cover object-center block"
                />
              </div>
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
              Select a time below that works best for you.
            </p>
          </AnimatedSection>

          <div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div
              className="calendly-inline-widget w-full"
              data-url="https://calendly.com/theriyadh75/30min?back=1&month=2026-05&hide_gdpr_banner=1"
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
            href="https://calendly.com/theriyadh75/30min?back=1&month=2026-05"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4 group"
          >
            Book a Call
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse ml-2" />
          </a>
        </div>

        <div className="flex justify-center gap-6 px-4 mt-10">
          {teamMembers.map((member, i) => (
            <div key={i} className="relative flex-1 min-w-0 max-w-[420px] h-[550px] rounded-[2rem] overflow-hidden group cursor-default">
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
