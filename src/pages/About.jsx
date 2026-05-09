import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Users, Settings, Award, MessageSquare, HeartHandshake, Target, Sparkles, Star } from 'lucide-react'
import AnimatedSection from '../components/ui/AnimatedSection'
import SectionHeading from '../components/ui/SectionHeading'

const teamMembers = [
  {
    name: 'Romy Mittler',
    role: 'Founder & CEO',
    subtitle: 'Strategic Growth Director',
    image: '/images/3E949376-3BBA-4CFA-B839-6EAD381C01F2.PNG',
    bio: [
      'Romy Mittler is the founder of RM Strategic Growth, a consulting firm focused on helping medspas, aesthetic practices, and wellness brands strengthen operations, elevate patient experience, improve profitability, and scale strategically.',
      'With over 17 years of firsthand experience building and operating a successful aesthetic business, Romy brings a rare combination of operational insight, leadership experience, branding expertise, and real world understanding of the medical aesthetics industry.',
      'After founding and growing a successful medspa in the highly competitive South Florida market, Romy successfully exited the business, providing her with valuable perspective not only on growth and operations, but also on scalability, team development, business infrastructure, and long term enterprise value.',
      'Known for her competitive, direct yet solutions oriented approach, Romy helps practices identify operational blind spots, strengthen internal systems, improve leadership structure, and create businesses that are not only profitable, but sustainable.',
    ],
    expertise: [
      'Business Operations',
      'Team Leadership',
      'Patient Experience',
      'Sales Strategy',
      'Culture Development',
      'Branding & Positioning',
      'Growth Strategy',
      'Operational Restructuring',
    ],
  },
  {
    name: 'Amanda Lewis',
    role: 'Clinical Director',
    subtitle: 'Master Injector Trainer',
    image: '/images/Amanda.PNG',
    bio: [
      'Amanda Lewis, PA-C, is a renowned aesthetic practitioner, Master Injector, and clinical trainer recognized for her advanced expertise in cosmetic medicine and patient centered aesthetic care. Widely regarded as one of the top injectors in the United States, Amanda has built a reputation for delivering natural, balanced results through a combination of clinical precision, artistry, and innovation.',
      'Since entering the aesthetics industry 9 years ago, Amanda has worked extensively in advanced medical aesthetics, specializing in neurotoxins, dermal fillers, laser treatments, medical weight loss, hormone replacement therapy, and wellness-based treatment programs.',
      'Amanda earned her Bachelor of Science in Public Health from Westminster College in Utah before completing her Master\'s in Clinical Medical Science and Physician Assistant Studies in Miami.',
      'As a trainer and mentor, she works closely with practices and providers to help elevate clinical standards, improve patient outcomes, and create exceptional patient experiences.',
    ],
    expertise: [
      'Advanced Injectables',
      'Clinical Training',
      'Laser Treatments',
      'Patient Care Standards',
      'Provider Education',
      'Treatment Protocols',
    ],
  },
  {
    name: 'Emily Shea',
    role: 'Director of Industry Relations',
    subtitle: 'Practice Development',
    image: '/images/Emily.PNG',
    bio: [
      'With a strong foundation in leadership, operations, and aesthetic medicine, Emily Shea brings a rare combination of clinical industry expertise and strategic business insight to the world of medical aesthetics.',
      'After serving five years in Search and Rescue Operations with the U.S. Coast Guard, Emily earned her Bachelor of Science in Accounting from the University of Tampa and her Master of Science in Management from the University of Miami. She went on to build an impressive 8 year career in aesthetic medical device and pharmaceutical sales.',
      'Throughout her career, Emily has managed multi state territories across the East Coast, overseeing operations in 26 states and Puerto Rico while supporting more than 1,000 medical aesthetic practices.',
      'Emily works closely with clients to identify growth opportunities, improve operational efficiency, strengthen team performance, and elevate overall patient experience — helping practices scale with both profitability and excellence in mind.',
    ],
    expertise: [
      'Business Development',
      'Sales Strategy',
      'Vendor Relations',
      'Partnership Negotiations',
      'Operational Growth',
      'Staff Training',
    ],
  },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us — RM Strategic Growth | Meet Our Expert Team</title>
        <meta
          name="description"
          content="Meet the team behind RM Strategic Growth. Founded by Romy Mittler with 17+ years of aesthetic industry experience. Our experts bring real-world operational, clinical, and strategic expertise."
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
              About Us
            </p>
            <div className="gold-line-center mb-8" />
            <h1 className="text-white max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-heading)' }}>
              Built by Industry Leaders.{' '}
              <span className="italic block mt-2" style={{ fontFamily: 'var(--font-accent)', color: 'var(--color-gold)' }}>
                Backed by Real Experience.
              </span>
            </h1>
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

      {/* ===== FOUNDER STORY ===== */}
      <section className="py-16 lg:py-32 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <AnimatedSection direction="left" className="sticky top-32">
              <div className="relative">
                <img
                  src="/images/Romy Speech 2.PNG"
                  alt="Romy Mittler — Founder of RM Strategic Growth"
                  className="w-full object-cover aspect-[3/4]"
                />
                <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-gold/30 -translate-x-4 -translate-y-4" />
                <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-gold/30 translate-x-4 translate-y-4" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <p className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4">
                Founder. Operator. Growth Strategist.
              </p>
              <div className="gold-line mb-8" />
              <h2 className="mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                About Romy Mittler
              </h2>

              <div className="space-y-5">
                <p className="text-gray-warm text-lg leading-relaxed">
                  Romy Mittler is the founder of RM Strategic Growth, a consulting firm focused on helping
                  medspas, aesthetic practices, and wellness brands strengthen operations, elevate patient
                  experience, improve profitability, and scale strategically.
                </p>
                <p className="text-gray-warm text-lg leading-relaxed">
                  With over 17 years of firsthand experience building and operating a successful aesthetic
                  business, Romy brings a rare combination of operational insight, leadership experience,
                  branding expertise, and real world understanding of the medical aesthetics industry.
                </p>
                <p className="text-gray-warm text-lg leading-relaxed">
                  After founding and growing a successful medspa in the highly competitive South Florida market,
                  Romy successfully exited the business, providing her with valuable perspective not only on
                  growth and operations, but also on scalability, team development, business infrastructure,
                  and long term enterprise value.
                </p>
              </div>

              <div className="my-10 p-8 bg-cream border-l-4 border-gold">
                <p
                  className="text-charcoal italic leading-relaxed text-xl"
                  style={{ fontFamily: 'var(--font-bodoni)', fontSize: '1.4rem' }}
                >
                  "Her experience inside the day-to-day realities of aesthetic businesses allows her to provide
                  guidance grounded in practical execution — not generic consulting theory from someone who
                  has never walked a mile in your shoes."
                </p>
              </div>

              <div className="space-y-5">
                <p className="text-gray-warm text-lg leading-relaxed">
                  Romy understands the pressures aesthetic business owners face because she has lived them
                  herself. From hiring and managing teams to navigating growth challenges, operational
                  inefficiencies, patient expectations, staffing dynamics, branding decisions, and scaling
                  pressures, she brings a founder's perspective to every consulting relationship.
                </p>
              </div>

              <div className="mt-10 p-6 bg-black text-white">
                <h4 className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                  The Mission
                </h4>
                <p className="text-white/85 text-lg leading-relaxed">
                  To help owners build stronger businesses without losing the brand identity, culture, and
                  patient experience that made them successful in the first place.
                </p>
                <p className="text-white/40 text-xs mt-4 tracking-wider">
                  Based in South Florida. Working With Clients Nationwide.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== THE RM DIFFERENCE ===== */}
      <section className="py-16 lg:py-32 bg-black text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="section-container relative z-10">
          <SectionHeading
            subtitle="The RM Strategic Growth Difference"
            title="We Believe Luxury Brands Are Built Behind the Scenes"
            description="Long before patients ever walk through the door."
            light={true}
            useBodoni={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto mt-16">
            {[
              { name: 'Team Culture', icon: Users },
              { name: 'Operational Consistency', icon: Settings },
              { name: 'Leadership Standards', icon: Award },
              { name: 'Consultation Experience', icon: MessageSquare },
              { name: 'Patient Communication', icon: HeartHandshake },
              { name: 'Accountability', icon: Target },
              { name: 'Aesthetics', icon: Sparkles },
              { name: 'Reputation', icon: Star },
            ].map((item, index) => (
              <AnimatedSection key={item.name} delay={index * 0.05}>
                <div className="group h-full p-8 bg-[#111111] border border-white/10 rounded-2xl hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/10 relative overflow-hidden flex flex-col items-center text-center">
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5 mb-6 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-500">
                    <item.icon className="text-gold" size={24} />
                  </div>
                  
                  <p className="text-base font-semibold tracking-[0.1em] text-white/90 uppercase" style={{ fontFamily: 'var(--font-body)' }}>
                    {item.name}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MEET THE TEAM ===== */}
      <section className="py-16 lg:py-32 bg-white" id="team">
        <div className="section-container">
          <SectionHeading
            subtitle="Meet the Team"
            title="Experts Driving Your Growth"
            description="Our team combines operational experience, clinical expertise, leadership, branding, patient experience, sales strategy, and growth execution under one consulting group."
          />

          <div className="space-y-32">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.name}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 lg:gap-16 items-start ${
                    index % 2 === 1 ? 'lg:direction-rtl' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative group">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full object-cover aspect-[4/5]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* Bio */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <p className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-2">
                      {member.role}
                    </p>
                    {member.subtitle && (
                      <p className="text-gray-warm text-base tracking-wider mb-4">
                        {member.subtitle}
                      </p>
                    )}
                    <div className="gold-line mb-6" />
                    <h3 className="text-2xl lg:text-3xl mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                      {member.name}
                    </h3>

                    <div className="space-y-4 mb-8">
                      {member.bio.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-warm text-base lg:text-lg leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div>
                      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-charcoal mb-4">
                        Areas of Expertise
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 text-xs border border-gold/25 text-gray-warm hover:border-gold/50 hover:text-gold transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM COLLECTIVE ===== */}
      <section className="py-16 lg:py-32 bg-black text-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimatedSection>
              <p className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4">
                Collective Excellence
              </p>
              <div className="gold-line mb-8" />
              <h2 className="text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Where Clinical Excellence Meets{' '}
                <span className="italic" style={{ fontFamily: 'var(--font-accent)' }}>
                  Strategic Growth
                </span>
              </h2>
              <p className="text-white/85 text-lg leading-relaxed mb-6">
                Our experts bring together a rare combination of real world experience across every
                major aspect of the aesthetic industry, from ownership and operations to clinical
                excellence, injector education, pharmaceutical sales, and large scale practice growth.
              </p>
              <p className="text-white/85 text-lg leading-relaxed mb-6">
                What sets our team apart is not only our combined experience, but the depth of it.
                We have collectively worked with thousands of patients, providers, practices,
                industry leaders, and aesthetic brands nationwide, giving our clients direct access
                to the strategies, systems, and insights used by some of the most successful
                practices in the country.
              </p>
              <p
                className="text-gold/80 italic text-xl mt-8"
                style={{ fontFamily: 'var(--font-accent)', fontSize: '1.35rem' }}
              >
                "We do not teach aesthetics business from the outside looking in —
                we have lived it firsthand."
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <img
                src="/images/Group sitting.PNG"
                alt="RM Strategic Growth Team Together"
                className="w-full object-cover aspect-[4/3]"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <AnimatedSection delay={0}>
              <img
                src="/images/Romy Speech 2.PNG"
                alt="Romy Mittler presenting Strategy Systems Scaling"
                className="w-full h-80 object-cover object-top"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <img
                src="/images/IMG_4687.PNG"
                alt="Romy Mittler working"
                className="w-full h-80 object-cover"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img
                src="/images/Romy Speach.jpg"
                alt="Romy Mittler speaking at a conference"
                className="w-full h-80 object-cover"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 lg:py-28 bg-black text-center">
        <div className="section-container">
          <AnimatedSection>
            <p
              className="text-gold/80 italic text-2xl mb-6"
              style={{ fontFamily: 'var(--font-accent)', fontSize: '1.5rem' }}
            >
              Build a stronger business. Elevate your brand. Scale with strategy.
            </p>
            <div className="gold-line-center mb-8" />
            <h2 className="text-white mb-8 max-w-xl mx-auto" style={{ fontFamily: 'var(--font-heading)' }}>
              Ready to Work Together?
            </h2>
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
