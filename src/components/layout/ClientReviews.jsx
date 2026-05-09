import { BadgeCheck, Star } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'

const testimonials = [
  {
    name: 'Dr. Sarah Jenkins',
    role: 'Medical Director',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'RM Strategic Growth completely transformed our operations. We started seeing qualified patient leads within the first week and our retention rate has never been higher.',
  },
  {
    name: 'Michael Chen',
    role: 'Practice Manager',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'From front-desk training to financial modeling, everything was handled professionally. Clear strategy, real ROI-focused execution, and a team that actually understands aesthetics.',
  },
  {
    name: 'Olivia Martinez',
    role: 'Clinic Founder',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: "One of the most dependable consulting teams we've worked with. Their operational blueprints saved us countless hours every week. Highly reliable and easy to work with.",
  },
  {
    name: 'Emily Robinson',
    role: 'Aesthetics Provider',
    image: 'https://randomuser.me/api/portraits/women/42.jpg',
    text: 'They helped streamline our patient workflow from consultation to treatment. Patient engagement improved massively. It feels like they are an extension of our own team.',
  },
  {
    name: 'Dr. James Carter',
    role: 'Plastic Surgeon',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'Our team feels more aligned than ever. Communication, execution, and results are consistently strong. Their strategy for scaling our new location was flawless.',
  },
  {
    name: 'Jessica Taylor',
    role: 'MedSpa Owner',
    image: 'https://randomuser.me/api/portraits/women/24.jpg',
    text: 'The strategic roadmap they built for us clarified our growth path entirely. We doubled our high-ticket service revenue in just six months following their approach.',
  },
  {
    name: 'Amanda Hughes',
    role: 'Lead Injector',
    image: 'https://randomuser.me/api/portraits/women/90.jpg',
    text: 'Their mentorship completely transformed my approach to patient consultations. I went from feeling like a salesperson to a trusted advisor, and my conversion rates skyrocketed.',
  },
  {
    name: 'Dr. Robert Vance',
    role: 'Dermatologist',
    image: 'https://randomuser.me/api/portraits/men/82.jpg',
    text: 'We had been struggling with staff turnover and culture for years. RM Strategic Growth helped us implement leadership frameworks that stabilized the team and improved morale instantly.',
  },
  {
    name: 'Chloe Mitchell',
    role: 'Spa Director',
    image: 'https://randomuser.me/api/portraits/women/55.jpg',
    text: 'The vendor negotiation strategies they taught us saved our practice thousands of dollars in the first quarter alone. They know the business side of aesthetics better than anyone.',
  },
  {
    name: 'David Foster',
    role: 'Aesthetics Clinic CEO',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    text: 'We brought them in to help scale from two locations to five. Their systematic approach to standardizing operations across multiple clinics was the blueprint we needed for success.',
  },
  {
    name: 'Samantha Lee',
    role: 'Patient Coordinator',
    image: 'https://randomuser.me/api/portraits/women/17.jpg',
    text: 'Their front-desk training program is unmatched. Our entire team now feels empowered to handle difficult questions, pre-qualify leads effectively, and book premium treatments.',
  },
  {
    name: 'Dr. Marcus Thorne',
    role: 'Facial Plastic Surgeon',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
    text: 'Integrating a medspa into our surgical practice was daunting. They guided us through every step—from equipment selection to staffing—ensuring a highly profitable launch.',
  },
]

export default function ClientReviews() {
  const row1 = testimonials.slice(0, 4)
  const row2 = testimonials.slice(4, 8)
  const row3 = testimonials.slice(8, 12)

  const ReviewCard = ({ review }) => (
    <div className="bg-white rounded-2xl p-8 w-[350px] md:w-[450px] min-h-[320px] flex-shrink-0 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-6">
        <img 
          src={review.image} 
          alt={review.name} 
          className="w-14 h-14 rounded-full object-cover flex-shrink-0 border-2 border-white shadow-sm"
        />
        <div>
          <div className="flex items-center gap-1.5">
            <h4 className="text-black text-lg font-semibold m-0 p-0 leading-none">
              {review.name}
            </h4>
            <BadgeCheck className="text-blue-500 flex-shrink-0" size={18} fill="currentColor" stroke="white" />
          </div>
          <p className="text-gray-500 text-sm mt-1 mb-0 p-0">
            {review.role}
          </p>
        </div>
      </div>
      
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} className="text-blue-500" fill="currentColor" />
        ))}
      </div>

      <p className="text-gray-700 leading-relaxed text-sm md:text-base flex-grow">
        {review.text}
      </p>
    </div>
  )

  return (
    <section className="py-24 lg:py-28 bg-black overflow-hidden relative">
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 1rem)); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(calc(-50% - 1rem)); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-left {
            animation: scroll-left 40s linear infinite;
          }
          .animate-scroll-right {
            animation: scroll-right 40s linear infinite;
          }
          .hover-pause:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="section-container mb-16">
        <AnimatedSection className="text-center">
          <p className="text-white/60 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Client Feedback
          </p>
          <div className="w-16 h-[2px] bg-blue-500 mx-auto mb-8" />
          <h2 className="text-white mb-6 italic font-bold" style={{ fontFamily: 'var(--font-bodoni)' }}>
            What Our Clients Say
          </h2>
        </AnimatedSection>
      </div>

      <div className="flex flex-col gap-6 w-full">
        {/* Row 1: Right to Left */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden">
          <div className="flex gap-6 animate-scroll-left hover-pause px-3 w-max">
            {[...row1, ...row1, ...row1].map((review, idx) => (
              <ReviewCard key={idx} review={review} />
            ))}
          </div>
        </div>

        {/* Row 2: Left to Right */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden">
          <div className="flex gap-6 animate-scroll-right hover-pause px-3 w-max">
            {[...row2, ...row2, ...row2].map((review, idx) => (
              <ReviewCard key={idx} review={review} />
            ))}
          </div>
        </div>

        {/* Row 3: Right to Left */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden">
          <div className="flex gap-6 animate-scroll-left hover-pause px-3 w-max" style={{ animationDuration: '45s' }}>
            {[...row3, ...row3, ...row3].map((review, idx) => (
              <ReviewCard key={idx} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
