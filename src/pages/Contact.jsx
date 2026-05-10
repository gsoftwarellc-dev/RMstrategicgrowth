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

      {/* ===== CALENDLY BOOKING ===== */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-cream text-charcoal min-h-screen flex flex-col justify-center">
        <div className="section-container w-full">
          <AnimatedSection className="text-center mb-10">
            <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Get In Touch
            </p>
            <div className="gold-line-center mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Schedule Your Consultation
            </h1>
            <p className="text-black max-w-2xl mx-auto text-lg mb-8">
              Select a time below to book your strategic consultation call.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-charcoal/80 font-medium">
              <a href="tel:+14075755121" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone size={18} className="text-gold" />
                407-575-5121
              </a>
            </div>
          </AnimatedSection>

          {/* Calendly Inline Widget */}
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

        <div className="flex animate-marquee-fast gap-6 whitespace-nowrap px-4 w-max hover:animation-pause">
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
                  <h3 className="text-white text-2xl font-bold tracking-normal" style={{ fontFamily: 'var(--font-heading)' }}>{member.name}</h3>
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
